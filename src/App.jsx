import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import BorderGlow from "./components/BorderGlow/BorderGlow";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getCopy,
  getLanguageMeta,
  getLocalizedSurvey,
  languageOptions,
  normalizeLanguage
} from "./data/i18n.js";
import { auth, db } from "./firebase";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";

const iconAliases = {
  badgePlus: "BadgePlus",
  barChart: "BarChart",
  batteryCharging: "BatteryCharging",
  batteryLow: "BatteryLow",
  blocks: "Blocks",
  calendarClock: "CalendarClock",
  calendarDays: "CalendarDays",
  calendarHeart: "CalendarHeart",
  candyOff: "CandyOff",
  chevronRight: "ChevronRight",
  circleCheck: "CircleCheck",
  circleDot: "CircleDot",
  circleHelp: "CircleHelp",
  circleSlash: "CircleSlash",
  clipboardCheck: "ClipboardCheck",
  clipboardList: "ClipboardList",
  clock: "Clock",
  cloudLightning: "CloudLightning",
  cloudSun: "CloudSun",
  fileCheck2: "FileCheck2",
  flaskConical: "FlaskConical",
  glassWater: "GlassWater",
  heartCrack: "HeartCrack",
  heartHandshake: "HeartHandshake",
  heartPulse: "HeartPulse",
  home: "Home",
  indianRupee: "IndianRupee",
  key: "Key",
  lineChart: "LineChart",
  logOut: "LogOut",
  mail: "Mail",
  map: "Map",
  mapPin: "MapPin",
  medicalCross: "Cross",
  messagesSquare: "MessagesSquare",
  monitorSmartphone: "MonitorSmartphone",
  notebookText: "NotebookText",
  packageOpen: "PackageOpen",
  packagePlus: "PackagePlus",
  packageX: "PackageX",
  phone: "Phone",
  scanHeart: "ScanHeart",
  scanText: "ScanText",
  search: "Search",
  shieldAlert: "ShieldAlert",
  shieldCheck: "ShieldCheck",
  shieldPlus: "ShieldPlus",
  smilePlus: "SmilePlus",
  surface: "Circle",
  timerReset: "TimerReset",
  trendingDown: "TrendingDown",
  trendingUp: "TrendingUp",
  userRound: "UserRound",
  userRoundCheck: "UserRoundCheck",
  userRoundPlus: "UserRoundPlus",
  usersRound: "UsersRound",
  wifiOff: "WifiOff",
  zap: "Zap"
};

const toPascal = (name = "") =>
  name
    .replace(/(^\w|-\w)/g, (part) => part.replace("-", "").toUpperCase())
    .replace(/^\w/, (part) => part.toUpperCase());

function Icon({ name, className = "h-5 w-5", strokeWidth = 2 }) {
  const iconName = iconAliases[name] || toPascal(name);
  const LucideIcon = Icons[iconName] || Icons.Circle;
  return <LucideIcon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

const cardVariants = {
  enter: (direction) => ({
    y: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.985
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    y: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.985
  })
};

function getDefaultAnswer(question) {
  if (question.type === "multi" || question.type === "top-n") return [];
  if (question.type === "scale") return Math.ceil((question.min + question.max) / 2);
  return "";
}

function isAnswered(question, value) {
  if (question.type === "role" || question.type === "single") return Boolean(value);
  if (question.type === "input") {
    if (!value) return false;
    if (question.id === "mom_pincode") return /^\d{6}$/.test(String(value));
    return String(value).trim().length > 0;
  }
  if (question.type === "textarea") return String(value || "").trim().length > 0;
  if (question.type === "scale") return value !== undefined && value !== "";
  if (question.type === "top-n") {
    const selected = Array.isArray(value) ? value.length : 0;
    if (question.exact) return selected === question.max;
    const minimum = question.minSelections || 1;
    const withinMaximum = question.max ? selected <= question.max : true;
    return selected >= minimum && withinMaximum;
  }
  if (question.type === "multi") return Array.isArray(value) && value.length > 0;
  return false;
}

function validationMessage(question, value, copy) {
  if (question.type === "top-n" && question.exact) {
    return copy.validation.exact(question.max);
  }
  if (question.type === "top-n" && question.minSelections && question.max) {
    return copy.validation.between(question.minSelections, question.max);
  }
  if (question.type === "top-n" && question.minSelections) {
    return copy.validation.atLeast(question.minSelections);
  }
  if (question.type === "top-n") return copy.validation.upTo(question.max);
  if (question.id === "mom_pincode") return copy.validation.pincode;
  if (question.type === "textarea") return copy.validation.textarea;
  return copy.validation.select;
}

function shouldEndSurveyNow(selectedRole, question, answer) {
  return selectedRole === "mother" && question?.id === "mom_product_awareness" && answer === "never_heard";
}

function getReadableAnswer(question, answer) {
  if (!question?.options) return answer;

  if (Array.isArray(answer)) {
    return answer.map((value) => question.options.find((option) => option.value === value)?.label || value).join(", ");
  }

  return question.options.find((option) => option.value === answer)?.label || answer;
}

function slugifyDocPart(value, fallback = "unknown") {
  const slug = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return slug || fallback;
}

function createSubmissionDocSuffix(timestamp) {
  const compactTimestamp = String(timestamp || new Date().toISOString())
    .replace(/\D/g, "")
    .slice(0, 17);
  const randomPart = Math.random().toString(36).slice(2, 8);

  return [compactTimestamp, randomPart].filter(Boolean).join("_");
}

async function ensureAnonymousSession() {
  if (auth.currentUser) return auth.currentUser;
  const credential = await signInAnonymously(auth);
  return credential.user;
}

function getSaveErrorMessage(error, copy) {
  if (error?.code === "auth/admin-restricted-operation") {
    return "Firebase Anonymous sign-in is disabled for this project. Enable it in Firebase Authentication, then try again.";
  }

  if (error?.code === "permission-denied") {
    return "Firestore rules are blocking this save. Allow authenticated users to create survey submissions, then try again.";
  }

  return copy.survey.saveError;
}

function getTimestampMillis(submission) {
  const timestamp = submission?.completedAt || submission?.createdAt || submission?.completedAtLocal;
  if (timestamp?.toMillis) return timestamp.toMillis();
  if (typeof timestamp === "string") {
    const parsed = Date.parse(timestamp);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

function pickLatestSubmission(submissions) {
  return [...submissions].sort((a, b) => getTimestampMillis(b) - getTimestampMillis(a))[0] || null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [authReady, setAuthReady] = useState(false);
  const [authUser, setAuthUser] = useState(() => auth.currentUser);
  const [language, setLanguage] = useState(() =>
    normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE)
  );
  const copy = useMemo(() => getCopy(language), [language]);
  const languageMeta = useMemo(() => getLanguageMeta(language), [language]);
  const { branches, roleQuestion } = useMemo(() => getLocalizedSurvey(language), [language]);
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("survey_user_profile");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [userSubmission, setUserSubmission] = useState(null);
  const [phase, setPhase] = useState(() => {
    const savedProfile = localStorage.getItem("survey_user_profile");
    if (!savedProfile) return "profile";
    return localStorage.getItem("survey_phase") || "landing";
  });
  const [role, setRole] = useState(() => localStorage.getItem("survey_role") || "");
  const [step, setStep] = useState(() => Number(localStorage.getItem("survey_step")) || 0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem("survey_answers");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [showError, setShowError] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [authError, setAuthError] = useState("");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    let isActive = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isActive) return;

      if (user) {
        setAuthUser(user);
        setAuthReady(true);
        return;
      }

      ensureAnonymousSession()
        .then((signedInUser) => {
          if (!isActive) return;
          setAuthUser(signedInUser);
          setAuthReady(true);
        })
        .catch((error) => {
          console.error("Error signing in anonymously:", error);
          if (!isActive) return;
          setAuthUser(null);
          setAuthReady(true);
        });
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const normalizedLanguage = normalizeLanguage(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    document.documentElement.lang = getLanguageMeta(normalizedLanguage).htmlLang;
  }, [language]);

  useEffect(() => {
    const fetchExistingSubmission = async () => {
      if (!authReady) return;

      if (userProfile?.name && userProfile?.mobile && auth.currentUser) {
        try {
          const q = query(
            collection(db, "survey_submissions"),
            where("authUid", "==", auth.currentUser.uid),
            where("userName", "==", userProfile.name),
            where("userMobile", "==", userProfile.mobile)
          );
          const submissionsSnapshot = await getDocs(q);
          const submissions = submissionsSnapshot.docs.map((submissionDoc) => ({
            id: submissionDoc.id,
            ...submissionDoc.data()
          }));

          if (submissions.length > 0) {
            setUserSubmission(pickLatestSubmission(submissions));
          } else {
            setUserSubmission(null);
          }
        } catch (error) {
          console.error("Error fetching submission:", error);
          setUserSubmission(null);
        }
      } else {
        setUserSubmission(null);
      }
      setLoading(false);
    };

    fetchExistingSubmission();
  }, [authReady, userProfile]);

  useEffect(() => {
    localStorage.setItem("survey_phase", phase);
    localStorage.setItem("survey_role", role);
    localStorage.setItem("survey_step", step.toString());
    localStorage.setItem("survey_answers", JSON.stringify(answers));
    if (userProfile) {
      localStorage.setItem("survey_user_profile", JSON.stringify(userProfile));
    } else {
      localStorage.removeItem("survey_user_profile");
    }
  }, [phase, role, step, answers, userProfile]);

  useEffect(() => {
    if ((phase === "survey" || phase === "role") && !isAutoScrolling) {
      setIsAutoScrolling(true);
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
        setTimeout(() => setIsAutoScrolling(false), 800);
      }, 100);
    }
  }, [step, phase, role]);

  // Hardware back button handling for mobile
  useEffect(() => {
    // Only trap if we're not on the login/signup screens or if we want custom behavior there too
    // For now, let's trap everywhere to prevent accidental exits
    window.history.pushState({ trapped: true }, "", window.location.pathname);

    const handlePopState = (e) => {
      // Re-push to keep the "trap" active
      window.history.pushState({ trapped: true }, "", window.location.pathname);
      handleBack();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [phase, step, role]); // Re-bind when state changes so handleBack uses fresh values

  const branch = role ? branches[role] : null;
  const currentQuestion =
    phase === "role" ? roleQuestion : phase === "survey" && branch ? branch.questions[step] : null;

  useEffect(() => {
    if (phase === "survey" && branch && step >= branch.questions.length) {
      setStep(Math.max(branch.questions.length - 1, 0));
    }
  }, [phase, branch, step]);

  const maxSurveyLength = Math.max(...Object.values(branches).map((item) => item.questions.length)) + 1;
  const totalQuestions = branch ? branch.questions.length + 1 : maxSurveyLength;
  const visibleIndex = phase === "signup" || phase === "login" || phase === "landing" ? 0 : phase === "role" ? 1 : phase === "survey" ? step + 2 : totalQuestions;
  const progress = phase === "thanks" ? 100 : Math.min(100, Math.round((visibleIndex / totalQuestions) * 100));

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] ?? getDefaultAnswer(currentQuestion) : "";
  const canMove = currentQuestion ? isAnswered(currentQuestion, currentAnswer) : true;
  const isSubmitStep =
    phase === "survey" &&
    branch &&
    (step === branch.questions.length - 1 || shouldEndSurveyNow(role, currentQuestion, currentAnswer));

  const updateAnswer = (id, value, autoAdvance = false) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
    setShowError(false);
    // Auto-advance is now disabled globally per user request
    /*
    if (autoAdvance) {
      setTimeout(() => {
        handleContinue();
      }, 450);
    }
    */
  };

  const handleProfileComplete = (profileData) => {
    setUserProfile(profileData);
    setDirection(1);
    setPhase("landing");
  };

  const handleStart = () => {
    setDirection(1);
    setRole("");
    setStep(0);
    setAnswers({});
    setPhase("role");
    setShowError(false);
  };

  const saveSurveySubmission = async (submittedAnswers, route = {}) => {
    const signedInUser = await ensureAnonymousSession();
    const authUid = signedInUser.uid;
    const userName = userProfile?.name || "User";
    const userMobile = userProfile?.mobile || "";
    const userPincode = userProfile?.pincode || "";
    const userAge = userProfile?.age || "";
    const branchLabel = branch?.label || role;
    const branchAudience = branch?.audience || branchLabel;
    const branchShortLabel = branch?.shortLabel || branchLabel;
    const completedAtLocal = new Date().toISOString();

    const roleLabel = roleQuestion.options.find((option) => option.value === role)?.label || role;
    const responseList = [
      {
        order: 0,
        questionId: roleQuestion.id,
        paperQuestion: copy.profileSetup,
        question: roleQuestion.title,
        answer: roleLabel,
        value: role
      }
    ];

    branch.questions.forEach((question, index) => {
      const answer = submittedAnswers[question.id];
      if (answer === undefined) return;

      responseList.push({
        order: index + 1,
        questionId: question.id,
        paperQuestion: question.eyebrow || copy.question.questionOf(index + 1, branch.questions.length),
        question: question.title,
        answer: getReadableAnswer(question, answer),
        value: answer
      });
    });

    const responses = responseList.reduce((accumulator, response) => {
      accumulator[response.questionId] = {
        order: response.order,
        paperQuestion: response.paperQuestion,
        question: response.question,
        answer: response.answer,
        value: response.value
      };
      return accumulator;
    }, {});

    const docName = [
      slugifyDocPart(userName, "user"),
      slugifyDocPart(userMobile, "mobile"),
      slugifyDocPart(role, "survey"),
      createSubmissionDocSuffix(completedAtLocal)
    ].join("_");

    const surveyData = {
      submissionTitle: `${userName} - ${branchLabel}`,
      authUid,
      userName,
      userMobile,
      userPincode,
      userAge,
      respondent: {
        name: userName,
        mobile: userMobile,
        pincode: userPincode,
        age: userAge
      },
      survey: {
        branch: role,
        label: branchLabel,
        audience: branchAudience,
        shortLabel: branchShortLabel,
        status: route.endedEarly ? "completed_early" : "completed",
        completedQuestionCount: Math.max(responseList.length - 1, 0),
        totalQuestionsInPath: branch.questions.length,
        endedEarly: Boolean(route.endedEarly),
        endedAtQuestionId: route.endedAtQuestionId || null,
        endedAtPaperQuestion: route.endedAtPaperQuestion || null,
        endReason: route.endReason || null
      },
      responses,
      responseList,
      rawAnswers: submittedAnswers,
      completedAt: serverTimestamp(),
      completedAtLocal,
      metadata: {
        platform: "web",
        branch: role,
        surveyName: branchLabel,
        documentId: docName,
        authUid,
        language,
        languageLabel: languageMeta.label
      }
    };

    await setDoc(doc(db, "survey_submissions", docName), surveyData);

    const userDocId = authUid;
    await setDoc(
      doc(db, "users", userDocId),
      {
        name: userName,
        mobile: userMobile,
        pincode: userPincode,
        age: userAge,
        lastSubmission: {
          documentId: docName,
          surveyBranch: role,
          surveyName: branchLabel,
          submissionTitle: surveyData.submissionTitle,
          completedAt: serverTimestamp(),
          completedAtLocal
        }
      },
      { merge: true }
    );

    setUserSubmission(surveyData);
  };

  const handleContinue = async () => {
    if (currentQuestion && !canMove) {
      setShowError(true);
      return;
    }

    if (currentQuestion?.type === "scale" && answers[currentQuestion.id] === undefined) {
      updateAnswer(currentQuestion.id, currentAnswer);
    }

    setShowError(false);
    setDirection(1);

    if (phase === "role") {
      const selectedRole = currentAnswer;
      setRole(selectedRole);
      setStep(0);

      if (selectedRole === "gynaecologist" || selectedRole === "pediatrician") {
        setPhase("password");
        setPasswordInput("");
        setPasswordError(false);
      } else {
        setPhase("survey");
      }
      return;
    }

    if (phase === "password") {
      verifyPassword();
      return;
    }

    if (phase === "survey" && branch) {
      const submittedAnswers = {
        ...answers,
        [currentQuestion.id]: currentAnswer,
        [roleQuestion.id]: role
      };

      if (shouldEndSurveyNow(role, currentQuestion, currentAnswer)) {
        try {
          setAnswers(submittedAnswers);
          await saveSurveySubmission(submittedAnswers, {
            endedEarly: true,
            endedAtQuestionId: currentQuestion.id,
            endedAtPaperQuestion: currentQuestion.eyebrow,
            endReason: copy.survey.endReasonNeverHeard
          });
          setPhase("thanks");
        } catch (error) {
          console.error("Error saving survey:", error);
          alert(getSaveErrorMessage(error, copy));
        }
        return;
      }

      if (step < branch.questions.length - 1) {
        setStep((previous) => previous + 1);
      } else {
        try {
          setAnswers(submittedAnswers);
          await saveSurveySubmission(submittedAnswers);
          setPhase("thanks");
        } catch (error) {
          console.error("Error saving survey:", error);
          alert(getSaveErrorMessage(error, copy));
        }
      }
    }
  };

  const verifyPassword = () => {
    if (passwordInput === "Valencia@304") {
      setDirection(1);
      setPhase("survey");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleBack = () => {
    setShowError(false);
    setDirection(-1);

    // If on Landing page (the main page), show Profile reset confirmation
    if (phase === "landing") {
      setShowLogoutDialog(true);
      return;
    }

    // If on Profile, do nothing
    if (phase === "profile") {
      return;
    }

    // From password screen, go back to role selection
    if (phase === "password") {
      setPhase("role");
      return;
    }

    // From result/thanks screen, go back to landing
    if (phase === "thanks" || phase === "role") {
      setPhase("landing");
      return;
    }

    // Navigate back through survey steps
    if (phase === "survey") {
      if (step > 0) {
        setStep((prev) => prev - 1);
      } else {
        setPhase("role");
      }
    }
  };

  const handleRestart = () => {
    setDirection(-1);
    setRole("");
    setStep(0);
    setAnswers({});
    setPhase("landing");
    setShowError(false);
  };

  const handleLogout = async () => {
    setShowLogoutDialog(false);
    setDirection(-1);
    setPhase("profile");
    setUserProfile(null);
    setAnswers({});
    setRole("");
    setStep(0);
    const currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || language;
    localStorage.clear();
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm font-bold uppercase tracking-widest text-primary animate-pulse">{copy.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-ink">
      <Header
        phase={phase}
        onBack={handleBack}
        language={language}
        copy={copy}
        onLanguageChange={(nextLanguage) => setLanguage(normalizeLanguage(nextLanguage))}
      />
      {phase !== "profile" && <ProgressBar progress={progress} phase={phase} branch={branch} copy={copy} />}

      <main className="mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-7xl flex-col px-4 pb-32 pt-8 sm:px-8 lg:px-12">
        <AnimatePresence custom={direction} mode="wait">
          {phase === "profile" && (
            <Profile
              key="profile"
              onComplete={handleProfileComplete}
              direction={direction}
              error={authError}
              setError={setAuthError}
              copy={copy}
            />
          )}
          {phase === "landing" && (
            <Landing
              key="landing"
              onStart={handleStart}
              direction={direction}
              userSubmission={userSubmission}
              copy={copy}
              onViewResults={() => {
                setDirection(1);
                setPhase("thanks");
              }}
            />
          )}

          {phase === "role" && (
            <QuestionScreen
              key="role-selection"
              direction={direction}
              question={roleQuestion}
              answer={currentAnswer}
              onChange={(value, auto) => updateAnswer(roleQuestion.id, value, auto)}
              showError={showError}
              error={validationMessage(roleQuestion, currentAnswer, copy)}
              copy={copy}
            />
          )}

          {phase === "survey" && branch && (
            <div key={`survey-container-${role}`} className="flex w-full flex-col gap-12 pb-32">
              {branch.questions.map((q, idx) => {
                if (idx > step) return null;
                const isCurrent = idx === step;
                return (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: isCurrent ? 1 : 0.6,
                      scale: isCurrent ? 1 : 0.98,
                      filter: isCurrent ? "blur(0px)" : "blur(0.5px)"
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={isCurrent ? "" : "pointer-events-auto opacity-70 grayscale-[20%]"}
                    onClick={() => {
                      if (!isCurrent) {
                        setStep(idx);
                        setDirection(-1);
                      }
                    }}
                  >
                    <QuestionScreen
                      question={{
                        ...q,
                        eyebrow: copy.question.questionOf(idx + 1, branch.questions.length)
                      }}
                      answer={answers[q.id] ?? getDefaultAnswer(q)}
                      onChange={(value, auto) => updateAnswer(q.id, value, auto)}
                      showError={showError && isCurrent}
                      error={validationMessage(q, answers[q.id] ?? getDefaultAnswer(q), copy)}
                      isSecondary={true}
                      copy={copy}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}

          {phase === "password" && (
            <PasswordScreen
              key="password-gate"
              direction={direction}
              value={passwordInput}
              onChange={(val) => {
                setPasswordInput(val);
                setPasswordError(false);
              }}
              error={passwordError}
              onVerify={verifyPassword}
              copy={copy}
            />
          )}

          {phase === "thanks" && (
            <ThankYou
              key="thanks"
              direction={direction}
              branch={userSubmission ? branches[userSubmission.metadata.branch] : branch}
              answers={userSubmission ? userSubmission.rawAnswers : answers}
              onRestart={handleRestart}
              copy={copy}
              onGoHome={() => {
                setDirection(-1);
                setPhase("landing");
              }}
              isReview={!!userSubmission && phase === "thanks" && !answers.respondent_role}
            />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showLogoutDialog && (
          <ConfirmDialog
            title={copy.dialogs.resetTitle}
            message={copy.dialogs.resetMessage}
            confirmLabel={copy.dialogs.resetConfirm}
            cancelLabel={copy.dialogs.stay}
            onConfirm={handleLogout}
            onCancel={() => setShowLogoutDialog(false)}
          />
        )}
        {showRestartDialog && (
          <ConfirmDialog
            title={copy.dialogs.restartTitle}
            message={copy.dialogs.restartMessage}
            confirmLabel={copy.dialogs.restartConfirm}
            cancelLabel={copy.dialogs.resume}
            onConfirm={() => {
              handleRestart();
              setShowRestartDialog(false);
            }}
            onCancel={() => setShowRestartDialog(false)}
          />
        )}
      </AnimatePresence>

      {phase !== "landing" && phase !== "thanks" && phase !== "profile" && (
        <ActionBar
          onBack={handleBack}
          onContinue={phase === "password" ? verifyPassword : handleContinue}
          onRestart={() => setShowRestartDialog(true)}
          continueLabel={isSubmitStep ? copy.action.submit : (phase === "password" ? copy.password.button : copy.action.continue)}
          progress={progress}
          copy={copy}
        />
      )}
    </div>
  );
}

function Header({ phase, onBack, language, onLanguageChange, copy }) {
  return (
    <header className="sticky top-0 z-40 border-b border-outline/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          onClick={onBack}
          disabled={phase === "profile"}
          className="grid h-11 w-11 place-items-center rounded-full text-primary transition hover:bg-surface-tint disabled:pointer-events-none disabled:opacity-0"
          aria-label={copy.goBack}
        >
          <Icon name="chevronLeft" className="h-6 w-6" />
        </motion.button>

        <div className="text-center">
          <p className="font-display text-lg font-extrabold tracking-normal text-ink sm:text-xl">
            {copy.appTitle}
          </p>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:block">
            {copy.appSubtitle}
          </p>
        </div>

        <label className="flex min-w-[132px] flex-col items-end justify-center gap-0.5 text-primary sm:min-w-[188px] sm:flex-row sm:items-center sm:gap-2">
          <Icon name="languages" className="hidden h-5 w-5 md:block" />
          <span className="max-w-[132px] truncate text-[9px] font-bold uppercase tracking-[0.1em] text-muted sm:text-[11px] sm:tracking-[0.14em]">
            {copy.languageLabel}
          </span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
            aria-label={copy.languageLabel}
            className="h-8 max-w-[132px] rounded-xl border border-primary/20 bg-surface-card px-3 text-sm font-bold text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-lavender sm:h-10 sm:max-w-[150px]"
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}

function ProgressBar({ progress, phase, branch, copy }) {
  const label = branch?.shortLabel || (phase === "landing" ? copy.welcome : copy.profileSetup);

  return (
    <div className="sticky top-16 z-30 bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          <span>{label}</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-surface-card">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary via-[#8B5CF6] to-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 95, damping: 20 }}
          />
        </div>
      </div>
    </div>
  );
}

function Landing({ onStart, direction, userSubmission, onViewResults, copy }) {
  const tileIcons = ["lock", "stethoscope", "heartHandshake", "Zap"];
  const statIcons = ["map", "mapPin", "barChart", "clock"];

  return (
    <motion.section
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-12 text-center lg:gap-20 py-10"
    >
      {/* Hero Section */}
      <div className="space-y-6 lg:space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-surface-card px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm"
        >
          <Icon name="shieldCheck" className="h-4 w-4" />
          {copy.landing.badge}
        </motion.span>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-7xl">
          {copy.landing.titlePrefix} <span className="text-primary">{copy.landing.titleHighlight}</span> {copy.landing.titleSuffix}
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-muted sm:text-lg lg:text-xl px-4">
          {copy.landing.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {userSubmission ? (
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewResults}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border-2 border-primary bg-white px-10 py-4 text-lg font-bold text-primary shadow-xl shadow-primary/5 transition hover:bg-surface-tint"
              >
                <Icon name="clipboardCheck" className="h-6 w-6" />
                {copy.landing.viewSubmission}
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStart}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-primary/10 px-8 py-4 text-base font-bold text-primary transition hover:bg-primary/20"
              >
                {copy.landing.submitNew}
              </motion.button>
            </div>
          ) : (
            <motion.button
              type="button"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStart}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary-deep"
            >
              {copy.landing.startSurvey}
              <Icon name="chevronRight" className="h-6 w-6" />
            </motion.button>
          )}
          <p className="text-xs font-bold uppercase tracking-widest text-muted sm:text-left">
            {copy.landing.duration}
          </p>
        </div>
      </div>

      {/* Main Feature Section */}
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-[52%]">
          <ImageCarousel altText={copy.landing.imageAlt} />
        </div>
        <div className="flex w-full flex-col gap-5 lg:max-w-[42%]">
          {copy.landing.tiles.map((tile, index) => (
            <LandingTile key={tile.title} icon={tileIcons[index]} title={tile.title} text={tile.text} />
          ))}
        </div>
      </div>

      {/* Study Impact Stats */}
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
        {copy.landing.stats.map((stat, i) => (
          <BorderGlow
            key={i}
            borderRadius={24}
            backgroundColor="white"
            glowColor="262 83 58"
            colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
            edgeSensitivity={30}
            glowRadius={20}
          >
            <div className="p-6">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-tint text-primary">
                <Icon name={statIcons[i]} className="h-5 w-5" />
              </div>
              <p className="font-display text-2xl font-black text-ink">{stat.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          </BorderGlow>
        ))}
      </div>

      {/* Deep Dive Section */}
      <div className="grid w-full gap-8 lg:grid-cols-2">
        <div className="text-left space-y-6">
          <h2 className="font-display text-3xl font-extrabold text-ink lg:text-4xl">{copy.landing.solvingTitle}</h2>
          <p className="text-lg leading-relaxed text-muted">
            {copy.landing.solvingText}
          </p>
          <ul className="space-y-4">
            {copy.landing.solvingItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="font-semibold text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <StudyVisual copy={copy} />
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex w-full flex-col items-center gap-8 border-t border-outline/50 pt-16">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl font-bold text-ink">{copy.landing.readyTitle}</h3>
          <p className="mt-3 text-muted">{copy.landing.readyText}</p>
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="inline-flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary-deep"
        >
          {copy.landing.startSurvey}
          <Icon name="chevronRight" className="h-6 w-6" />
        </motion.button>


      </div>
    </motion.section>
  );
}

function ImageCarousel({ altText }) {
  const images = useMemo(() => [
    "/carousel2.png",
    "/carousel1.jpg"
  ], []);

  const [index, setIndex] = useState(0);

  return (
          <div className="relative w-full overflow-hidden rounded-[40px] bg-primary/5 shadow-2xl border-4 border-white aspect-[16/10] sm:aspect-[16/9]">
      {/* Background brand placeholder while loading */}
      <div className="absolute inset-0 flex items-center justify-center bg-surface-tint">
         <Icon name="scanHeart" className="h-12 w-12 text-primary/20 animate-pulse" />
      </div>

      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          alt={altText}
          loading="eager"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              i === index
                ? "h-3 w-10 bg-white shadow-lg"
                : "h-3 w-3 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LandingTile({ icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -3 }}>
      <BorderGlow
        borderRadius={24}
        backgroundColor="white"
        glowColor="262 83 58"
        colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
        edgeSensitivity={25}
        glowRadius={25}
      >
        <div className="p-5 text-left">
          <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-surface-tint text-primary">
            <Icon name={icon} className="h-5 w-5" />
          </div>
          <h2 className="font-display text-base font-bold text-ink">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

function Profile({ onComplete, direction, error, setError, copy }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [age, setAge] = useState("");
  const [headlineStart, headlineEnd = ""] = copy.profile.headline.split(copy.profile.headlineHighlight);

  return (
    <motion.section
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center lg:flex-row-reverse lg:items-center lg:gap-12"
    >
      <div className="hidden flex-1 lg:block">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-ink">
          {headlineStart}
          <span className="text-primary">{copy.profile.headlineHighlight}</span>
          {headlineEnd}
        </h2>
        <p className="mt-6 text-lg text-muted">
          {copy.profile.intro}
        </p>
        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface-tint text-primary">
              <Icon name="usersRound" className="h-5 w-5" />
            </div>
            <span className="font-bold text-ink">{copy.profile.evidence}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface-tint text-primary">
              <Icon name="heartPulse" className="h-5 w-5" />
            </div>
            <span className="font-bold text-ink">{copy.profile.policy}</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md">
        <BorderGlow
          borderRadius={32}
          backgroundColor="white"
          glowColor="262 83 58"
          colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
          edgeSensitivity={20}
          glowRadius={30}
        >
          <div className="p-8">
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-surface-tint text-primary lg:mx-0">
                <Icon name="userRoundPlus" className="h-8 w-8" />
              </div>
              <h1 className="font-display text-2xl font-extrabold text-ink">{copy.profile.title}</h1>
              <p className="mt-2 text-sm text-muted">{copy.profile.subtitle}</p>
            </div>

            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (!name.trim()) {
                  setError(copy.profile.errors.fullName);
                  return;
                }
                if (!mobile || mobile.length < 10) {
                  setError(copy.profile.errors.mobile);
                  return;
                }
                if (!pincode || pincode.length < 6) {
                  setError(copy.profile.errors.pincode);
                  return;
                }
                if (!age || Number(age) < 18 || Number(age) > 100) {
                  setError(copy.profile.errors.age);
                  return;
                }
                setError("");
                onComplete({ name, mobile, pincode, age });
              }}
              className="space-y-4"
            >
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="profile-error"
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="flex items-center gap-2 overflow-hidden rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-600"
                  >
                    <Icon name="shieldAlert" className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">{copy.profile.fullName}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                    <Icon name="userRound" className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={copy.profile.fullNamePlaceholder}
                    className="h-14 w-full rounded-xl border border-outline bg-lavender-soft/30 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">{copy.profile.mobile}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                    <Icon name="phone" className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder={copy.profile.mobilePlaceholder}
                    className="h-14 w-full rounded-xl border border-outline bg-lavender-soft/30 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">{copy.profile.pincode}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                      <Icon name="mapPin" className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      placeholder={copy.profile.pincodePlaceholder}
                      className="h-14 w-full rounded-xl border border-outline bg-lavender-soft/30 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">{copy.profile.age}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                      <Icon name="cake" className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 3))}
                      placeholder={copy.profile.agePlaceholder}
                      className="h-14 w-full rounded-xl border border-outline bg-lavender-soft/30 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
                    />
                  </div>
                </div>
              </div>



              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="h-14 w-full rounded-xl bg-primary font-bold text-white shadow-press transition hover:bg-primary-deep"
              >
                {copy.profile.submit}
              </motion.button>
            </form>
          </div>
        </BorderGlow>
      </div>
    </motion.section>
  );
}

function StudyVisual({ copy }) {
  const chipIcons = ["scanHeart", "brain", "users"];

  return (
    <BorderGlow
      borderRadius={32}
      backgroundColor="white"
      glowColor="262 83 58"
      colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
      edgeSensitivity={20}
      glowRadius={30}
      className="w-full"
    >
      <div className="relative w-full overflow-hidden p-4 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(107,70,193,0.15),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(107,70,193,0.15),transparent_30%)]" />
        <div className="relative grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-gradient-to-br from-surface-tint via-surface-card to-surface-tint p-5 text-left">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-card text-primary shadow-sm">
                <Icon name="heartPulse" className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{copy.studyVisual.focusLabel}</p>
                <p className="font-display text-xl font-extrabold text-ink">{copy.studyVisual.focusTitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {copy.studyVisual.chips.map((label, index) => (
            <div key={label} className="rounded-2xl bg-white/60 p-3 text-center text-primary shadow-sm ring-1 ring-primary/5">
                  <Icon name={chipIcons[index]} className="mx-auto h-6 w-6" />
                  <p className="mt-2 text-xs font-bold text-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {copy.studyVisual.metrics.map(([label, value]) => (
              <MetricLine key={label} label={label} value={value} signal={copy.studyVisual.signal} />
            ))}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}

function MetricLine({ label, value, signal }) {
  return (
    <BorderGlow
      borderRadius={24}
      backgroundColor="white"
      glowColor="262 83 58"
      colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
      edgeSensitivity={30}
      glowRadius={20}
    >
      <div className="p-4 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="font-display text-lg font-extrabold text-ink">{value}</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{signal}</span>
        </div>
      </div>
    </BorderGlow>
  );
}

function QuestionScreen({ direction, question, answer, onChange, showError, error, isSecondary, copy }) {
  return (
    <motion.section
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-full max-w-4xl lg:max-w-5xl ${isSecondary ? "" : "flex min-h-[70vh] items-center py-16 lg:py-24"}`}
    >
      <BorderGlow
        borderRadius={32}
        backgroundColor="white"
        glowColor="262 83 58"
        colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
        edgeSensitivity={20}
        glowRadius={30}
        className="w-full"
      >
        <div className="w-full p-5 sm:p-8">
          <div className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{question.eyebrow}</p>
            <h2 className="font-display text-2xl font-extrabold leading-tight tracking-normal text-ink sm:text-3xl">
              {question.title}
            </h2>
            {question.help && <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{question.help}</p>}
          </div>

          <QuestionBody question={question} answer={answer} onChange={onChange} copy={copy} />

          <AnimatePresence>
            {showError && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-5 rounded-2xl border border-primary/20 bg-surface-tint px-4 py-3 text-sm font-semibold text-primary"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </BorderGlow>
    </motion.section>
  );
}

function QuestionBody({ question, answer, onChange, copy }) {
  if (question.type === "input") return <InputQuestion question={question} answer={answer} onChange={onChange} copy={copy} />;
  if (question.type === "textarea") return <TextareaQuestion question={question} answer={answer} onChange={onChange} copy={copy} />;
  if (question.type === "scale") return <ScaleQuestion question={question} answer={answer} onChange={onChange} copy={copy} />;

  const isMulti = question.type === "multi" || question.type === "top-n";
  const selectedValues = isMulti ? answer || [] : [];
  const maxReached = isMulti && question.max && selectedValues.length >= question.max;
  const hasSelectionRequirement = Boolean(question.max || question.minSelections);
  const selectionInstruction = question.exact
    ? copy.question.selectExactly(question.max)
    : question.minSelections && question.max
      ? copy.question.selectBetween(question.minSelections, question.max)
      : question.minSelections
        ? copy.question.selectAtLeast(question.minSelections)
        : copy.question.selectUpTo(question.max);
  const gridClass =
    question.layout === "icon-grid" || question.layout === "community-grid" || question.layout === "diagnostic-grid"
      ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const toggle = (value) => {
    if (!isMulti) {
      onChange(value, false);
      return;
    }

    const exists = selectedValues.includes(value);
    if (exists) {
      onChange(selectedValues.filter((item) => item !== value));
      return;
    }

    if (question.max && selectedValues.length >= question.max) return;
    onChange([...selectedValues, value]);
  };

  return (
    <div className="space-y-4">
      {hasSelectionRequirement && (
        <div className="flex items-center justify-between rounded-2xl bg-surface-tint px-4 py-3 text-sm font-semibold text-primary">
          <span>{selectionInstruction}</span>
          <span>{copy.question.selected(selectedValues.length, question.max)}</span>
        </div>
      )}

      <div className={`grid gap-3 ${gridClass}`}>
        {question.options.map((option) => {
          const selected = isMulti ? selectedValues.includes(option.value) : answer === option.value;
          const disabledByLimit = Boolean(isMulti && !selected && maxReached);

          return (
            <SelectionCard
              key={option.value}
              option={option}
              selected={selected}
              isMulti={isMulti}
              disabledByLimit={disabledByLimit}
              iconGrid={question.layout === "icon-grid" || question.layout === "community-grid" || question.layout === "diagnostic-grid" || question.type === "role"}
              onClick={() => toggle(option.value)}
            />
          );
        })}
      </div>
    </div>
  );
}

function SelectionCard({ option, selected, isMulti, disabledByLimit, iconGrid, onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={disabledByLimit ? undefined : { y: -2 }}
      whileTap={disabledByLimit ? undefined : { scale: 0.975 }}
      onClick={onClick}
      disabled={disabledByLimit}
      className={`group relative flex min-h-24 w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${iconGrid ? "flex-col justify-center text-center" : "justify-between"
        } ${selected
          ? "border-primary bg-primary/20 text-primary shadow-press"
          : "border-outline/70 bg-surface-card text-ink shadow-sm hover:border-primary/40 hover:bg-surface-tint"
        } ${disabledByLimit ? "cursor-not-allowed opacity-45" : "cursor-pointer"}`}
    >
      <div className={`flex min-w-0 items-center gap-4 ${iconGrid ? "flex-col" : "flex-1"}`}>
        {option.icon && (
          <motion.span
            animate={{
              scale: selected ? 1.05 : 1,
              backgroundColor: selected ? "#6B46C1" : "#F7F0FF",
              color: selected ? "#FFFFFF" : "#6B46C1"
            }}
            transition={{ duration: 0.18 }}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
          >
            <Icon name={option.icon} className="h-6 w-6" />
          </motion.span>
        )}
        <span className="min-w-0">
          <span className="block text-[15px] font-bold leading-6 sm:text-base text-ink">{option.label}</span>
          {option.note && <span className="mt-1 block text-xs font-semibold text-muted">{option.note}</span>}
        </span>
      </div>

      <motion.span
        className={`relative grid h-7 w-7 shrink-0 place-items-center overflow-hidden ${isMulti ? "rounded-lg" : "rounded-full"
          } border-2 ${selected ? "border-primary" : "border-outline"} ${iconGrid ? "absolute right-3 top-3" : ""}`}
        animate={{
          borderColor: selected ? "#6B46C1" : "#2D3748"
        }}
      >
        <motion.span
          className="absolute inset-0 bg-primary"
          initial={false}
          animate={{ scale: selected ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        />
        {selected && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative z-10 text-white">
            {isMulti ? <Icon name="check" className="h-4 w-4" strokeWidth={3} /> : <span className="block h-2.5 w-2.5 rounded-full bg-white" />}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
}

function InputQuestion({ question, answer, onChange, copy }) {
  const value = answer || "";
  const handleChange = (event) => {
    const next = event.target.value.replace(/\D/g, "").slice(0, question.maxLength || 12);
    onChange(next);
  };

  return (
    <label className="block">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-muted">
        <Icon name={question.icon || "keyboard"} className="h-4 w-4 text-primary" />
        {copy.question.numericEntry}
      </div>
      <input
        type={question.inputType || "text"}
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={handleChange}
        placeholder={question.placeholder}
        className="h-16 w-full rounded-2xl border border-outline bg-lavender-soft/40 px-5 text-xl font-bold tracking-[0.18em] text-ink outline-none transition placeholder:text-muted/40 focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
      />
      <p className="mt-3 text-sm font-semibold text-muted">{copy.question.digits(value.length, question.maxLength)}</p>
    </label>
  );
}

function TextareaQuestion({ question, answer, onChange, copy }) {
  const value = answer || "";

  return (
    <label className="block">
      <textarea
        value={value}
        maxLength={question.maxLength}
        onChange={(event) => onChange(event.target.value)}
        placeholder={question.placeholder}
        rows={7}
        className="w-full resize-none rounded-2xl border border-outline bg-lavender-soft/40 px-5 py-4 text-base leading-7 text-ink outline-none transition placeholder:text-muted/60 focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
      />
      <div className="mt-3 flex items-center justify-between gap-3 text-sm font-semibold text-muted">
        <span>{copy.question.openEnded}</span>
        <motion.span
          initial={false}
          animate={{ color: value.length > question.maxLength * 0.9 ? "#C05621" : "#5B526A" }}
        >
          {value.length}/{question.maxLength}
        </motion.span>
      </div>
    </label>
  );
}

function ScaleQuestion({ question, answer, onChange, copy }) {
  const value = Number(answer || Math.ceil((question.min + question.max) / 2));
  const percentage = ((value - question.min) / (question.max - question.min)) * 100;

  return (
    <div className="rounded-3xl border border-primary/10 bg-surface-card p-5 sm:p-6">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-[0.14em] text-muted">{copy.question.rating}</span>
        <motion.span
          key={value}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid h-14 w-14 place-items-center rounded-2xl bg-primary font-display text-2xl font-extrabold text-white shadow-press"
        >
          {value}
        </motion.span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-surface-card" />
        <motion.div
          className="absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-primary"
          initial={false}
          animate={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={question.min}
          max={question.max}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="relative z-10 w-full accent-primary"
          aria-label={question.title}
        />
      </div>
      <div className="mt-5 flex justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em] text-muted">
        <span>{question.lowLabel}</span>
        <span className="text-right">{question.highLabel}</span>
      </div>
    </div>
  );
}

function ActionBar({ onBack, onContinue, onRestart, continueLabel, progress, copy }) {
  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-outline/50 bg-white/95 px-4 py-5 shadow-[0_-12px_48px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl items-center gap-4">
        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          onClick={onRestart}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-outline/60 bg-surface-card text-muted transition hover:bg-surface-tint hover:text-primary"
          title={copy.action.restartSurvey}
        >
          <Icon name="rotateCcw" className="h-5 w-5" />
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={onBack}
          className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl border border-primary/25 bg-surface-card px-5 font-bold text-primary transition hover:bg-surface-tint sm:flex-none sm:px-8"
        >
          <Icon name="chevronLeft" className="h-5 w-5" />
          {copy.action.back}
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={onContinue}
          className="inline-flex min-h-14 flex-[1.4] items-center justify-center gap-2 rounded-2xl bg-primary px-5 font-bold text-white shadow-press transition hover:bg-primary-deep sm:flex-none sm:px-10"
        >
          {continueLabel}
          {continueLabel === copy.action.submit ? <Icon name="check" className="h-5 w-5" /> : <Icon name="chevronRight" className="h-5 w-5" />}
        </motion.button>
        <span className="hidden text-sm font-bold text-muted sm:ml-auto sm:block">{copy.action.complete(progress)}</span>
      </div>
    </nav>
  );
}

function ThankYou({ direction, branch, answers, onRestart, onGoHome, isReview, copy }) {
  const answeredCount = useMemo(
    () =>
      Object.values(answers).filter((answer) =>
        Array.isArray(answer) ? answer.length > 0 : String(answer || "").trim().length > 0
      ).length,
    [answers]
  );

  return (
    <motion.section
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-6xl flex-1 items-center"
    >
      <BorderGlow
        borderRadius={32}
        backgroundColor="white"
        glowColor="262 83 58"
        colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
        edgeSensitivity={20}
        glowRadius={30}
        className="w-full overflow-hidden shadow-ambient"
      >
        <div className="w-full">
          <div className={`bg-gradient-to-br ${isReview ? 'from-lavender via-primary to-primary-deep' : 'from-primary via-primary-deep to-[#320075]'} px-6 py-12 text-center text-white sm:px-10 lg:py-16 border-b border-outline/50`}>
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-white/15 lg:h-24 lg:w-24"
            >
              <Icon name={isReview ? "fileCheck2" : "checkCircle"} className="h-10 w-10 lg:h-12 lg:w-12" />
            </motion.div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {isReview ? copy.thanks.reviewTitle : copy.thanks.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 lg:text-xl">
              {isReview
                ? copy.thanks.reviewText
                : copy.thanks.text}
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-10 lg:p-12">
            <ImpactCard icon="clipboardCheck" title={copy.thanks.responsesSaved(answeredCount)} text={copy.thanks.responseText} />
            {branch && <ImpactCard icon="mapPin" title={branch.audience} text={branch.impact} />}
            <ImpactCard icon="heartHandshake" title={copy.thanks.healthTitle} text={copy.thanks.healthText} />
          </div>

          {/* New Section: Response Summary */}
          <div className="px-6 pb-12 sm:px-10 lg:px-12">
            <h3 className="mb-6 font-display text-xl font-bold text-ink">{copy.thanks.summaryTitle}</h3>
            <div className="space-y-4">
              {branch && branch.questions.map((q, idx) => {
                const answer = answers[q.id];
                if (answer === undefined) return null;

                let readableAnswer = answer;
                if (q.options) {
                  if (Array.isArray(answer)) {
                    readableAnswer = answer.map(val => q.options.find(o => o.value === val)?.label || val).join(", ");
                  } else {
                    readableAnswer = q.options.find(o => o.value === answer)?.label || answer;
                  }
                }

                return (
                  <div key={q.id} className="rounded-2xl bg-surface-tint p-5 border border-primary/5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{copy.question.questionOf(idx + 1, branch.questions.length)}</p>
                    <p className="font-bold text-ink mb-2">{q.title}</p>
                    <div className="flex items-start gap-2 text-muted italic">
                      <Icon name="chevronRight" className="h-4 w-4 mt-0.5 shrink-0" />
                      <p className="text-sm font-semibold">{readableAnswer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-outline/50 p-6 sm:flex-row sm:justify-start sm:p-10 lg:p-12">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRestart}
              className="inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary-deep sm:w-auto"
            >
              <Icon name="rotateCcw" className="h-5 w-5" />
              {isReview ? copy.thanks.retake : copy.thanks.newResponse}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onGoHome}
              className="inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl border border-outline bg-white px-8 font-bold text-ink transition hover:bg-surface-tint sm:w-auto"
            >
              <Icon name="home" className="h-5 w-5" />
              {copy.thanks.backHome}
            </motion.button>
          </div>
        </div>
      </BorderGlow>
    </motion.section>
  );
}

function ImpactCard({ icon, title, text }) {
  return (
    <BorderGlow
      borderRadius={24}
      backgroundColor="white"
      glowColor="262 83 58"
      colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
      edgeSensitivity={25}
      glowRadius={25}
    >
      <div className="p-5">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-surface-tint text-primary shadow-sm">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-extrabold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
      </div>
    </BorderGlow>
  );
}

function ConfirmDialog({ title, message, confirmLabel, cancelLabel, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCancel}
        className="absolute inset-0 bg-primary-deep/40 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md"
      >
        <BorderGlow
          borderRadius={32}
          backgroundColor="white"
          glowColor="262 83 58"
          colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
          edgeSensitivity={20}
          glowRadius={40}
        >
          <div className="p-8">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-surface-tint text-primary">
                <Icon name="logOut" className="h-7 w-7" />
              </div>
              <h2 className="font-display text-xl font-extrabold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{message}</p>
            </div>
            <div className="flex flex-col gap-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onConfirm}
                className="h-12 w-full rounded-xl bg-primary font-bold text-white shadow-press transition hover:bg-primary-deep"
              >
                {confirmLabel}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onCancel}
                className="h-12 w-full rounded-xl border border-outline bg-surface-card font-bold text-muted transition hover:bg-surface-tint"
              >
                {cancelLabel}
              </motion.button>
            </div>
          </div>
        </BorderGlow>
      </motion.div>
    </div>
  );
}

function PasswordScreen({ direction, value, onChange, error, onVerify, copy }) {
  return (
    <motion.section
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12"
    >
      <BorderGlow
        borderRadius={32}
        backgroundColor="white"
        glowColor="262 83 58"
        colors={["#6B46C1", "#8B5CF6", "#D6BCFA"]}
        edgeSensitivity={20}
        glowRadius={30}
      >
        <div className="p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-surface-tint text-primary">
              <Icon name="key" className="h-8 w-8" />
            </div>
            <h1 className="font-display text-2xl font-extrabold text-ink">{copy.password.title}</h1>
            <p className="mt-2 text-sm text-muted">{copy.password.subtitle}</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onVerify();
            }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="password-error"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="flex items-center gap-2 overflow-hidden rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-600"
                >
                  <Icon name="shieldAlert" className="h-4 w-4 shrink-0" />
                  <span>{copy.password.error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                {copy.password.placeholder}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                  <Icon name="lock" className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  required
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="••••••••"
                  className="h-14 w-full rounded-xl border border-outline bg-lavender-soft/30 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:bg-surface-card focus:ring-4 focus:ring-lavender"
                  autoFocus
                />
              </div>
            </div>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="h-14 w-full rounded-xl bg-primary font-bold text-white shadow-press transition hover:bg-primary-deep"
            >
              {copy.password.button}
            </motion.button>
          </form>
        </div>
      </BorderGlow>
    </motion.section>
  );
}

export default App;
