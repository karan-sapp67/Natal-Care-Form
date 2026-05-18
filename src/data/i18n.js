import { branches as sourceBranches, roleQuestion as sourceRoleQuestion } from "./survey.js";

export const DEFAULT_LANGUAGE = "en";
export const LANGUAGE_STORAGE_KEY = "survey_language";

export const languageOptions = [
  { code: "en", label: "English", shortLabel: "EN", htmlLang: "en" },
  { code: "hi", label: "हिन्दी", shortLabel: "HI", htmlLang: "hi" },
  { code: "mr", label: "मराठी", shortLabel: "MR", htmlLang: "mr" },
  { code: "gu", label: "ગુજરાતી", shortLabel: "GU", htmlLang: "gu" }
];

const en = {
  appTitle: "IMPN Study",
  appSubtitle: "Indian maternal and pediatric nutrition",
  languageLabel: "Choose language",
  loading: "Initializing IMPN Study...",
  welcome: "Welcome",
  profileSetup: "Profile setup",
  goBack: "Go back",
  profile: {
    headline: "Better Nutrition for the Next Generation.",
    headlineHighlight: "Next Generation",
    intro: "Your participation helps us gather critical insights into dietary patterns and nutritional needs of mothers and children in India.",
    evidence: "Evidence-Based Clinical Study",
    policy: "Impact Family Health Policy",
    title: "Respondent Profile",
    subtitle: "Enter your details to start the IMPN Study",
    fullName: "Full Name",
    fullNamePlaceholder: "Jane Smith",
    mobile: "Mobile Number",
    mobilePlaceholder: "9876543210",
    pincode: "Pincode",
    pincodePlaceholder: "400001",
    age: "Age",
    agePlaceholder: "28",
    submit: "Continue to Survey",
    errors: {
      fullName: "Full Name is required.",
      mobile: "Please enter a valid 10-digit mobile number.",
      pincode: "Please enter a valid 6-digit pincode.",
      age: "Please enter a valid age (18-100)."
    }
  },
  landing: {
    badge: "Confidential clinical research",
    titlePrefix: "The Indian Maternal &",
    titleHighlight: "Pediatric Nutrition",
    titleSuffix: "Study",
    description:
      "Empowering healthcare providers and families with data-driven insights. Help us understand the nutritional landscape across India to shape better maternal counseling and pediatric care.",
    startSurvey: "Start Survey",
    viewSubmission: "View Your Submission",
    submitNew: "Submit New Response",
    duration: "Takes ~7 minutes",
    tiles: [
      {
        title: "Data Privacy First",
        text: "All responses are strictly anonymised and used only for clinical research purposes in accordance with Indian health guidelines."
      },
      {
        title: "Clinical Impact",
        text: "Your participation helps identify practical barriers to nutrition adherence and informs the design of new maternal and pediatric supplements."
      },
      {
        title: "Holistic View",
        text: "We aspire to capture perspective from clinicians, mothers, and caregivers to build a 360-degree understanding of family nutrition."
      },
      {
        title: "Quick & Efficient",
        text: "A streamlined experience designed for married women. Complete the study in less than 7 minutes from any device."
      }
    ],
    stats: [
      { label: "Research Sites", value: "3+" },
      { label: "Cities Covered", value: "3+" },
      { label: "Data Points", value: "400+" },
      { label: "Avg. Duration", value: "7 Min" }
    ],
    solvingTitle: "What we are solving",
    solvingText:
      "The IMPN study addresses the lack of deep, contextual, ground-level understanding regarding maternal and child nutritional challenges, behavioral patterns, and healthcare adoption across various socio-economic segments in India. We analyze:",
    solvingItems: [
      "Invisible maternal and child nutrition gaps",
      "The data gap between policy and reality",
      "Compliance and adherence challenges",
      "Trust and accessibility barriers",
      "The absence of continuous engagement"
    ],
    readyTitle: "Ready to contribute?",
    readyText: "Your expertise directly influences maternal health policy and pediatric nutrition standards in India.",
    imageAlt: "Maternal and child health"
  },
  studyVisual: {
    focusLabel: "Research focus",
    focusTitle: "Nutrition through every stage",
    chips: ["Pregnancy", "Mindset", "Influence"],
    metrics: [
      ["Clinical confidence", "Evidence"],
      ["Daily adherence", "Taste"],
      ["Family access", "Affordability"]
    ],
    signal: "Study signal"
  },
  question: {
    numericEntry: "Numeric entry",
    openEnded: "Open-ended response",
    rating: "Rating",
    digits: (count, max) => `${count}/${max} digits`,
    questionOf: (current, total) => `Question ${current} of ${total}`,
    selected: (count, max) => `${count}${max ? `/${max}` : ""} selected`,
    selectExactly: (max) => `Select exactly ${max}`,
    selectBetween: (min, max) => `Select ${min}-${max}`,
    selectAtLeast: (min) => `Select at least ${min}`,
    selectUpTo: (max) => `Select up to ${max}`
  },
  validation: {
    exact: (max) => `Please select exactly ${max} options.`,
    between: (min, max) => `Please select between ${min} and ${max} options.`,
    atLeast: (min) => `Please select at least ${min} options.`,
    upTo: (max) => `Please select up to ${max} options.`,
    pincode: "Please enter a valid 6 digit pincode.",
    textarea: "Please add a short response before continuing.",
    select: "Please select an option before continuing."
  },
  action: {
    restartSurvey: "Restart survey",
    back: "Back",
    continue: "Continue",
    submit: "Submit",
    complete: (progress) => `${progress}% complete`
  },
  thanks: {
    reviewTitle: "Your Submission",
    title: "Thank you",
    reviewText: "Review your recorded insights on the Indian maternal and pediatric nutritional landscape.",
    text:
      "Your response will help shape better maternal nutrition guidance, improve supplement design, and surface practical barriers that Indian families and clinicians face every day.",
    responsesSaved: (count) => `${count} responses saved`,
    responseText: "Each answer adds context to real nutrition decisions.",
    healthTitle: "Indian maternal health",
    healthText: "Your input supports better counseling, adherence, access, and family-centered care.",
    summaryTitle: "Submission Summary",
    retake: "Retake Survey",
    newResponse: "Start a new response",
    backHome: "Back to Home"
  },
  dialogs: {
    resetTitle: "Reset Profile?",
    resetMessage: "Are you sure you want to change your profile? This will clear your current session and saved data.",
    resetConfirm: "Reset",
    stay: "Stay",
    restartTitle: "Restart Survey?",
    restartMessage: "Are you sure you want to restart? All your current progress and answers will be lost.",
    restartConfirm: "Restart",
    resume: "Resume"
  },
  survey: {
    saveError: "Failed to save your response. Please try again.",
    endReasonNeverHeard: "Respondent selected: No, I have never heard of them"
  }
};

const hi = {
  appTitle: "IMPN अध्ययन",
  appSubtitle: "भारतीय मातृ और बाल पोषण",
  languageLabel: "भाषा चुनें",
  loading: "IMPN अध्ययन शुरू हो रहा है...",
  welcome: "स्वागत है",
  profileSetup: "प्रोफाइल सेटअप",
  goBack: "वापस जाएं",
  profile: {
    headline: "अगली पीढ़ी के लिए बेहतर पोषण.",
    headlineHighlight: "अगली पीढ़ी",
    intro: "आपकी भागीदारी हमें भारत में माताओं और बच्चों की आहार आदतों और पोषण जरूरतों पर महत्वपूर्ण जानकारी जुटाने में मदद करती है.",
    evidence: "साक्ष्य-आधारित क्लिनिकल अध्ययन",
    policy: "परिवार स्वास्थ्य नीति पर प्रभाव",
    title: "उत्तरदाता प्रोफाइल",
    subtitle: "IMPN अध्ययन शुरू करने के लिए अपनी जानकारी दर्ज करें",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "जेन स्मिथ",
    mobile: "मोबाइल नंबर",
    mobilePlaceholder: "9876543210",
    pincode: "पिनकोड",
    pincodePlaceholder: "400001",
    age: "आयु",
    agePlaceholder: "28",
    submit: "सर्वे पर जाएं",
    errors: {
      fullName: "पूरा नाम आवश्यक है.",
      mobile: "कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें.",
      pincode: "कृपया मान्य 6 अंकों का पिनकोड दर्ज करें.",
      age: "कृपया मान्य आयु दर्ज करें (18-100)."
    }
  },
  landing: {
    badge: "गोपनीय क्लिनिकल शोध",
    titlePrefix: "भारतीय मातृ और",
    titleHighlight: "बाल पोषण",
    titleSuffix: "अध्ययन",
    description:
      "स्वास्थ्य सेवा प्रदाताओं और परिवारों को डेटा-आधारित जानकारी से सशक्त बनाना. भारत में पोषण की स्थिति समझने में हमारी मदद करें, ताकि बेहतर मातृ परामर्श और बाल देखभाल बनाई जा सके.",
    startSurvey: "सर्वे शुरू करें",
    viewSubmission: "अपना सबमिशन देखें",
    submitNew: "नया उत्तर जमा करें",
    duration: "लगभग 7 मिनट लगेंगे",
    tiles: [
      {
        title: "डेटा गोपनीयता पहले",
        text: "सभी उत्तर पूरी तरह अनाम रखे जाते हैं और भारतीय स्वास्थ्य दिशानिर्देशों के अनुसार केवल क्लिनिकल शोध के लिए उपयोग किए जाते हैं."
      },
      {
        title: "क्लिनिकल प्रभाव",
        text: "आपकी भागीदारी पोषण पालन में आने वाली वास्तविक बाधाओं को पहचानने और नए मातृ व बाल पोषण सप्लीमेंट्स के डिजाइन में मदद करती है."
      },
      {
        title: "समग्र दृष्टिकोण",
        text: "हम चिकित्सकों, माताओं और देखभालकर्ताओं के विचारों को जोड़कर पारिवारिक पोषण की 360-डिग्री समझ बनाना चाहते हैं."
      },
      {
        title: "तेज और सरल",
        text: "विवाहित महिलाओं के लिए बनाया गया सरल अनुभव. किसी भी डिवाइस से 7 मिनट से कम समय में अध्ययन पूरा करें."
      }
    ],
    stats: [
      { label: "शोध स्थल", value: "3+" },
      { label: "शहर शामिल", value: "3+" },
      { label: "डेटा पॉइंट", value: "400+" },
      { label: "औसत अवधि", value: "7 मिनट" }
    ],
    solvingTitle: "हम क्या समझना चाहते हैं",
    solvingText:
      "IMPN अध्ययन भारत के अलग-अलग सामाजिक-आर्थिक समूहों में मातृ और बाल पोषण चुनौतियों, व्यवहारों और स्वास्थ्य सेवा अपनाने की गहरी जमीनी समझ की कमी को संबोधित करता है. हम इन बातों का विश्लेषण करते हैं:",
    solvingItems: [
      "छिपी हुई मातृ और बाल पोषण कमियां",
      "नीति और वास्तविकता के बीच डेटा अंतर",
      "नियमित उपयोग और पालन की चुनौतियां",
      "भरोसे और पहुंच की बाधाएं",
      "लगातार जुड़ाव की कमी"
    ],
    readyTitle: "योगदान देने के लिए तैयार हैं?",
    readyText: "आपका अनुभव भारत में मातृ स्वास्थ्य नीति और बाल पोषण मानकों को सीधे प्रभावित करता है.",
    imageAlt: "मातृ और बाल स्वास्थ्य"
  },
  studyVisual: {
    focusLabel: "शोध केंद्र",
    focusTitle: "हर चरण में पोषण",
    chips: ["गर्भावस्था", "सोच", "प्रभाव"],
    metrics: [
      ["क्लिनिकल भरोसा", "साक्ष्य"],
      ["दैनिक पालन", "स्वाद"],
      ["परिवार की पहुंच", "किफायत"]
    ],
    signal: "अध्ययन संकेत"
  },
  question: {
    numericEntry: "संख्यात्मक प्रविष्टि",
    openEnded: "खुला उत्तर",
    rating: "रेटिंग",
    digits: (count, max) => `${count}/${max} अंक`,
    questionOf: (current, total) => `प्रश्न ${current} / ${total}`,
    selected: (count, max) => `${count}${max ? `/${max}` : ""} चुने गए`,
    selectExactly: (max) => `ठीक ${max} चुनें`,
    selectBetween: (min, max) => `${min}-${max} चुनें`,
    selectAtLeast: (min) => `कम से कम ${min} चुनें`,
    selectUpTo: (max) => `${max} तक चुनें`
  },
  validation: {
    exact: (max) => `कृपया ठीक ${max} विकल्प चुनें.`,
    between: (min, max) => `कृपया ${min} से ${max} विकल्प चुनें.`,
    atLeast: (min) => `कृपया कम से कम ${min} विकल्प चुनें.`,
    upTo: (max) => `कृपया ${max} तक विकल्प चुनें.`,
    pincode: "कृपया मान्य 6 अंकों का पिनकोड दर्ज करें.",
    textarea: "आगे बढ़ने से पहले कृपया छोटा उत्तर लिखें.",
    select: "आगे बढ़ने से पहले कृपया एक विकल्प चुनें."
  },
  action: {
    restartSurvey: "सर्वे फिर से शुरू करें",
    back: "वापस",
    continue: "जारी रखें",
    submit: "जमा करें",
    complete: (progress) => `${progress}% पूरा`
  },
  thanks: {
    reviewTitle: "आपका सबमिशन",
    title: "धन्यवाद",
    reviewText: "भारतीय मातृ और बाल पोषण पर दर्ज की गई अपनी जानकारी देखें.",
    text: "आपका उत्तर बेहतर मातृ पोषण मार्गदर्शन, बेहतर सप्लीमेंट डिजाइन और परिवारों व चिकित्सकों के सामने आने वाली व्यावहारिक बाधाओं को समझने में मदद करेगा.",
    responsesSaved: (count) => `${count} उत्तर सेव हुए`,
    responseText: "हर उत्तर वास्तविक पोषण निर्णयों को बेहतर संदर्भ देता है.",
    healthTitle: "भारतीय मातृ स्वास्थ्य",
    healthText: "आपकी जानकारी बेहतर परामर्श, नियमित उपयोग, पहुंच और परिवार-केंद्रित देखभाल में मदद करती है.",
    summaryTitle: "सबमिशन सारांश",
    retake: "सर्वे फिर से दें",
    newResponse: "नया उत्तर शुरू करें",
    backHome: "होम पर वापस"
  },
  dialogs: {
    resetTitle: "प्रोफाइल रीसेट करें?",
    resetMessage: "क्या आप अपनी प्रोफाइल बदलना चाहते हैं? इससे आपका वर्तमान सत्र और सेव किया गया डेटा हट जाएगा.",
    resetConfirm: "रीसेट",
    stay: "यहीं रहें",
    restartTitle: "सर्वे फिर से शुरू करें?",
    restartMessage: "क्या आप सर्वे फिर से शुरू करना चाहते हैं? आपकी मौजूदा प्रगति और उत्तर हट जाएंगे.",
    restartConfirm: "फिर से शुरू करें",
    resume: "जारी रखें"
  },
  survey: {
    saveError: "आपका उत्तर सेव नहीं हो सका. कृपया फिर कोशिश करें.",
    endReasonNeverHeard: "उत्तरदाता ने चुना: नहीं, मैंने इनके बारे में कभी नहीं सुना"
  }
};

const mr = {
  appTitle: "IMPN अभ्यास",
  appSubtitle: "भारतीय मातृ आणि बाल पोषण",
  languageLabel: "भाषा निवडा",
  loading: "IMPN अभ्यास सुरू होत आहे...",
  welcome: "स्वागत",
  profileSetup: "प्रोफाइल सेटअप",
  goBack: "मागे जा",
  profile: {
    headline: "पुढील पिढीसाठी उत्तम पोषण.",
    headlineHighlight: "पुढील पिढी",
    intro: "आपला सहभाग भारतातील माता आणि मुलांच्या आहार पद्धती व पोषण गरजांबद्दल महत्त्वाची माहिती गोळा करण्यास मदत करतो.",
    evidence: "पुराव्यावर आधारित क्लिनिकल अभ्यास",
    policy: "कुटुंब आरोग्य धोरणावर प्रभाव",
    title: "प्रतिसादक प्रोफाइल",
    subtitle: "IMPN अभ्यास सुरू करण्यासाठी आपली माहिती भरा",
    fullName: "पूर्ण नाव",
    fullNamePlaceholder: "जेन स्मिथ",
    mobile: "मोबाइल नंबर",
    mobilePlaceholder: "9876543210",
    pincode: "पिनकोड",
    pincodePlaceholder: "400001",
    age: "वय",
    agePlaceholder: "28",
    submit: "सर्वेकडे जा",
    errors: {
      fullName: "पूर्ण नाव आवश्यक आहे.",
      mobile: "कृपया वैध 10 अंकी मोबाइल नंबर भरा.",
      pincode: "कृपया वैध 6 अंकी पिनकोड भरा.",
      age: "कृपया वैध वय भरा (18-100)."
    }
  },
  landing: {
    badge: "गोपनीय क्लिनिकल संशोधन",
    titlePrefix: "भारतीय मातृ आणि",
    titleHighlight: "बाल पोषण",
    titleSuffix: "अभ्यास",
    description:
      "आरोग्यसेवा तज्ज्ञ आणि कुटुंबांना डेटा-आधारित माहितीने सक्षम करणे. भारतातील पोषण परिस्थिती समजून घेण्यासाठी मदत करा, जेणेकरून चांगले मातृ समुपदेशन आणि बाल आरोग्यसेवा घडवता येईल.",
    startSurvey: "सर्वे सुरू करा",
    viewSubmission: "आपले सबमिशन पहा",
    submitNew: "नवीन उत्तर द्या",
    duration: "सुमारे 7 मिनिटे",
    tiles: [
      {
        title: "डेटा गोपनीयता प्रथम",
        text: "सर्व उत्तरे काटेकोरपणे अनामिक ठेवली जातात आणि भारतीय आरोग्य मार्गदर्शक तत्त्वांनुसार फक्त क्लिनिकल संशोधनासाठी वापरली जातात."
      },
      {
        title: "क्लिनिकल परिणाम",
        text: "आपला सहभाग पोषणाचे नियमित पालन करण्यात येणाऱ्या प्रत्यक्ष अडचणी ओळखण्यास आणि नवीन मातृ व बाल पोषण सप्लीमेंट्सच्या रचनेत मदत करतो."
      },
      {
        title: "समग्र दृष्टिकोन",
        text: "क्लिनिशियन, माता आणि काळजीवाहक यांचे दृष्टिकोन एकत्र करून कुटुंब पोषणाची 360-डिग्री समज तयार करण्याचा आमचा प्रयत्न आहे."
      },
      {
        title: "जलद आणि सोपे",
        text: "विवाहित महिलांसाठी तयार केलेला सोपा अनुभव. कोणत्याही डिव्हाइसवरून 7 मिनिटांपेक्षा कमी वेळात अभ्यास पूर्ण करा."
      }
    ],
    stats: [
      { label: "संशोधन ठिकाणे", value: "3+" },
      { label: "शहरे समाविष्ट", value: "3+" },
      { label: "डेटा पॉइंट्स", value: "400+" },
      { label: "सरासरी कालावधी", value: "7 मिनिटे" }
    ],
    solvingTitle: "आपण काय समजून घेत आहोत",
    solvingText:
      "IMPN अभ्यास भारतातील विविध सामाजिक-आर्थिक गटांमधील मातृ आणि बाल पोषण आव्हाने, वर्तन पद्धती आणि आरोग्यसेवा स्वीकार याबद्दलची सखोल जमीनीवरील समज नसण्याची समस्या हाताळतो. आम्ही यांचे विश्लेषण करतो:",
    solvingItems: [
      "न दिसणाऱ्या मातृ आणि बाल पोषणातील कमतरता",
      "धोरण आणि वास्तव यांतील डेटा अंतर",
      "पालन आणि सातत्याच्या अडचणी",
      "विश्वास आणि उपलब्धतेच्या अडथळ्या",
      "सतत संपर्काचा अभाव"
    ],
    readyTitle: "योगदान देण्यासाठी तयार आहात?",
    readyText: "आपला अनुभव भारतातील मातृ आरोग्य धोरण आणि बाल पोषण मानकांवर थेट प्रभाव टाकतो.",
    imageAlt: "मातृ आणि बाल आरोग्य"
  },
  studyVisual: {
    focusLabel: "संशोधन केंद्र",
    focusTitle: "प्रत्येक टप्प्यातील पोषण",
    chips: ["गर्भधारणा", "मनःस्थिती", "प्रभाव"],
    metrics: [
      ["क्लिनिकल विश्वास", "पुरावा"],
      ["दैनिक पालन", "चव"],
      ["कुटुंबाची उपलब्धता", "परवडणारी किंमत"]
    ],
    signal: "अभ्यास संकेत"
  },
  question: {
    numericEntry: "संख्यात्मक नोंद",
    openEnded: "मुक्त उत्तर",
    rating: "रेटिंग",
    digits: (count, max) => `${count}/${max} अंक`,
    questionOf: (current, total) => `प्रश्न ${current} / ${total}`,
    selected: (count, max) => `${count}${max ? `/${max}` : ""} निवडले`,
    selectExactly: (max) => `नेमके ${max} निवडा`,
    selectBetween: (min, max) => `${min}-${max} निवडा`,
    selectAtLeast: (min) => `किमान ${min} निवडा`,
    selectUpTo: (max) => `${max} पर्यंत निवडा`
  },
  validation: {
    exact: (max) => `कृपया नेमके ${max} पर्याय निवडा.`,
    between: (min, max) => `कृपया ${min} ते ${max} पर्याय निवडा.`,
    atLeast: (min) => `कृपया किमान ${min} पर्याय निवडा.`,
    upTo: (max) => `कृपया ${max} पर्यंत पर्याय निवडा.`,
    pincode: "कृपया वैध 6 अंकी पिनकोड भरा.",
    textarea: "पुढे जाण्यापूर्वी कृपया छोटे उत्तर लिहा.",
    select: "पुढे जाण्यापूर्वी कृपया एक पर्याय निवडा."
  },
  action: {
    restartSurvey: "सर्वे पुन्हा सुरू करा",
    back: "मागे",
    continue: "पुढे",
    submit: "सबमिट",
    complete: (progress) => `${progress}% पूर्ण`
  },
  thanks: {
    reviewTitle: "आपले सबमिशन",
    title: "धन्यवाद",
    reviewText: "भारतीय मातृ आणि बाल पोषणाबद्दल नोंदवलेली आपली माहिती पहा.",
    text: "आपले उत्तर उत्तम मातृ पोषण मार्गदर्शन, चांगली सप्लीमेंट रचना आणि कुटुंबे व क्लिनिशियनना भेडसावणाऱ्या प्रत्यक्ष अडचणी समजण्यास मदत करेल.",
    responsesSaved: (count) => `${count} उत्तरे सेव्ह झाली`,
    responseText: "प्रत्येक उत्तर वास्तविक पोषण निर्णयांना संदर्भ देते.",
    healthTitle: "भारतीय मातृ आरोग्य",
    healthText: "आपली माहिती चांगले समुपदेशन, सातत्य, उपलब्धता आणि कुटुंब-केंद्रित काळजी यांना मदत करते.",
    summaryTitle: "सबमिशन सारांश",
    retake: "सर्वे पुन्हा द्या",
    newResponse: "नवीन उत्तर सुरू करा",
    backHome: "होमवर परत"
  },
  dialogs: {
    resetTitle: "प्रोफाइल रीसेट करायची?",
    resetMessage: "आपण प्रोफाइल बदलू इच्छिता का? यामुळे सध्याचे सत्र आणि सेव्ह केलेला डेटा हटेल.",
    resetConfirm: "रीसेट",
    stay: "राहू द्या",
    restartTitle: "सर्वे पुन्हा सुरू करायचा?",
    restartMessage: "आपण सर्वे पुन्हा सुरू करू इच्छिता का? आपली सध्याची प्रगती आणि उत्तरे हटतील.",
    restartConfirm: "पुन्हा सुरू करा",
    resume: "सुरू ठेवा"
  },
  survey: {
    saveError: "आपले उत्तर सेव्ह झाले नाही. कृपया पुन्हा प्रयत्न करा.",
    endReasonNeverHeard: "उत्तरदात्याने निवडले: नाही, मी याबद्दल कधीही ऐकले नाही"
  }
};

const gu = {
  appTitle: "IMPN અભ્યાસ",
  appSubtitle: "ભારતીય માતૃત્વ અને બાળ પોષણ",
  languageLabel: "ભાષા પસંદ કરો",
  loading: "IMPN અભ્યાસ શરૂ થઈ રહ્યો છે...",
  welcome: "સ્વાગત છે",
  profileSetup: "પ્રોફાઇલ સેટઅપ",
  goBack: "પાછા જાઓ",
  profile: {
    headline: "આગામી પેઢી માટે સારું પોષણ.",
    headlineHighlight: "આગામી પેઢી",
    intro: "તમારો સહભાગ ભારતની માતાઓ અને બાળકોની આહાર પદ્ધતિઓ અને પોષણ જરૂરિયાતો વિશે મહત્વપૂર્ણ માહિતી એકત્ર કરવામાં મદદ કરે છે.",
    evidence: "પુરાવા આધારિત ક્લિનિકલ અભ્યાસ",
    policy: "પરિવાર આરોગ્ય નીતિ પર અસર",
    title: "પ્રતિસાદક પ્રોફાઇલ",
    subtitle: "IMPN અભ્યાસ શરૂ કરવા માટે તમારી માહિતી ભરો",
    fullName: "પૂર્ણ નામ",
    fullNamePlaceholder: "જેન સ્મિથ",
    mobile: "મોબાઇલ નંબર",
    mobilePlaceholder: "9876543210",
    pincode: "પિનકોડ",
    pincodePlaceholder: "400001",
    age: "ઉંમર",
    agePlaceholder: "28",
    submit: "સર્વે પર જાઓ",
    errors: {
      fullName: "પૂર્ણ નામ જરૂરી છે.",
      mobile: "કૃપા કરીને માન્ય 10 અંકનો મોબાઇલ નંબર દાખલ કરો.",
      pincode: "કૃપા કરીને માન્ય 6 અંકનો પિનકોડ દાખલ કરો.",
      age: "કૃપા કરીને માન્ય ઉંમર દાખલ કરો (18-100)."
    }
  },
  landing: {
    badge: "ગોપનીય ક્લિનિકલ સંશોધન",
    titlePrefix: "ભારતીય માતૃત્વ અને",
    titleHighlight: "બાળ પોષણ",
    titleSuffix: "અભ્યાસ",
    description:
      "હેલ્થકેર પ્રદાતાઓ અને પરિવારોને ડેટા આધારિત જાણકારીથી સશક્ત બનાવવું. ભારતમાં પોષણ પરિસ્થિતિ સમજવામાં અમને મદદ કરો, જેથી વધુ સારું માતૃત્વ કાઉન્સેલિંગ અને બાળ સંભાળ રચી શકાય.",
    startSurvey: "સર્વે શરૂ કરો",
    viewSubmission: "તમારું સબમિશન જુઓ",
    submitNew: "નવો પ્રતિસાદ આપો",
    duration: "લગભગ 7 મિનિટ",
    tiles: [
      {
        title: "ડેટા ગોપનીયતા પ્રથમ",
        text: "બધા પ્રતિસાદ કડક રીતે અનામિક રાખવામાં આવે છે અને ભારતીય આરોગ્ય માર્ગદર્શિકાઓ મુજબ ફક્ત ક્લિનિકલ સંશોધન માટે ઉપયોગમાં લેવાય છે."
      },
      {
        title: "ક્લિનિકલ અસર",
        text: "તમારો સહભાગ પોષણનું પાલન કરવામાં આવતી વાસ્તવિક અડચણો ઓળખવામાં અને નવા માતૃત્વ તથા બાળ પોષણ સપ્લિમેન્ટ્સની રચનામાં મદદ કરે છે."
      },
      {
        title: "સમગ્ર દૃષ્ટિકોણ",
        text: "અમે ક્લિનિશિયન, માતાઓ અને કાળજી લેનારાઓના વિચારો જોડીને પરિવાર પોષણની 360-ડિગ્રી સમજ બનાવવાનો પ્રયત્ન કરીએ છીએ."
      },
      {
        title: "ઝડપી અને સરળ",
        text: "વિવાહિત મહિલાઓ માટે બનાવેલ સરળ અનુભવ. કોઈપણ ડિવાઇસથી 7 મિનિટથી ઓછા સમયમાં અભ્યાસ પૂર્ણ કરો."
      }
    ],
    stats: [
      { label: "સંશોધન સ્થળો", value: "3+" },
      { label: "શહેરો આવરી લેવાયા", value: "3+" },
      { label: "ડેટા પોઇન્ટ્સ", value: "400+" },
      { label: "સરેરાશ સમય", value: "7 મિનિટ" }
    ],
    solvingTitle: "અમે શું સમજવા માંગીએ છીએ",
    solvingText:
      "IMPN અભ્યાસ ભારતમાં વિવિધ સામાજિક-આર્થિક વર્ગોમાં માતૃત્વ અને બાળ પોષણ પડકારો, વર્તન પદ્ધતિઓ અને હેલ્થકેર અપનાવવાની ઊંડી જમીની સમજના અભાવને સંબોધે છે. અમે આ બાબતોનું વિશ્લેષણ કરીએ છીએ:",
    solvingItems: [
      "અદૃશ્ય માતૃત્વ અને બાળ પોષણ ખામીઓ",
      "નીતિ અને વાસ્તવિકતા વચ્ચેનો ડેટા અંતર",
      "પાલન અને સાતત્યની મુશ્કેલીઓ",
      "વિશ્વાસ અને ઉપલબ્ધતાના અવરોધો",
      "સતત જોડાણનો અભાવ"
    ],
    readyTitle: "યોગદાન આપવા તૈયાર છો?",
    readyText: "તમારો અનુભવ ભારતમાં માતૃત્વ આરોગ્ય નીતિ અને બાળ પોષણ ધોરણો પર સીધી અસર કરે છે.",
    imageAlt: "માતૃત્વ અને બાળ આરોગ્ય"
  },
  studyVisual: {
    focusLabel: "સંશોધન કેન્દ્ર",
    focusTitle: "દરેક તબક્કે પોષણ",
    chips: ["ગર્ભાવસ્થા", "માનસિકતા", "પ્રભાવ"],
    metrics: [
      ["ક્લિનિકલ વિશ્વાસ", "પુરાવા"],
      ["દૈનિક પાલન", "સ્વાદ"],
      ["પરિવારની ઉપલબ્ધતા", "પરવડે તેવી કિંમત"]
    ],
    signal: "અભ્યાસ સંકેત"
  },
  question: {
    numericEntry: "આંકડાકીય એન્ટ્રી",
    openEnded: "મુક્ત પ્રતિસાદ",
    rating: "રેટિંગ",
    digits: (count, max) => `${count}/${max} અંક`,
    questionOf: (current, total) => `પ્રશ્ન ${current} / ${total}`,
    selected: (count, max) => `${count}${max ? `/${max}` : ""} પસંદ`,
    selectExactly: (max) => `બરાબર ${max} પસંદ કરો`,
    selectBetween: (min, max) => `${min}-${max} પસંદ કરો`,
    selectAtLeast: (min) => `ઓછામાં ઓછા ${min} પસંદ કરો`,
    selectUpTo: (max) => `${max} સુધી પસંદ કરો`
  },
  validation: {
    exact: (max) => `કૃપા કરીને બરાબર ${max} વિકલ્પો પસંદ કરો.`,
    between: (min, max) => `કૃપા કરીને ${min} થી ${max} વિકલ્પો પસંદ કરો.`,
    atLeast: (min) => `કૃપા કરીને ઓછામાં ઓછા ${min} વિકલ્પો પસંદ કરો.`,
    upTo: (max) => `કૃપા કરીને ${max} સુધી વિકલ્પો પસંદ કરો.`,
    pincode: "કૃપા કરીને માન્ય 6 અંકનો પિનકોડ દાખલ કરો.",
    textarea: "આગળ વધતા પહેલા કૃપા કરીને ટૂંકો પ્રતિસાદ લખો.",
    select: "આગળ વધતા પહેલા કૃપા કરીને એક વિકલ્પ પસંદ કરો."
  },
  action: {
    restartSurvey: "સર્વે ફરી શરૂ કરો",
    back: "પાછા",
    continue: "આગળ",
    submit: "સબમિટ",
    complete: (progress) => `${progress}% પૂર્ણ`
  },
  thanks: {
    reviewTitle: "તમારું સબમિશન",
    title: "આભાર",
    reviewText: "ભારતીય માતૃત્વ અને બાળ પોષણ અંગે નોંધાયેલ તમારી જાણકારી જુઓ.",
    text: "તમારો પ્રતિસાદ વધુ સારું માતૃત્વ પોષણ માર્ગદર્શન, સારી સપ્લિમેન્ટ રચના અને પરિવારો તથા ક્લિનિશિયનને આવતી વ્યવહારુ અડચણો સમજવામાં મદદ કરશે.",
    responsesSaved: (count) => `${count} પ્રતિસાદ સેવ થયા`,
    responseText: "દરેક જવાબ વાસ્તવિક પોષણ નિર્ણયો માટે સંદર્ભ ઉમેરે છે.",
    healthTitle: "ભારતીય માતૃત્વ આરોગ્ય",
    healthText: "તમારી માહિતી સારી સલાહ, સાતત્ય, ઉપલબ્ધતા અને પરિવાર-કેન્દ્રિત કાળજીમાં મદદ કરે છે.",
    summaryTitle: "સબમિશન સારાંશ",
    retake: "સર્વે ફરી આપો",
    newResponse: "નવો પ્રતિસાદ શરૂ કરો",
    backHome: "હોમ પર પાછા"
  },
  dialogs: {
    resetTitle: "પ્રોફાઇલ રીસેટ કરવી છે?",
    resetMessage: "શું તમે તમારી પ્રોફાઇલ બદલવા માંગો છો? આથી તમારું હાલનું સત્ર અને સેવ થયેલો ડેટા દૂર થશે.",
    resetConfirm: "રીસેટ",
    stay: "રહો",
    restartTitle: "સર્વે ફરી શરૂ કરવો છે?",
    restartMessage: "શું તમે સર્વે ફરી શરૂ કરવા માંગો છો? તમારી હાલની પ્રગતિ અને જવાબો દૂર થશે.",
    restartConfirm: "ફરી શરૂ કરો",
    resume: "ચાલુ રાખો"
  },
  survey: {
    saveError: "તમારો પ્રતિસાદ સેવ થઈ શક્યો નથી. કૃપા કરીને ફરી પ્રયત્ન કરો.",
    endReasonNeverHeard: "પ્રતિસાદકે પસંદ કર્યું: ના, મેં આ વિશે ક્યારેય સાંભળ્યું નથી"
  }
};

const uiCopy = { en, hi, mr, gu };

const surveyTranslations = {
  hi: {
    roleQuestion: {
      eyebrow: "प्रोफाइल सेटअप",
      title: "इनमें से कौन सा विकल्प आपको सबसे अच्छी तरह बताता है?",
      help: "आपका उत्तर अध्ययन का मार्ग वैयक्तिकृत करता है और प्रश्नों को क्लिनिकली प्रासंगिक रखता है.",
      options: {
        gynaecologist: { label: "स्त्री रोग विशेषज्ञ" },
        pediatrician: { label: "बाल रोग विशेषज्ञ" },
        mother: { label: "मां/देखभालकर्ता" }
      }
    },
    branches: {
      gynaecologist: {
        label: "स्त्री रोग विशेषज्ञ मार्ग",
        shortLabel: "मातृ देखभाल संबंधी क्लिनिकल जानकारी",
        audience: "स्त्री रोग विशेषज्ञ",
        impact: "आपका क्लिनिकल दृष्टिकोण भारत में मातृ पोषण की कमियों, पालन में बाधाओं और साक्ष्य संबंधी अपेक्षाओं को समझने में मदद करता है.",
        questions: {
          gyn_deficiencies: {
            title: "गर्भवती और स्तनपान कराने वाली महिलाओं में आप सबसे आम कौन सी पोषण कमियां या आहार अंतर देखते हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              iron: { label: "आयरन / एनीमिया" },
              protein: { label: "प्रोटीन की कमी" },
              calcium: { label: "कैल्शियम" },
              vitamin_d: { label: "विटामिन D" },
              vitamin_b12: { label: "विटामिन B12" },
              folate: { label: "फोलेट" },
              iodine: { label: "आयोडीन" },
              dha_omega: { label: "DHA/Omega-3" },
              magnesium: { label: "मैग्नीशियम" },
              zinc: { label: "जिंक" }
            }
          },
          gyn_challenge_stage: {
            title: "महिलाओं में सबसे अधिक पोषण चुनौतियां आप किस चरण में देखते हैं?",
            options: {
              preconception: { label: "गर्भधारण से पहले" },
              first_trimester: { label: "पहली तिमाही" },
              second_trimester: { label: "दूसरी तिमाही" },
              third_trimester: { label: "तीसरी तिमाही" },
              lactation: { label: "स्तनपान अवधि" },
              postpartum: { label: "प्रसव के बाद रिकवरी" }
            }
          },
          gyn_gap_significance: {
            title: "आपके अनुसार भारतीय महिलाओं में मौजूदा मातृ पोषण अंतर कितना गंभीर है?",
            lowLabel: "न्यूनतम अंतर",
            highLabel: "बहुत अधिक गंभीर"
          },
          gyn_adequacy: {
            title: "क्या आपको लगता है कि वर्तमान मातृ पोषण उत्पाद मरीजों की जरूरतों को पर्याप्त रूप से पूरा करते हैं?",
            lowLabel: "बिल्कुल नहीं",
            highLabel: "पूरी तरह"
          },
          gyn_discontinuation_reasons: {
            title: "मरीज मातृ पोषण सप्लीमेंट्स या पाउडर लेना सबसे अधिक किन कारणों से बंद करते हैं?",
            help: "तीन मुख्य कारण चुनें.",
            options: {
              taste_texture: { label: "स्वाद या बनावट" },
              cost_expensive: { label: "लागत/बहुत महंगा" },
              forgot: { label: "लेना भूल जाना" },
              digestive_discomfort: { label: "पाचन असुविधा (मतली/कब्ज)" },
              pill_burden: { label: "बहुत सारी गोलियां लेना" },
              no_effect: { label: "कोई स्पष्ट असर नहीं" },
              family_preference: { label: "परिवार की पसंद/घरेलू उपाय" },
              sugar_content: { label: "अधिक चीनी" },
              availability: { label: "उपलब्धता की समस्या" }
            }
          },
          gyn_product_gaps_open: {
            title: "बाजार में उपलब्ध मातृ पोषण उत्पादों में आपको अब भी कौन सी कमियां दिखती हैं?",
            placeholder: "क्या कमी लगती है बताएं, जैसे खास पोषक तत्व, साफ लेबल, बेहतर फॉर्मेट..."
          },
          gyn_recommendation_factors: {
            title: "मातृ पोषण उत्पाद की आपकी सिफारिश को सबसे अधिक कौन से कारक प्रभावित करते हैं?",
            help: "तीन कारक चुनें.",
            options: {
              clinical_evidence: { label: "क्लिनिकल साक्ष्य/अध्ययन" },
              brand_reputation: { label: "ब्रांड प्रतिष्ठा/भरोसा" },
              affordability: { label: "मरीज के लिए किफायती" },
              tolerability: { label: "पचने में आसान/सहनशीलता" },
              formulation: { label: "वैज्ञानिक फॉर्मूलेशन" },
              sugar_free: { label: "शुगर-फ्री/कम चीनी" },
              taste: { label: "स्वाद/स्वीकार्यता" },
              availability: { label: "उपलब्धता" }
            }
          },
          gyn_digestibility_importance: {
            title: "मातृ पोषण उत्पादों में पचने में आसानी और सेवन की सुविधा कितनी महत्वपूर्ण है?",
            lowLabel: "अच्छा हो तो बेहतर",
            highLabel: "बहुत महत्वपूर्ण कारक"
          },
          gyn_compliance_formats: {
            title: "कौन से फॉर्मेट आम तौर पर मरीजों के बेहतर नियमित उपयोग से जुड़े हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              powder_milk: { label: "पाउडर (दूध आधारित)" },
              sachets: { label: "एक बार उपयोग वाले सैशे" },
              tablets: { label: "टैबलेट/कैप्सूल" },
              gummies: { label: "गमीज़" },
              rtd: { label: "रेडी-टू-ड्रिंक पेय" }
            }
          },
          gyn_flavor_profiles: {
            title: "गर्भवती और स्तनपान कराने वाली महिलाओं में कौन से स्वाद आम तौर पर अधिक स्वीकार्य होते हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              chocolate: { label: "चॉकलेट" },
              vanilla: { label: "वनीला" },
              kesar_elaichi: { label: "केसर/इलायची" },
              fruit: { label: "फलों के स्वाद" },
              unflavored: { label: "बिना स्वाद/न्यूट्रल" }
            }
          },
          gyn_sugar_relevance: {
            title: "आज मातृ पोषण उत्पादों में नियंत्रित या कम चीनी कितनी प्रासंगिक है?",
            lowLabel: "कम प्रासंगिक",
            highLabel: "बहुत प्रासंगिक"
          },
          gyn_price_range: {
            title: "मातृ पोषण सपोर्ट उत्पादों के लिए सामान्यतः कौन सी मासिक कीमत सबसे स्वीकार्य है?",
            options: {
              below_300: { label: "Rs. 300 से कम" },
              "300_600": { label: "Rs. 300 - Rs. 600" },
              "600_1000": { label: "Rs. 600 - Rs. 1000" },
              above_1000: { label: "Rs. 1000 से अधिक" }
            }
          },
          gyn_affordability_influence: {
            title: "लंबे समय तक मरीज के नियमित उपयोग पर किफायत का कितना प्रभाव पड़ता है?",
            lowLabel: "न्यूनतम प्रभाव",
            highLabel: "बहुत अधिक प्रभाव"
          },
          gyn_certifications: {
            title: "किस प्रकार के कारक या प्रमाणपत्र किसी उत्पाद की सिफारिश में आपका भरोसा बढ़ाते हैं?",
            help: "तीन संकेतक चुनें.",
            options: {
              who_gmp: { label: "WHO-GMP प्रमाणित" },
              fssai: { label: "FSSAI लाइसेंस" },
              lab_tested: { label: "थर्ड-पार्टी लैब टेस्टेड" },
              clinical_validation: { label: "क्लिनिकल वैलिडेशन" },
              iso: { label: "ISO प्रमाणित" },
              veg_mark: { label: "शाकाहारी / वीगन मार्क" }
            }
          },
          gyn_innovations: {
            title: "भविष्य के मातृ पोषण उत्पादों में आप कौन से सुधार या नवाचार सबसे अधिक देखना चाहेंगे?",
            placeholder: "बेहतर मातृ देखभाल समाधानों के लिए अपना विचार साझा करें..."
          }
        }
      },
      pediatrician: {
        label: "बाल रोग विशेषज्ञ मार्ग",
        shortLabel: "बाल विकास संबंधी जानकारी",
        audience: "बाल रोग विशेषज्ञ",
        impact: "आपके उत्तर भारत की बाल चिकित्सा देखभाल में वृद्धि, प्रतिरक्षा, भोजन व्यवहार और सप्लीमेंट जरूरतों पर साक्ष्य को मजबूत करते हैं.",
        questions: {
          ped_growth_concerns: {
            title: "बच्चों में वृद्धि या पोषण से जुड़ी कौन सी चिंताएं आप सबसे अधिक देखते हैं?",
            help: "अपनी शीर्ष 5 चिंताएं चुनें.",
            options: {
              weight_gain: { label: "वजन ठीक से न बढ़ना" },
              stunting: { label: "लंबाई कम रहना (उम्र के अनुसार)" },
              immunity: { label: "कम प्रतिरक्षा / संक्रमण" },
              cognitive: { label: "संज्ञानात्मक / मस्तिष्क विकास" },
              appetite: { label: "भूख कम होना" },
              deficiency: { label: "माइक्रोन्यूट्रिएंट कमियां" },
              gut: { label: "आंत स्वास्थ्य / कब्ज" },
              picky_eating: { label: "चुनिंदा खाने की आदत" },
              anemia: { label: "एनीमिया" }
            }
          },
          ped_greatest_gap_age: {
            title: "आपके अनुसार वर्तमान में किस आयु समूह में सबसे अधिक पोषण अंतर है?",
            options: {
              "0_6m": { label: "0-6 महीने" },
              "6_12m": { label: "6-12 महीने" },
              "1_3y": { label: "1-3 वर्ष (टॉडलर)" },
              "4_6y": { label: "4-6 वर्ष (प्रीस्कूल)" },
              "7_12y": { label: "7-12 वर्ष (स्कूल आयु)" }
            }
          },
          ped_gap_significance: {
            title: "आपके अनुसार आज भारतीय बच्चों में पोषण अंतर कितना महत्वपूर्ण है?",
            lowLabel: "न्यूनतम",
            highLabel: "बहुत महत्वपूर्ण"
          },
          ped_inadequate_reasons: {
            title: "बच्चों को पर्याप्त पोषण न मिल पाने के सबसे आम कारण क्या हैं?",
            help: "तीन कारण चुनें.",
            options: {
              picky_eating: { label: "चुनिंदा खाना / भोजन से इनकार" },
              awareness: { label: "माता-पिता में जागरूकता की कमी" },
              affordability: { label: "गुणवत्तापूर्ण भोजन की लागत" },
              busy_parents: { label: "माता-पिता की व्यस्त जीवनशैली" },
              junk_food: { label: "उपलब्ध स्नैक्स की खराब गुणवत्ता" },
              digestion: { label: "पाचन समस्याएं" }
            }
          },
          ped_discontinuation_reasons: {
            title: "माता-पिता शिशु या बाल पोषण उत्पाद बीच में सबसे अधिक किन कारणों से बंद करते हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              taste_refusal: { label: "बच्चा स्वाद नहीं स्वीकारता" },
              cost: { label: "लागत की समस्या" },
              forget: { label: "भूल जाना" },
              digestion: { label: "पाचन संबंधी दुष्प्रभाव" },
              no_results: { label: "विकास में स्पष्ट परिणाम नहीं" },
              home_food: { label: "घर के भोजन पर जाना" }
            }
          },
          ped_adequacy: {
            title: "क्या आपको लगता है कि वर्तमान शिशु और बाल पोषण उत्पाद पोषण जरूरतों को पर्याप्त रूप से पूरा करते हैं?",
            lowLabel: "बिल्कुल नहीं",
            highLabel: "पूरी तरह"
          },
          ped_product_gaps_open: {
            title: "बाजार में उपलब्ध बाल पोषण उत्पादों में आपको वर्तमान में सबसे बड़ी कमियां क्या दिखती हैं?",
            placeholder: "स्क्रीनिंग, फॉर्मूलेशन, माता-पिता की शिक्षा या पहुंच से जुड़ी कमियां साझा करें..."
          },
          ped_recommendation_factors: {
            title: "बाल पोषण उत्पादों की आपकी सिफारिश को सबसे अधिक कौन से कारक प्रभावित करते हैं?",
            help: "तीन कारक चुनें.",
            options: {
              clinical: { label: "क्लिनिकल अध्ययन" },
              sugar: { label: "चीनी की मात्रा" },
              cost: { label: "किफायत" },
              taste: { label: "स्वाद/स्वीकार्यता" },
              brand: { label: "ब्रांड भरोसा" },
              natural: { label: "प्राकृतिक सामग्री" }
            }
          },
          ped_taste_importance: {
            title: "बच्चों में लंबे समय तक नियमित सेवन के लिए स्वाद और सेवन में आसानी कितनी महत्वपूर्ण है?",
            lowLabel: "बहुत ज्यादा नहीं",
            highLabel: "अत्यंत महत्वपूर्ण"
          },
          ped_affordability_influence: {
            title: "बाल पोषण उत्पादों के लंबे समय तक उपयोग पर किफायत कितना प्रभाव डालती है?",
            lowLabel: "कम",
            highLabel: "बहुत अधिक"
          },
          ped_purchase_channels: {
            title: "बच्चों के पोषण उत्पाद खरीदने के लिए माता-पिता सबसे अधिक कौन से चैनल उपयोग करते हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              pharmacy: { label: "स्थानीय फार्मेसी / केमिस्ट" },
              online: { label: "ऑनलाइन (Amazon/FirstCry/BigBasket)" },
              supermarket: { label: "सुपरमार्केट" },
              clinic: { label: "सीधे क्लिनिक से" }
            }
          },
          ped_confidence_factors: {
            title: "किस बात से नए बाल पोषण उत्पाद की सिफारिश में आपका भरोसा बढ़ता है?",
            help: "तीन कारक चुनें.",
            options: {
              evidence: { label: "साक्ष्य-आधारित फॉर्मूला" },
              clean_label: { label: "क्लीन लेबल (कोई एडिटिव नहीं)" },
              compliance: { label: "FSSAI/GMP अनुपालन" },
              feedback: { label: "सकारात्मक मरीज प्रतिक्रिया" },
              affordability: { label: "जनसामान्य के लिए किफायती" }
            }
          },
          ped_innovations: {
            title: "भविष्य के शिशु और बाल पोषण उत्पादों में आप कौन से सुधार या नवाचार सबसे अधिक देखना चाहेंगे?",
            placeholder: "जैसे नए फॉर्मेट, कम चीनी, लक्षित पोषक तत्व..."
          }
        }
      },
      mother: {
        label: "मां/देखभालकर्ता मार्ग",
        shortLabel: "मातृ पोषण और स्वास्थ्य",
        audience: "मां/देखभालकर्ता",
        impact: "आपका अनुभव यह समझने में मदद करता है कि भारतीय परिवारों को सबसे अधिक क्या चाहिए: सुलभ सलाह, भरोसेमंद उत्पाद और दैनिक जीवन में फिट होने वाला पोषण मार्गदर्शन.",
        questions: {
          mom_age_group: {
            title: "आयु समूह",
            options: {
              "18_25": { label: "18-25" },
              "26_30": { label: "26-30" },
              "31_35": { label: "31-35" },
              "36_40": { label: "36-40" },
              "41_plus": { label: "41+" }
            }
          },
          mom_relationship: {
            title: "अभी इनमें से कौन सा विकल्प आपको सबसे अच्छी तरह बताता है?",
            options: {
              planning_pregnancy: { label: "गर्भधारण की योजना बना रही हूं" },
              currently_pregnant: { label: "वर्तमान में गर्भवती" },
              new_mother_0_6m: { label: "नई मां (प्रसव के 0-6 महीने)" },
              mother_child_6m_3y: { label: "छोटे बच्चे की मां (6 महीने-3 वर्ष)" },
              caregiver_family: { label: "देखभालकर्ता / परिवार सदस्य" }
            }
          },
          mom_owns_car: {
            title: "क्या आपके घर में कार है?",
            options: {
              yes: { label: "हां" },
              no: { label: "नहीं" }
            }
          },
          mom_health_concerns: {
            title: "गर्भावस्था या मातृत्व के दौरान आपने कौन सी सबसे बड़ी स्वास्थ्य या पोषण चिंताएं महसूस की हैं?",
            help: "अपनी शीर्ष 3 चिंताएं चुनें - जो आपको सबसे अधिक परेशान करती हैं.",
            options: {
              weakness_fatigue: { label: "कमजोरी / थकान" },
              low_iron_haemoglobin: { label: "कम आयरन या हीमोग्लोबिन" },
              poor_appetite: { label: "भूख कम लगना" },
              digestive_discomfort_bloating: { label: "पाचन असुविधा / पेट फूलना" },
              low_milk_production: { label: "दूध कम बनना" },
              balanced_diet_difficulty: { label: "संतुलित आहार लेना कठिन" },
              child_not_eating: { label: "बच्चा ठीक से नहीं खाता" },
              child_weakness_low_weight: { label: "बच्चे में कमजोरी या कम वजन" },
              lack_clear_guidance: { label: "क्या खाना चाहिए इस पर स्पष्ट मार्गदर्शन नहीं" },
              products_too_expensive: { label: "पोषण उत्पाद बहुत महंगे हैं" },
              confused_what_to_consume: { label: "क्या लेना चाहिए इस पर भ्रम" }
            }
          },
          mom_guidance_sources: {
            title: "गर्भावस्था में या बच्चे के लिए क्या खाना चाहिए, इसकी सलाह आप आम तौर पर कहां से लेती हैं?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              doctor_gynaecologist: { label: "डॉक्टर / स्त्री रोग विशेषज्ञ" },
              family_elders_mother_in_law: { label: "परिवार के बड़े / सास" },
              friends_other_mothers: { label: "दोस्त या अन्य माताएं" },
              social_media: { label: "सोशल मीडिया (Instagram, YouTube)" },
              whatsapp_community: { label: "WhatsApp समूह / समुदाय" },
              google_chatgpt: { label: "गूगल / ChatGPT" },
              tv_print_media: { label: "टीवी या प्रिंट मीडिया" },
              medical_apps_websites: { label: "मेडिकल ऐप्स या वेबसाइट" }
            }
          },
          mom_benefits_priority: {
            title: "अभी आपके लिए कौन से पोषण लाभ सबसे अधिक महत्वपूर्ण हैं?",
            help: "अपने लिए सबसे महत्वपूर्ण लगने वाले विकल्प चुनें.",
            options: {
              energy_reducing_fatigue: { label: "ऊर्जा / थकान कम करना" },
              protein_intake: { label: "प्रोटीन सेवन" },
              fetal_baby_development: { label: "गर्भस्थ शिशु / बच्चे का विकास" },
              brain_development: { label: "मस्तिष्क विकास (DHA, choline)" },
              bone_strength: { label: "हड्डियों की मजबूती (कैल्शियम, विटामिन D)" },
              better_digestion: { label: "बेहतर पाचन" },
              improved_immunity: { label: "बेहतर प्रतिरक्षा" },
              better_milk_production: { label: "दूध उत्पादन में सुधार (स्तनपान)" },
              reducing_weakness_anaemia: { label: "कमजोरी / एनीमिया कम करना" },
              weight_management: { label: "वजन प्रबंधन" },
              better_child_growth: { label: "बच्चे की बेहतर वृद्धि" }
            }
          },
          mom_nutrition_barriers: {
            title: "अपनी पोषण देखभाल नियमित रूप से करना किस वजह से कठिन होता है?",
            help: "जो भी लागू हों उन्हें चुनें.",
            options: {
              forget_no_routine: { label: "भूल जाना या तय रूटीन न होना" },
              product_taste: { label: "उपलब्ध उत्पादों का स्वाद" },
              too_expensive: { label: "बहुत महंगा" },
              not_available_near_home: { label: "घर के पास आसानी से उपलब्ध नहीं" },
              family_not_necessary: { label: "परिवार इसे जरूरी नहीं मानता" },
              no_difference: { label: "कोई फर्क महसूस नहीं हुआ" },
              too_many_medicines: { label: "पहले से बहुत सारी दवाएं" },
              doctor_stopped_recommending: { label: "डॉक्टर ने सिफारिश करना बंद कर दिया" },
              not_prioritised: { label: "कोई खास कारण नहीं - बस प्राथमिकता नहीं दी" }
            }
          },
          mom_product_awareness: {
            title: "क्या आपने गर्भावस्था, स्तनपान या बच्चों के लिए कोई पोषण पाउडर या सप्लीमेंट सुना या उपयोग किया है?",
            options: {
              use_regularly: { label: "हां, मैं नियमित उपयोग करती हूं" },
              used_before_not_currently: { label: "पहले उपयोग किया है, अभी नहीं" },
              heard_never_used: { label: "सुना है लेकिन कभी उपयोग नहीं किया" },
              never_heard: { label: "नहीं, मैंने इनके बारे में कभी नहीं सुना" }
            }
          },
          mom_recommendation_source: {
            title: "इन उत्पादों के बारे में आपको पहली बार किसने बताया या सिफारिश की?",
            options: {
              doctor_gynaecologist: { label: "डॉक्टर / स्त्री रोग विशेषज्ञ" },
              family_member_mother_in_law: { label: "परिवार सदस्य / सास" },
              friend_other_mother: { label: "दोस्त या अन्य मां" },
              social_media_influencer: { label: "सोशल मीडिया / इन्फ्लुएंसर" },
              pharmacy_medical_store: { label: "फार्मेसी / मेडिकल स्टोर स्टाफ" },
              self_research: { label: "खुद जानकारी खोजी" },
              asha_health_worker: { label: "ASHA / स्वास्थ्य कार्यकर्ता" }
            }
          },
          mom_usage_frequency: {
            title: "आप इन उत्पादों का कितनी बार उपयोग करती हैं या करती थीं?",
            options: {
              daily_as_recommended: { label: "रोजाना / जैसा बताया गया" },
              few_times_week: { label: "सप्ताह में कुछ बार" },
              occasionally_remember: { label: "कभी-कभी / जब याद आए" },
              stopped_short_trial: { label: "थोड़े समय के बाद बंद कर दिया" }
            }
          },
          mom_product_dislikes: {
            title: "इन उत्पादों में आपको क्या पसंद नहीं है या क्या कठिन लगता है?",
            help: "भले ही आपने सिर्फ एक बार उपयोग किया हो या दूसरों से शिकायतें सुनी हों, तब भी उत्तर दें.",
            options: {
              taste_flavour: { label: "स्वाद / फ्लेवर" },
              aftertaste: { label: "बाद में रहने वाला स्वाद" },
              chalky_thick_texture: { label: "चॉकी या गाढ़ी बनावट" },
              too_sweet: { label: "बहुत मीठा" },
              artificial_smell: { label: "कृत्रिम गंध" },
              hard_to_mix_dissolve: { label: "मिलाना / घोलना कठिन" },
              heavy_on_stomach: { label: "पेट पर भारी" },
              too_expensive: { label: "बहुत महंगा" },
              packaging_inconvenient: { label: "पैकेजिंग असुविधाजनक" },
              other: { label: "अन्य" }
            }
          },
          mom_choice_factors: {
            title: "पोषण उत्पाद चुनते समय सबसे अधिक क्या मायने रखता है?",
            help: "जो भी लागू हों चुनें. कम से कम 3 चुनें.",
            options: {
              doctor_recommendation: { label: "डॉक्टर की सिफारिश" },
              taste: { label: "स्वाद" },
              price_affordability: { label: "कीमत / किफायत" },
              ingredient_quality: { label: "सामग्री की गुणवत्ता" },
              brand_trust: { label: "ब्रांड भरोसा" },
              easy_digestion: { label: "आसान पाचन" },
              scientific_clinical_evidence: { label: "वैज्ञानिक / क्लिनिकल साक्ष्य" },
              fssai_who_certifications: { label: "FSSAI / WHO प्रमाणपत्र" },
              family_elder_guidance: { label: "परिवार के बड़े की सलाह" },
              available_near_home: { label: "घर के पास उपलब्ध" }
            }
          },
          mom_frustrating_aspect: {
            title: "आज उपलब्ध पोषण उत्पादों या पोषण सलाह की सबसे निराशाजनक बात क्या है?",
            placeholder: "खुला उत्तर - अपनी परेशानी अपने शब्दों में बताएं."
          },
          mom_missing_support: {
            title: "भारत में माताओं और बच्चों के लिए किस तरह का पोषण समर्थन अभी भी कम है?",
            placeholder: "खुला उत्तर - किस तरह का समर्थन अभी भी नहीं मिल रहा है, बताएं."
          }
        }
      }
    }
  },
  mr: {
    roleQuestion: {
      eyebrow: "प्रोफाइल सेटअप",
      title: "यापैकी कोणता पर्याय आपल्याला सर्वात चांगले वर्णन करतो?",
      help: "आपले उत्तर अभ्यासाचा मार्ग वैयक्तिक करते आणि प्रश्न क्लिनिकली संबंधित ठेवते.",
      options: {
        gynaecologist: { label: "स्त्रीरोगतज्ज्ञ" },
        pediatrician: { label: "बालरोगतज्ज्ञ" },
        mother: { label: "आई/काळजीवाहक" }
      }
    },
    branches: {
      gynaecologist: {
        label: "स्त्रीरोगतज्ज्ञ मार्ग",
        shortLabel: "मातृ काळजीवरील क्लिनिकल माहिती",
        audience: "स्त्रीरोगतज्ज्ञ",
        impact: "आपला क्लिनिकल दृष्टिकोन भारतातील मातृ पोषणातील कमतरता, पालनातील अडथळे आणि पुराव्यांच्या अपेक्षा समजून घेण्यास मदत करतो.",
        questions: {
          gyn_deficiencies: {
            title: "गर्भवती आणि स्तनपान करणाऱ्या महिलांमध्ये आपण सर्वात सामान्य कोणत्या पोषण कमतरता किंवा आहारातील अंतर पाहता?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              iron: { label: "आयर्न / अ‍ॅनिमिया" },
              protein: { label: "प्रोटीनची कमतरता" },
              calcium: { label: "कॅल्शियम" },
              vitamin_d: { label: "व्हिटॅमिन D" },
              vitamin_b12: { label: "व्हिटॅमिन B12" },
              folate: { label: "फोलेट" },
              iodine: { label: "आयोडीन" },
              dha_omega: { label: "DHA/Omega-3" },
              magnesium: { label: "मॅग्नेशियम" },
              zinc: { label: "झिंक" }
            }
          },
          gyn_challenge_stage: {
            title: "महिलांमध्ये सर्वात जास्त पोषण आव्हाने आपण कोणत्या टप्प्यात पाहता?",
            options: {
              preconception: { label: "गर्भधारणेपूर्वी" },
              first_trimester: { label: "पहिली तिमाही" },
              second_trimester: { label: "दुसरी तिमाही" },
              third_trimester: { label: "तिसरी तिमाही" },
              lactation: { label: "स्तनपान कालावधी" },
              postpartum: { label: "प्रसूतीनंतरची रिकव्हरी" }
            }
          },
          gyn_gap_significance: {
            title: "आपल्या मते भारतीय महिलांमध्ये सध्याचे मातृ पोषण अंतर किती गंभीर आहे?",
            lowLabel: "किमान अंतर",
            highLabel: "अत्यंत गंभीर"
          },
          gyn_adequacy: {
            title: "सध्या उपलब्ध मातृ पोषण उत्पादने रुग्णांच्या गरजा पुरेशा प्रमाणात पूर्ण करतात असे आपल्याला वाटते का?",
            lowLabel: "अजिबात नाही",
            highLabel: "पूर्णपणे"
          },
          gyn_discontinuation_reasons: {
            title: "रुग्ण मातृ पोषण सप्लीमेंट्स किंवा पावडर घेणे सर्वात सामान्यपणे कोणत्या कारणांनी बंद करतात?",
            help: "तीन मुख्य कारणे निवडा.",
            options: {
              taste_texture: { label: "चव किंवा टेक्स्चर" },
              cost_expensive: { label: "खर्च/खूप महाग" },
              forgot: { label: "घ्यायला विसरणे" },
              digestive_discomfort: { label: "पचनातील अस्वस्थता (मळमळ/बद्धकोष्ठता)" },
              pill_burden: { label: "खूप गोळ्या घ्याव्या लागणे" },
              no_effect: { label: "लक्षात येण्यासारखा परिणाम नाही" },
              family_preference: { label: "कुटुंबाची पसंती/घरगुती उपाय" },
              sugar_content: { label: "जास्त साखर" },
              availability: { label: "उपलब्धतेची समस्या" }
            }
          },
          gyn_product_gaps_open: {
            title: "बाजारात उपलब्ध मातृ पोषण उत्पादनांमध्ये अजून कोणत्या कमतरता आहेत असे आपल्याला वाटते?",
            placeholder: "काय कमी आहे ते सांगा, जसे विशिष्ट पोषक घटक, स्वच्छ लेबल्स, चांगले फॉर्मॅट्स..."
          },
          gyn_recommendation_factors: {
            title: "मातृ पोषण उत्पादनाची शिफारस करताना आपल्यावर सर्वात जास्त कोणते घटक प्रभाव टाकतात?",
            help: "तीन घटक निवडा.",
            options: {
              clinical_evidence: { label: "क्लिनिकल पुरावा/अभ्यास" },
              brand_reputation: { label: "ब्रँड प्रतिष्ठा/विश्वास" },
              affordability: { label: "रुग्णाला परवडणे" },
              tolerability: { label: "पचनसुलभता/सहनशीलता" },
              formulation: { label: "वैज्ञानिक फॉर्म्युलेशन" },
              sugar_free: { label: "शुगर-फ्री/कमी साखर" },
              taste: { label: "चव/स्वीकार्यता" },
              availability: { label: "उपलब्धता" }
            }
          },
          gyn_digestibility_importance: {
            title: "मातृ पोषण उत्पादनांमध्ये पचनसुलभता आणि सेवनाची सोय किती महत्त्वाची आहे?",
            lowLabel: "असली तर चांगले",
            highLabel: "अत्यंत महत्त्वाचा घटक"
          },
          gyn_compliance_formats: {
            title: "रुग्णांच्या चांगल्या नियमित वापराशी साधारणपणे कोणते फॉर्मॅट्स जोडलेले असतात?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              powder_milk: { label: "पावडर (दूध आधारित)" },
              sachets: { label: "एकदा वापराचे सॅशे" },
              tablets: { label: "टॅब्लेट/कॅप्सूल" },
              gummies: { label: "गमीज" },
              rtd: { label: "रेडी-टू-ड्रिंक पेये" }
            }
          },
          gyn_flavor_profiles: {
            title: "गर्भवती आणि स्तनपान करणाऱ्या महिलांमध्ये कोणते फ्लेवर अधिक स्वीकारले जातात?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              chocolate: { label: "चॉकलेट" },
              vanilla: { label: "व्हॅनिला" },
              kesar_elaichi: { label: "केशर/वेलची" },
              fruit: { label: "फळांचे फ्लेवर" },
              unflavored: { label: "बिनचवीचे/न्यूट्रल" }
            }
          },
          gyn_sugar_relevance: {
            title: "आज मातृ पोषण उत्पादनांमध्ये नियंत्रित किंवा कमी साखरेचे प्रमाण किती संबंधित आहे?",
            lowLabel: "कमी संबंधित",
            highLabel: "खूप संबंधित"
          },
          gyn_price_range: {
            title: "मातृ पोषण सपोर्ट उत्पादनांसाठी सामान्यतः कोणती मासिक किंमत सर्वात स्वीकार्य असते?",
            options: {
              below_300: { label: "Rs. 300 पेक्षा कमी" },
              "300_600": { label: "Rs. 300 - Rs. 600" },
              "600_1000": { label: "Rs. 600 - Rs. 1000" },
              above_1000: { label: "Rs. 1000 पेक्षा जास्त" }
            }
          },
          gyn_affordability_influence: {
            title: "दीर्घकालीन रुग्ण पालनावर परवडणाऱ्या किंमतीचा किती प्रभाव पडतो?",
            lowLabel: "किमान प्रभाव",
            highLabel: "खूप मोठा प्रभाव"
          },
          gyn_certifications: {
            title: "उत्पादनाची शिफारस करताना कोणते घटक किंवा प्रमाणपत्रे आपला विश्वास वाढवतात?",
            help: "तीन संकेतक निवडा.",
            options: {
              who_gmp: { label: "WHO-GMP प्रमाणित" },
              fssai: { label: "FSSAI परवाना" },
              lab_tested: { label: "थर्ड-पार्टी लॅब टेस्टेड" },
              clinical_validation: { label: "क्लिनिकल वैधता" },
              iso: { label: "ISO प्रमाणित" },
              veg_mark: { label: "शाकाहारी / वीगन मार्क" }
            }
          },
          gyn_innovations: {
            title: "भविष्यातील मातृ पोषण उत्पादनांमध्ये आपण कोणते सुधार किंवा नवकल्पना सर्वात जास्त पाहू इच्छिता?",
            placeholder: "चांगल्या मातृ काळजी उपायांसाठी आपला विचार शेअर करा..."
          },
          ped_growth_concerns: {}
        }
      },
      pediatrician: {
        label: "बालरोगतज्ज्ञ मार्ग",
        shortLabel: "बाल वाढीवरील माहिती",
        audience: "बालरोगतज्ज्ञ",
        impact: "आपली उत्तरे भारतातील बालरोग काळजीमध्ये वाढ, प्रतिकारशक्ती, खाण्याचे वर्तन आणि सप्लीमेंट गरजांवरील पुरावा मजबूत करतात.",
        questions: {
          ped_growth_concerns: {
            title: "मुलांमध्ये वाढ किंवा पोषणाबद्दल कोणत्या चिंता आपण सर्वात जास्त पाहता?",
            help: "आपल्या शीर्ष 5 चिंता निवडा.",
            options: {
              weight_gain: { label: "वजन नीट न वाढणे" },
              stunting: { label: "उंची कमी राहणे (वयानुसार)" },
              immunity: { label: "कमी प्रतिकारशक्ती / संसर्ग" },
              cognitive: { label: "संज्ञानात्मक / मेंदू विकास" },
              appetite: { label: "भूक कमी असणे" },
              deficiency: { label: "मायक्रोन्यूट्रिएंट कमतरता" },
              gut: { label: "आतड्यांचे आरोग्य / बद्धकोष्ठता" },
              picky_eating: { label: "निवडक खाण्याची सवय" },
              anemia: { label: "अ‍ॅनिमिया" }
            }
          },
          ped_greatest_gap_age: {
            title: "सध्या कोणत्या वयोगटात सर्वात मोठे पोषण अंतर आहे असे आपल्याला वाटते?",
            options: {
              "0_6m": { label: "0-6 महिने" },
              "6_12m": { label: "6-12 महिने" },
              "1_3y": { label: "1-3 वर्षे (टॉडलर्स)" },
              "4_6y": { label: "4-6 वर्षे (प्रीस्कूल)" },
              "7_12y": { label: "7-12 वर्षे (शालेय वय)" }
            }
          },
          ped_gap_significance: {
            title: "आज भारतीय मुलांमध्ये पोषण अंतर किती महत्त्वाचे आहे असे आपल्याला वाटते?",
            lowLabel: "किमान",
            highLabel: "खूप महत्त्वाचे"
          },
          ped_inadequate_reasons: {
            title: "मुलांना पुरेसे पोषण न मिळण्याची सर्वात सामान्य कारणे कोणती?",
            help: "तीन कारणे निवडा.",
            options: {
              picky_eating: { label: "निवडक खाणे / अन्न नाकारणे" },
              awareness: { label: "पालकांमध्ये जागरूकतेचा अभाव" },
              affordability: { label: "गुणवत्तापूर्ण अन्नाचा खर्च" },
              busy_parents: { label: "पालकांची व्यस्त जीवनशैली" },
              junk_food: { label: "उपलब्ध स्नॅक्सची खराब गुणवत्ता" },
              digestion: { label: "पचन समस्या" }
            }
          },
          ped_discontinuation_reasons: {
            title: "पालक शिशु किंवा बाल पोषण उत्पादने मधेच सर्वात जास्त कोणत्या कारणांनी बंद करतात?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              taste_refusal: { label: "मुलाला चव आवडत नाही" },
              cost: { label: "खर्चाची समस्या" },
              forget: { label: "विसरणे" },
              digestion: { label: "पचनाशी संबंधित दुष्परिणाम" },
              no_results: { label: "वाढीत दिसणारे परिणाम नाहीत" },
              home_food: { label: "घरच्या जेवणाकडे वळणे" }
            }
          },
          ped_adequacy: {
            title: "सध्या उपलब्ध शिशु आणि बाल पोषण उत्पादने पोषण गरजा पुरेशा प्रमाणात पूर्ण करतात असे आपल्याला वाटते का?",
            lowLabel: "अजिबात नाही",
            highLabel: "पूर्णपणे"
          },
          ped_product_gaps_open: {
            title: "बाजारात उपलब्ध बाल पोषण उत्पादनांमध्ये सध्या सर्वात मोठ्या कमतरता कोणत्या दिसतात?",
            placeholder: "स्क्रीनिंग, फॉर्म्युलेशन्स, पालक शिक्षण किंवा उपलब्धतेतील कमतरता शेअर करा..."
          },
          ped_recommendation_factors: {
            title: "बाल पोषण उत्पादनांची शिफारस करताना आपल्यावर सर्वात जास्त कोणते घटक प्रभाव टाकतात?",
            help: "तीन घटक निवडा.",
            options: {
              clinical: { label: "क्लिनिकल अभ्यास" },
              sugar: { label: "साखरेचे प्रमाण" },
              cost: { label: "परवडणारी किंमत" },
              taste: { label: "चव/स्वीकार्यता" },
              brand: { label: "ब्रँडवर विश्वास" },
              natural: { label: "नैसर्गिक घटक" }
            }
          },
          ped_taste_importance: {
            title: "मुलांमध्ये दीर्घकालीन पालनासाठी चव आणि सेवनाची सोय किती महत्त्वाची आहे?",
            lowLabel: "फार नाही",
            highLabel: "अत्यंत महत्त्वाची"
          },
          ped_affordability_influence: {
            title: "बाल पोषण उत्पादनांच्या दीर्घकालीन वापरावर परवडणाऱ्या किंमतीचा किती प्रभाव पडतो?",
            lowLabel: "कमी",
            highLabel: "खूप जास्त"
          },
          ped_purchase_channels: {
            title: "बाल पोषण उत्पादने खरेदी करण्यासाठी पालक सर्वात जास्त कोणते चॅनेल वापरतात?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              pharmacy: { label: "स्थानिक फार्मसी / केमिस्ट" },
              online: { label: "ऑनलाइन (Amazon/FirstCry/BigBasket)" },
              supermarket: { label: "सुपरमार्केट" },
              clinic: { label: "थेट क्लिनिकमधून" }
            }
          },
          ped_confidence_factors: {
            title: "नवीन बाल पोषण उत्पादनाची शिफारस करताना आपला विश्वास कशामुळे वाढतो?",
            help: "तीन घटक निवडा.",
            options: {
              evidence: { label: "पुराव्यावर आधारित फॉर्म्युला" },
              clean_label: { label: "क्लीन लेबल्स (अ‍ॅडिटिव्ह नाहीत)" },
              compliance: { label: "FSSAI/GMP अनुपालन" },
              feedback: { label: "सकारात्मक रुग्ण प्रतिसाद" },
              affordability: { label: "सामान्य लोकांसाठी परवडणारे" }
            }
          },
          ped_innovations: {
            title: "भविष्यातील शिशु आणि बाल पोषण उत्पादनांमध्ये आपण कोणते सुधार किंवा नवकल्पना सर्वात जास्त पाहू इच्छिता?",
            placeholder: "उदा., नवीन फॉर्मॅट्स, कमी साखर, लक्ष्यित पोषक घटक..."
          }
        }
      },
      mother: {
        label: "आई/काळजीवाहक मार्ग",
        shortLabel: "मातृ पोषण आणि आरोग्य",
        audience: "आई/काळजीवाहक",
        impact: "आपला अनुभव भारतीय कुटुंबांना सर्वात जास्त काय हवे आहे हे समजण्यास मदत करतो: सुलभ सल्ला, विश्वासार्ह उत्पादने आणि दैनंदिन जीवनात बसणारे पोषण मार्गदर्शन.",
        questions: {
          mom_age_group: {
            title: "वयोगट",
            options: {
              "18_25": { label: "18-25" },
              "26_30": { label: "26-30" },
              "31_35": { label: "31-35" },
              "36_40": { label: "36-40" },
              "41_plus": { label: "41+" }
            }
          },
          mom_relationship: {
            title: "सध्या यापैकी कोणता पर्याय आपल्याला सर्वात चांगले वर्णन करतो?",
            options: {
              planning_pregnancy: { label: "गर्भधारणेची योजना करत आहे" },
              currently_pregnant: { label: "सध्या गर्भवती" },
              new_mother_0_6m: { label: "नवीन आई (प्रसूतीनंतर 0-6 महिने)" },
              mother_child_6m_3y: { label: "लहान मुलाची आई (6 महिने-3 वर्षे)" },
              caregiver_family: { label: "काळजीवाहक / कुटुंब सदस्य" }
            }
          },
          mom_owns_car: {
            title: "आपल्या घरी कार आहे का?",
            options: {
              yes: { label: "होय" },
              no: { label: "नाही" }
            }
          },
          mom_health_concerns: {
            title: "गर्भधारणा किंवा मातृत्वादरम्यान आपण कोणत्या सर्वात मोठ्या आरोग्य किंवा पोषण चिंतेला सामोरे गेला/गेलात?",
            help: "आपल्या शीर्ष 3 चिंता निवडा - ज्या सर्वात जास्त त्रास देतात.",
            options: {
              weakness_fatigue: { label: "कमजोरी / थकवा" },
              low_iron_haemoglobin: { label: "कमी आयर्न किंवा हिमोग्लोबिन" },
              poor_appetite: { label: "भूक कमी" },
              digestive_discomfort_bloating: { label: "पचनातील अस्वस्थता / पोट फुगणे" },
              low_milk_production: { label: "दूध कमी येणे" },
              balanced_diet_difficulty: { label: "संतुलित आहार घेणे कठीण" },
              child_not_eating: { label: "मुल नीट खात नाही" },
              child_weakness_low_weight: { label: "मुलामध्ये कमजोरी किंवा कमी वजन" },
              lack_clear_guidance: { label: "काय खावे याबद्दल स्पष्ट मार्गदर्शन नाही" },
              products_too_expensive: { label: "पोषण उत्पादने खूप महाग आहेत" },
              confused_what_to_consume: { label: "काय घ्यावे याबद्दल गोंधळ" }
            }
          },
          mom_guidance_sources: {
            title: "गर्भधारणेदरम्यान किंवा मुलासाठी काय खावे याचे मार्गदर्शन आपण सामान्यतः कुठून घेता?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              doctor_gynaecologist: { label: "डॉक्टर / स्त्रीरोगतज्ज्ञ" },
              family_elders_mother_in_law: { label: "कुटुंबातील ज्येष्ठ / सासू" },
              friends_other_mothers: { label: "मैत्रिणी किंवा इतर माता" },
              social_media: { label: "सोशल मीडिया (Instagram, YouTube)" },
              whatsapp_community: { label: "WhatsApp गट / समुदाय" },
              google_chatgpt: { label: "गूगल / ChatGPT" },
              tv_print_media: { label: "टीव्ही किंवा प्रिंट मीडिया" },
              medical_apps_websites: { label: "मेडिकल अ‍ॅप्स किंवा वेबसाइट्स" }
            }
          },
          mom_benefits_priority: {
            title: "सध्या आपल्यासाठी कोणते पोषण फायदे सर्वात महत्त्वाचे आहेत?",
            help: "आपल्याला वैयक्तिकरित्या सर्वात महत्त्वाचे वाटणारे पर्याय निवडा.",
            options: {
              energy_reducing_fatigue: { label: "ऊर्जा / थकवा कमी करणे" },
              protein_intake: { label: "प्रोटीन सेवन" },
              fetal_baby_development: { label: "गर्भातील बाळ / बाळाचा विकास" },
              brain_development: { label: "मेंदू विकास (DHA, choline)" },
              bone_strength: { label: "हाडांची मजबुती (कॅल्शियम, व्हिटॅमिन D)" },
              better_digestion: { label: "चांगले पचन" },
              improved_immunity: { label: "चांगली प्रतिकारशक्ती" },
              better_milk_production: { label: "दूध उत्पादन सुधारणा (स्तनपान)" },
              reducing_weakness_anaemia: { label: "कमजोरी / अ‍ॅनिमिया कमी करणे" },
              weight_management: { label: "वजन व्यवस्थापन" },
              better_child_growth: { label: "मुलाची चांगली वाढ" }
            }
          },
          mom_nutrition_barriers: {
            title: "स्वतःच्या पोषणाची नियमित काळजी घेणे कोणत्या कारणांमुळे कठीण होते?",
            help: "लागू असलेले सर्व निवडा.",
            options: {
              forget_no_routine: { label: "विसरणे किंवा ठरलेला रूटीन नसणे" },
              product_taste: { label: "उपलब्ध उत्पादनांची चव" },
              too_expensive: { label: "खूप महाग" },
              not_available_near_home: { label: "घराजवळ सहज उपलब्ध नाही" },
              family_not_necessary: { label: "कुटुंबाला ते आवश्यक वाटत नाही" },
              no_difference: { label: "काही फरक जाणवला नाही" },
              too_many_medicines: { label: "आधीच खूप औषधे" },
              doctor_stopped_recommending: { label: "डॉक्टरांनी शिफारस करणे थांबवले" },
              not_prioritised: { label: "विशिष्ट कारण नाही - फक्त प्राधान्य दिले नाही" }
            }
          },
          mom_product_awareness: {
            title: "गर्भधारणा, स्तनपान किंवा मुलांसाठी कोणती पोषण पावडर किंवा सप्लीमेंट्स आपण ऐकले किंवा वापरले आहेत का?",
            options: {
              use_regularly: { label: "होय, मी नियमित वापरते" },
              used_before_not_currently: { label: "पूर्वी वापरले आहे, सध्या नाही" },
              heard_never_used: { label: "ऐकले आहे पण कधी वापरले नाही" },
              never_heard: { label: "नाही, मी याबद्दल कधीही ऐकले नाही" }
            }
          },
          mom_recommendation_source: {
            title: "या उत्पादनांबद्दल प्रथम कोणी सांगितले किंवा शिफारस केली?",
            options: {
              doctor_gynaecologist: { label: "डॉक्टर / स्त्रीरोगतज्ज्ञ" },
              family_member_mother_in_law: { label: "कुटुंब सदस्य / सासू" },
              friend_other_mother: { label: "मैत्रीण किंवा इतर आई" },
              social_media_influencer: { label: "सोशल मीडिया / इन्फ्लुएंसर" },
              pharmacy_medical_store: { label: "फार्मसी / मेडिकल स्टोअर कर्मचारी" },
              self_research: { label: "स्वतः माहिती शोधली" },
              asha_health_worker: { label: "ASHA / आरोग्य कर्मचारी" }
            }
          },
          mom_usage_frequency: {
            title: "आपण ही उत्पादने किती वेळा वापरता किंवा वापरत होता?",
            options: {
              daily_as_recommended: { label: "दररोज / सांगितल्याप्रमाणे" },
              few_times_week: { label: "आठवड्यातून काही वेळा" },
              occasionally_remember: { label: "कधीतरी / आठवले तेव्हा" },
              stopped_short_trial: { label: "थोड्या वापरानंतर बंद केले" }
            }
          },
          mom_product_dislikes: {
            title: "या उत्पादनांबद्दल आपल्याला काय नापसंत आहे किंवा काय कठीण वाटते?",
            help: "आपण फक्त एकदा वापरले असेल किंवा इतरांकडून तक्रारी ऐकल्या असतील तरीही उत्तर द्या.",
            options: {
              taste_flavour: { label: "चव / फ्लेवर" },
              aftertaste: { label: "नंतर राहणारी चव" },
              chalky_thick_texture: { label: "चॉकी किंवा घट्ट टेक्स्चर" },
              too_sweet: { label: "खूप गोड" },
              artificial_smell: { label: "कृत्रिम वास" },
              hard_to_mix_dissolve: { label: "मिसळणे / विरघळवणे कठीण" },
              heavy_on_stomach: { label: "पोटावर जड" },
              too_expensive: { label: "खूप महाग" },
              packaging_inconvenient: { label: "पॅकेजिंग गैरसोयीचे" },
              other: { label: "इतर" }
            }
          },
          mom_choice_factors: {
            title: "पोषण उत्पादन निवडताना सर्वात महत्त्वाचे काय असते?",
            help: "लागू असलेले सर्व निवडा. किमान 3 निवडा.",
            options: {
              doctor_recommendation: { label: "डॉक्टरांची शिफारस" },
              taste: { label: "चव" },
              price_affordability: { label: "किंमत / परवडणारी" },
              ingredient_quality: { label: "घटकांची गुणवत्ता" },
              brand_trust: { label: "ब्रँडवर विश्वास" },
              easy_digestion: { label: "सोपे पचन" },
              scientific_clinical_evidence: { label: "वैज्ञानिक / क्लिनिकल पुरावा" },
              fssai_who_certifications: { label: "FSSAI / WHO प्रमाणपत्रे" },
              family_elder_guidance: { label: "कुटुंबातील ज्येष्ठांचे मार्गदर्शन" },
              available_near_home: { label: "घराजवळ उपलब्ध" }
            }
          },
          mom_frustrating_aspect: {
            title: "आज उपलब्ध पोषण उत्पादने किंवा पोषण सल्ल्याबद्दल सर्वात त्रासदायक गोष्ट कोणती?",
            placeholder: "मुक्त उत्तर - आपली नेमकी अडचण आपल्या शब्दांत सांगा."
          },
          mom_missing_support: {
            title: "भारतामध्ये माता आणि मुलांसाठी कोणत्या प्रकारचा पोषण आधार अजूनही कमी आहे असे आपल्याला वाटते?",
            placeholder: "मुक्त उत्तर - कोणता आधार अजूनही कमी आहे ते सांगा."
          }
        }
      }
    }
  },
  gu: {
    roleQuestion: {
      eyebrow: "પ્રોફાઇલ સેટઅપ",
      title: "આમાંથી કયો વિકલ્પ તમને સૌથી સારી રીતે વર્ણવે છે?",
      help: "તમારો જવાબ અભ્યાસનો માર્ગ વ્યક્તિગત બનાવે છે અને પ્રશ્નોને ક્લિનિકલી સંબંધિત રાખે છે.",
      options: {
        gynaecologist: { label: "સ્ત્રીરોગ નિષ્ણાત" },
        pediatrician: { label: "બાળરોગ નિષ્ણાત" },
        mother: { label: "માતા/કાળજી લેનાર" }
      }
    },
    branches: {
      gynaecologist: {
        label: "સ્ત્રીરોગ નિષ્ણાત માર્ગ",
        shortLabel: "માતૃત્વ સંભાળની ક્લિનિકલ જાણકારી",
        audience: "સ્ત્રીરોગ નિષ્ણાત",
        impact: "તમારો ક્લિનિકલ દૃષ્ટિકોણ ભારતમાં માતૃત્વ પોષણ ખામીઓ, પાલનની અડચણો અને પુરાવા અંગેની અપેક્ષાઓ સમજવામાં મદદ કરે છે.",
        questions: {
          gyn_deficiencies: {
            title: "ગર્ભવતી અને સ્તનપાન કરાવતી મહિલાઓમાં તમે કઈ પોષણ ખામીઓ અથવા આહાર અંતર સૌથી સામાન્ય રીતે જુઓ છો?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              iron: { label: "આયર્ન / એનિમિયા" },
              protein: { label: "પ્રોટીનની ખામી" },
              calcium: { label: "કેલ્શિયમ" },
              vitamin_d: { label: "વિટામિન D" },
              vitamin_b12: { label: "વિટામિન B12" },
              folate: { label: "ફોલેટ" },
              iodine: { label: "આયોડિન" },
              dha_omega: { label: "DHA/Omega-3" },
              magnesium: { label: "મેગ્નેશિયમ" },
              zinc: { label: "ઝિંક" }
            }
          },
          gyn_challenge_stage: {
            title: "મહિલાઓમાં સૌથી વધુ પોષણ પડકારો તમે કયા તબક્કે જુઓ છો?",
            options: {
              preconception: { label: "ગર્ભધારણ પહેલાં" },
              first_trimester: { label: "પ્રથમ ત્રિમાસિક" },
              second_trimester: { label: "બીજું ત્રિમાસિક" },
              third_trimester: { label: "ત્રીજું ત્રિમાસિક" },
              lactation: { label: "સ્તનપાન અવધિ" },
              postpartum: { label: "પ્રસૂતિ પછીની પુનઃપ્રાપ્તિ" }
            }
          },
          gyn_gap_significance: {
            title: "તમારા મત પ્રમાણે ભારતીય મહિલાઓમાં હાલનું માતૃત્વ પોષણ અંતર કેટલું ગંભીર છે?",
            lowLabel: "ન્યૂનતમ અંતર",
            highLabel: "અત્યંત ગંભીર"
          },
          gyn_adequacy: {
            title: "હાલ ઉપલબ્ધ માતૃત્વ પોષણ ઉત્પાદનો દર્દીઓની જરૂરિયાતોને પૂરતી રીતે પૂરી કરે છે એવું તમને લાગે છે?",
            lowLabel: "બિલકુલ નહીં",
            highLabel: "સંપૂર્ણ રીતે"
          },
          gyn_discontinuation_reasons: {
            title: "દર્દીઓ માતૃત્વ પોષણ સપ્લિમેન્ટ્સ અથવા પાવડર લેવાનું સૌથી સામાન્ય કયા કારણોથી બંધ કરે છે?",
            help: "ત્રણ મુખ્ય કારણો પસંદ કરો.",
            options: {
              taste_texture: { label: "સ્વાદ અથવા ટેક્સ્ચર" },
              cost_expensive: { label: "ખર્ચ/ખૂબ મોંઘું" },
              forgot: { label: "લેવાનું ભૂલી જવું" },
              digestive_discomfort: { label: "પાચનની અસુવિધા (મિતલી/કબજિયાત)" },
              pill_burden: { label: "ઘણી ગોળીઓ લેવાની મુશ્કેલી" },
              no_effect: { label: "સ્પષ્ટ અસર ન દેખાવું" },
              family_preference: { label: "પરિવારની પસંદ/ઘરગથ્થુ ઉપાય" },
              sugar_content: { label: "વધુ ખાંડ" },
              availability: { label: "ઉપલબ્ધતાની સમસ્યા" }
            }
          },
          gyn_product_gaps_open: {
            title: "બજારમાં ઉપલબ્ધ માતૃત્વ પોષણ ઉત્પાદનોમાં હજુ કઈ ખામીઓ છે એવું તમને લાગે છે?",
            placeholder: "શું ખૂટે છે તે જણાવો, જેમ કે ખાસ પોષક તત્ત્વો, સાફ લેબલ્સ, સારા ફોર્મેટ્સ..."
          },
          gyn_recommendation_factors: {
            title: "માતૃત્વ પોષણ ઉત્પાદનની તમારી ભલામણને સૌથી વધુ કયા પરિબળો અસર કરે છે?",
            help: "ત્રણ પરિબળો પસંદ કરો.",
            options: {
              clinical_evidence: { label: "ક્લિનિકલ પુરાવા/અભ્યાસ" },
              brand_reputation: { label: "બ્રાન્ડ પ્રતિષ્ઠા/વિશ્વાસ" },
              affordability: { label: "દર્દીને પરવડે તેવી કિંમત" },
              tolerability: { label: "પચવામાં સરળતા/સહનશીલતા" },
              formulation: { label: "વૈજ્ઞાનિક ફોર્મ્યુલેશન" },
              sugar_free: { label: "શુગર-ફ્રી/ઓછી ખાંડ" },
              taste: { label: "સ્વાદ/સ્વીકાર્યતા" },
              availability: { label: "ઉપલબ્ધતા" }
            }
          },
          gyn_digestibility_importance: {
            title: "માતૃત્વ પોષણ ઉત્પાદનોમાં પચવામાં સરળતા અને ઉપયોગની સરળતા કેટલી મહત્વપૂર્ણ છે?",
            lowLabel: "હોય તો સારું",
            highLabel: "અત્યંત મહત્વનું પરિબળ"
          },
          gyn_compliance_formats: {
            title: "સામાન્ય રીતે કયા ફોર્મેટ્સ દર્દીઓના સારા નિયમિત ઉપયોગ સાથે જોડાયેલા હોય છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              powder_milk: { label: "પાવડર (દૂધ આધારિત)" },
              sachets: { label: "એક વખત વાપરવાના સેશે" },
              tablets: { label: "ટેબ્લેટ/કૅપ્સ્યુલ" },
              gummies: { label: "ગમીઝ" },
              rtd: { label: "રેડી-ટુ-ડ્રિંક પીણાં" }
            }
          },
          gyn_flavor_profiles: {
            title: "ગર્ભવતી અને સ્તનપાન કરાવતી મહિલાઓમાં કયા ફ્લેવર સામાન્ય રીતે વધુ સ્વીકારાય છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              chocolate: { label: "ચોકલેટ" },
              vanilla: { label: "વેનીલા" },
              kesar_elaichi: { label: "કેસર/એલચી" },
              fruit: { label: "ફળોના ફ્લેવર" },
              unflavored: { label: "બિનસ્વાદ/ન્યુટ્રલ" }
            }
          },
          gyn_sugar_relevance: {
            title: "આજે માતૃત્વ પોષણ ઉત્પાદનોમાં નિયંત્રિત અથવા ઓછી ખાંડ કેટલી સંબંધિત છે?",
            lowLabel: "ઓછી સંબંધિત",
            highLabel: "ખૂબ સંબંધિત"
          },
          gyn_price_range: {
            title: "માતૃત્વ પોષણ સહાય ઉત્પાદનો માટે સામાન્ય રીતે કઈ માસિક કિંમત સૌથી સ્વીકાર્ય છે?",
            options: {
              below_300: { label: "Rs. 300 થી ઓછી" },
              "300_600": { label: "Rs. 300 - Rs. 600" },
              "600_1000": { label: "Rs. 600 - Rs. 1000" },
              above_1000: { label: "Rs. 1000 થી વધુ" }
            }
          },
          gyn_affordability_influence: {
            title: "લાંબા સમય સુધી દર્દીના પાલન પર પરવડે તેવી કિંમત કેટલી અસર કરે છે?",
            lowLabel: "ન્યૂનતમ અસર",
            highLabel: "ખૂબ વધુ અસર"
          },
          gyn_certifications: {
            title: "ઉત્પાદન ભલામણ કરતી વખતે કયા પરિબળો અથવા પ્રમાણપત્રો તમારો વિશ્વાસ વધારે છે?",
            help: "ત્રણ સૂચકો પસંદ કરો.",
            options: {
              who_gmp: { label: "WHO-GMP પ્રમાણિત" },
              fssai: { label: "FSSAI લાઇસન્સ" },
              lab_tested: { label: "થર્ડ-પાર્ટી લેબ ટેસ્ટેડ" },
              clinical_validation: { label: "ક્લિનિકલ માન્યતા" },
              iso: { label: "ISO પ્રમાણિત" },
              veg_mark: { label: "શાકાહારી / વીગન માર્ક" }
            }
          },
          gyn_innovations: {
            title: "ભવિષ્યના માતૃત્વ પોષણ ઉત્પાદનોમાં તમે કયા સુધારા અથવા નવીનતા સૌથી વધુ જોવા માંગશો?",
            placeholder: "વધુ સારી માતૃત્વ સંભાળ માટે તમારો વિચાર શેર કરો..."
          }
        }
      },
      pediatrician: {
        label: "બાળરોગ નિષ્ણાત માર્ગ",
        shortLabel: "બાળ વિકાસ અંગેની જાણકારી",
        audience: "બાળરોગ નિષ્ણાત",
        impact: "તમારા પ્રતિસાદ ભારતમાં બાળરોગ સંભાળમાં વૃદ્ધિ, રોગપ્રતિકારક શક્તિ, ખાવાની વર્તણૂક અને સપ્લિમેન્ટ જરૂરિયાતો અંગે પુરાવા મજબૂત કરે છે.",
        questions: {
          ped_growth_concerns: {
            title: "બાળકોમાં વૃદ્ધિ અથવા પોષણ અંગે કઈ ચિંતાઓ તમે સૌથી વધુ જુઓ છો?",
            help: "તમારી ટોચની 5 ચિંતાઓ પસંદ કરો.",
            options: {
              weight_gain: { label: "વજન યોગ્ય રીતે ન વધવું" },
              stunting: { label: "ઊંચાઈ ઓછી રહેવી (ઉંમર પ્રમાણે)" },
              immunity: { label: "ઓછી રોગપ્રતિકારક શક્તિ / ચેપ" },
              cognitive: { label: "જ્ઞાનાત્મક / મગજ વિકાસ" },
              appetite: { label: "ભૂખ ઓછી" },
              deficiency: { label: "માઇક્રોન્યુટ્રિયન્ટ ખામીઓ" },
              gut: { label: "આંતરડાનું આરોગ્ય / કબજિયાત" },
              picky_eating: { label: "પસંદગીવાળું ખાવાનું વર્તન" },
              anemia: { label: "એનિમિયા" }
            }
          },
          ped_greatest_gap_age: {
            title: "હાલમાં કયા વય જૂથમાં સૌથી મોટું પોષણ અંતર છે એવું તમને લાગે છે?",
            options: {
              "0_6m": { label: "0-6 મહિના" },
              "6_12m": { label: "6-12 મહિના" },
              "1_3y": { label: "1-3 વર્ષ (ટોડલર્સ)" },
              "4_6y": { label: "4-6 વર્ષ (પ્રીસ્કૂલ)" },
              "7_12y": { label: "7-12 વર્ષ (શાળા વય)" }
            }
          },
          ped_gap_significance: {
            title: "તમારા મત મુજબ આજે ભારતીય બાળકોમાં પોષણ અંતર કેટલું મહત્વપૂર્ણ છે?",
            lowLabel: "ન્યૂનતમ",
            highLabel: "ખૂબ મહત્વપૂર્ણ"
          },
          ped_inadequate_reasons: {
            title: "બાળકોને પૂરતું પોષણ ન મળવાના સૌથી સામાન્ય કારણો શું છે?",
            help: "ત્રણ કારણો પસંદ કરો.",
            options: {
              picky_eating: { label: "પસંદગીવાળું ખાવું / ખોરાક નકારવો" },
              awareness: { label: "માતાપિતામાં જાગૃતિનો અભાવ" },
              affordability: { label: "ગુણવત્તાવાળા ખોરાકનો ખર્ચ" },
              busy_parents: { label: "માતાપિતાની વ્યસ્ત જીવનશૈલી" },
              junk_food: { label: "ઉપલબ્ધ નાસ્તાની નબળી ગુણવત્તા" },
              digestion: { label: "પાચન સમસ્યાઓ" }
            }
          },
          ped_discontinuation_reasons: {
            title: "માતાપિતા શિશુ અથવા બાળ પોષણ ઉત્પાદનો મધ્યમાં સૌથી વધુ કયા કારણોથી બંધ કરે છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              taste_refusal: { label: "બાળક સ્વાદ સ્વીકારતું નથી" },
              cost: { label: "ખર્ચની સમસ્યા" },
              forget: { label: "ભૂલી જવું" },
              digestion: { label: "પાચન સંબંધિત અસર" },
              no_results: { label: "વિકાસમાં સ્પષ્ટ પરિણામ નહીં" },
              home_food: { label: "ઘરના ખોરાક તરફ વળવું" }
            }
          },
          ped_adequacy: {
            title: "હાલ ઉપલબ્ધ શિશુ અને બાળ પોષણ ઉત્પાદનો પોષણ જરૂરિયાતોને પૂરતી રીતે પૂરી કરે છે એવું તમને લાગે છે?",
            lowLabel: "બિલકુલ નહીં",
            highLabel: "સંપૂર્ણ રીતે"
          },
          ped_product_gaps_open: {
            title: "બજારમાં ઉપલબ્ધ બાળ પોષણ ઉત્પાદનોમાં હાલમાં તમને સૌથી મોટી ખામીઓ કઈ દેખાય છે?",
            placeholder: "સ્ક્રીનિંગ, ફોર્મ્યુલેશન, માતાપિતા શિક્ષણ અથવા ઉપલબ્ધતાની ખામીઓ શેર કરો..."
          },
          ped_recommendation_factors: {
            title: "બાળ પોષણ ઉત્પાદનોની તમારી ભલામણને કયા પરિબળો સૌથી વધુ અસર કરે છે?",
            help: "ત્રણ પરિબળો પસંદ કરો.",
            options: {
              clinical: { label: "ક્લિનિકલ અભ્યાસ" },
              sugar: { label: "ખાંડનું પ્રમાણ" },
              cost: { label: "પરવડે તેવી કિંમત" },
              taste: { label: "સ્વાદ/સ્વીકાર્યતા" },
              brand: { label: "બ્રાન્ડ વિશ્વાસ" },
              natural: { label: "કુદરતી ઘટકો" }
            }
          },
          ped_taste_importance: {
            title: "બાળકોમાં લાંબા સમય સુધી પાલન માટે સ્વાદ અને ઉપયોગની સરળતા કેટલી મહત્વપૂર્ણ છે?",
            lowLabel: "બહુ નહીં",
            highLabel: "અત્યંત મહત્વપૂર્ણ"
          },
          ped_affordability_influence: {
            title: "બાળ પોષણ ઉત્પાદનોના લાંબા સમયના ઉપયોગ પર પરવડે તેવી કિંમત કેટલી અસર કરે છે?",
            lowLabel: "નબળી રીતે",
            highLabel: "ખૂબ મજબૂત રીતે"
          },
          ped_purchase_channels: {
            title: "બાળ પોષણ ઉત્પાદનો ખરીદવા માટે માતાપિતા સૌથી વધુ કયા ચેનલોનો ઉપયોગ કરે છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              pharmacy: { label: "સ્થાનિક ફાર્મસી / કેમિસ્ટ" },
              online: { label: "ઓનલાઇન (Amazon/FirstCry/BigBasket)" },
              supermarket: { label: "સુપરમાર્કેટ" },
              clinic: { label: "સીધા ક્લિનિકથી" }
            }
          },
          ped_confidence_factors: {
            title: "નવું બાળ પોષણ ઉત્પાદન ભલામણ કરતી વખતે તમારો વિશ્વાસ કશાથી વધે છે?",
            help: "ત્રણ પરિબળો પસંદ કરો.",
            options: {
              evidence: { label: "પુરાવા આધારિત ફોર્મ્યુલા" },
              clean_label: { label: "ક્લીન લેબલ્સ (કોઈ એડિટિવ નહીં)" },
              compliance: { label: "FSSAI/GMP પાલન" },
              feedback: { label: "સકારાત્મક દર્દી પ્રતિસાદ" },
              affordability: { label: "સામાન્ય લોકો માટે પરવડે તેવી કિંમત" }
            }
          },
          ped_innovations: {
            title: "ભવિષ્યના શિશુ અને બાળ પોષણ ઉત્પાદનોમાં તમે કયા સુધારા અથવા નવીનતા સૌથી વધુ જોવા માંગશો?",
            placeholder: "જેમ કે નવા ફોર્મેટ્સ, ઓછી ખાંડ, લક્ષિત પોષક તત્ત્વો..."
          }
        }
      },
      mother: {
        label: "માતા/કાળજી લેનાર માર્ગ",
        shortLabel: "માતૃત્વ પોષણ અને આરોગ્ય",
        audience: "માતા/કાળજી લેનાર",
        impact: "તમારો અનુભવ ભારતીય પરિવારોને સૌથી વધુ શું જોઈએ છે તે સમજવામાં મદદ કરે છે: સુલભ સલાહ, વિશ્વાસપાત્ર ઉત્પાદનો અને દૈનિક જીવનમાં ફિટ થતું પોષણ માર્ગદર્શન.",
        questions: {
          mom_age_group: {
            title: "વય જૂથ",
            options: {
              "18_25": { label: "18-25" },
              "26_30": { label: "26-30" },
              "31_35": { label: "31-35" },
              "36_40": { label: "36-40" },
              "41_plus": { label: "41+" }
            }
          },
          mom_relationship: {
            title: "હાલમાં આમાંથી કયો વિકલ્પ તમને સૌથી સારી રીતે વર્ણવે છે?",
            options: {
              planning_pregnancy: { label: "ગર્ભધારણની યોજના બનાવી રહી છું" },
              currently_pregnant: { label: "હાલમાં ગર્ભવતી" },
              new_mother_0_6m: { label: "નવી માતા (પ્રસૂતિ પછી 0-6 મહિના)" },
              mother_child_6m_3y: { label: "નાના બાળકની માતા (6 મહિના-3 વર્ષ)" },
              caregiver_family: { label: "કાળજી લેનાર / પરિવાર સભ્ય" }
            }
          },
          mom_owns_car: {
            title: "શું તમારા ઘરે કાર છે?",
            options: {
              yes: { label: "હા" },
              no: { label: "ના" }
            }
          },
          mom_health_concerns: {
            title: "ગર્ભાવસ્થા અથવા માતૃત્વ દરમિયાન તમે કઈ સૌથી મોટી આરોગ્ય અથવા પોષણ ચિંતાઓનો સામનો કર્યો છે?",
            help: "તમારી ટોચની 3 ચિંતાઓ પસંદ કરો - જે તમને સૌથી વધુ પરેશાન કરે છે.",
            options: {
              weakness_fatigue: { label: "નબળાઈ / થાક" },
              low_iron_haemoglobin: { label: "ઓછું આયર્ન અથવા હિમોગ્લોબિન" },
              poor_appetite: { label: "ભૂખ ઓછી" },
              digestive_discomfort_bloating: { label: "પાચનની અસુવિધા / પેટ ફૂલવું" },
              low_milk_production: { label: "દૂધ ઓછું બનવું" },
              balanced_diet_difficulty: { label: "સંતુલિત આહાર લેવો મુશ્કેલ" },
              child_not_eating: { label: "બાળક યોગ્ય રીતે ખાતું નથી" },
              child_weakness_low_weight: { label: "બાળકમાં નબળાઈ અથવા ઓછું વજન" },
              lack_clear_guidance: { label: "શું ખાવું તેની સ્પષ્ટ સલાહ નથી" },
              products_too_expensive: { label: "પોષણ ઉત્પાદનો ખૂબ મોંઘા છે" },
              confused_what_to_consume: { label: "શું લેવું તે અંગે ગૂંચવણ" }
            }
          },
          mom_guidance_sources: {
            title: "ગર્ભાવસ્થા દરમિયાન અથવા તમારા બાળક માટે શું ખાવું તેની સલાહ તમે સામાન્ય રીતે ક્યાંથી લો છો?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              doctor_gynaecologist: { label: "ડોક્ટર / સ્ત્રીરોગ નિષ્ણાત" },
              family_elders_mother_in_law: { label: "પરિવારના વડીલો / સાસુ" },
              friends_other_mothers: { label: "મિત્રો અથવા અન્ય માતાઓ" },
              social_media: { label: "સોશિયલ મીડિયા (Instagram, YouTube)" },
              whatsapp_community: { label: "WhatsApp ગ્રુપ / સમુદાય" },
              google_chatgpt: { label: "ગુગલ / ChatGPT" },
              tv_print_media: { label: "ટીવી અથવા પ્રિન્ટ મીડિયા" },
              medical_apps_websites: { label: "મેડિકલ એપ્સ અથવા વેબસાઇટ્સ" }
            }
          },
          mom_benefits_priority: {
            title: "હાલમાં તમારા માટે કયા પોષણ લાભો સૌથી મહત્વપૂર્ણ છે?",
            help: "તમને વ્યક્તિગત રીતે સૌથી મહત્વપૂર્ણ લાગતા વિકલ્પો પસંદ કરો.",
            options: {
              energy_reducing_fatigue: { label: "ઊર્જા / થાક ઘટાડવો" },
              protein_intake: { label: "પ્રોટીન સેવન" },
              fetal_baby_development: { label: "ગર્ભસ્થ બાળક / બાળકનો વિકાસ" },
              brain_development: { label: "મગજ વિકાસ (DHA, choline)" },
              bone_strength: { label: "હાડકાંની મજબૂતી (કેલ્શિયમ, વિટામિન D)" },
              better_digestion: { label: "સારું પાચન" },
              improved_immunity: { label: "સારી રોગપ્રતિકારક શક્તિ" },
              better_milk_production: { label: "દૂધ ઉત્પાદન સુધારવું (સ્તનપાન)" },
              reducing_weakness_anaemia: { label: "નબળાઈ / એનિમિયા ઘટાડવું" },
              weight_management: { label: "વજન વ્યવસ્થાપન" },
              better_child_growth: { label: "બાળકની સારી વૃદ્ધિ" }
            }
          },
          mom_nutrition_barriers: {
            title: "તમારા પોતાના પોષણની નિયમિત કાળજી લેવી કયા કારણોથી મુશ્કેલ બને છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો.",
            options: {
              forget_no_routine: { label: "ભૂલી જવું અથવા નક્કી રૂટિન ન હોવું" },
              product_taste: { label: "ઉપલબ્ધ ઉત્પાદનોનો સ્વાદ" },
              too_expensive: { label: "ખૂબ મોંઘું" },
              not_available_near_home: { label: "ઘર પાસે સરળતાથી ઉપલબ્ધ નથી" },
              family_not_necessary: { label: "પરિવારને તે જરૂરી લાગતું નથી" },
              no_difference: { label: "કોઈ ફેરફાર લાગ્યો નહીં" },
              too_many_medicines: { label: "પહેલેથી ઘણી દવાઓ" },
              doctor_stopped_recommending: { label: "ડોક્ટરે ભલામણ કરવાનું બંધ કર્યું" },
              not_prioritised: { label: "કોઈ ખાસ કારણ નહીં - ફક્ત પ્રાથમિકતા આપી નથી" }
            }
          },
          mom_product_awareness: {
            title: "શું તમે ગર્ભાવસ્થા, સ્તનપાન અથવા બાળકો માટે કોઈ પોષણ પાવડર અથવા સપ્લિમેન્ટ્સ વિશે સાંભળ્યું અથવા વાપર્યું છે?",
            options: {
              use_regularly: { label: "હા, હું નિયમિત વાપરું છું" },
              used_before_not_currently: { label: "પહેલાં વાપર્યું છે, હાલમાં નહીં" },
              heard_never_used: { label: "સાંભળ્યું છે પણ ક્યારેય વાપર્યું નથી" },
              never_heard: { label: "ના, મેં આ વિશે ક્યારેય સાંભળ્યું નથી" }
            }
          },
          mom_recommendation_source: {
            title: "આ ઉત્પાદનો વિશે તમને સૌથી પહેલાં કોણે કહ્યું અથવા ભલામણ કરી?",
            options: {
              doctor_gynaecologist: { label: "ડોક્ટર / સ્ત્રીરોગ નિષ્ણાત" },
              family_member_mother_in_law: { label: "પરિવાર સભ્ય / સાસુ" },
              friend_other_mother: { label: "મિત્ર અથવા અન્ય માતા" },
              social_media_influencer: { label: "સોશિયલ મીડિયા / ઇન્ફ્લુએન્સર" },
              pharmacy_medical_store: { label: "ફાર્મસી / મેડિકલ સ્ટોર સ્ટાફ" },
              self_research: { label: "પોતે શોધખોળ કરી" },
              asha_health_worker: { label: "ASHA / આરોગ્ય કાર્યકર" }
            }
          },
          mom_usage_frequency: {
            title: "તમે આ ઉત્પાદનો કેટલી વાર વાપરો છો અથવા વાપરતા હતા?",
            options: {
              daily_as_recommended: { label: "દૈનિક / ભલામણ મુજબ" },
              few_times_week: { label: "અઠવાડિયામાં થોડા વખત" },
              occasionally_remember: { label: "ક્યારેક / યાદ આવે ત્યારે" },
              stopped_short_trial: { label: "થોડા સમયના ટ્રાયલ પછી બંધ કર્યું" }
            }
          },
          mom_product_dislikes: {
            title: "આ ઉત્પાદનોમાં તમને શું નાપસંદ છે અથવા શું મુશ્કેલ લાગે છે?",
            help: "તમે ફક્ત એકવાર વાપર્યું હોય અથવા અન્ય લોકોની ફરિયાદ સાંભળી હોય તો પણ જવાબ આપો.",
            options: {
              taste_flavour: { label: "સ્વાદ / ફ્લેવર" },
              aftertaste: { label: "પછી રહેતો સ્વાદ" },
              chalky_thick_texture: { label: "ચોકી અથવા જાડું ટેક્સ્ચર" },
              too_sweet: { label: "ખૂબ મીઠું" },
              artificial_smell: { label: "કૃત્રિમ સુગંધ" },
              hard_to_mix_dissolve: { label: "મિશ્રિત / ઓગાળવું મુશ્કેલ" },
              heavy_on_stomach: { label: "પેટ પર ભારે" },
              too_expensive: { label: "ખૂબ મોંઘું" },
              packaging_inconvenient: { label: "પેકેજિંગ અસુવિધાજનક" },
              other: { label: "અન્ય" }
            }
          },
          mom_choice_factors: {
            title: "પોષણ ઉત્પાદન પસંદ કરતી વખતે સૌથી મહત્વનું શું છે?",
            help: "લાગુ પડે તે બધા પસંદ કરો. ઓછામાં ઓછા 3 પસંદ કરો.",
            options: {
              doctor_recommendation: { label: "ડોક્ટરની ભલામણ" },
              taste: { label: "સ્વાદ" },
              price_affordability: { label: "કિંમત / પરવડે તેવી" },
              ingredient_quality: { label: "ઘટકોની ગુણવત્તા" },
              brand_trust: { label: "બ્રાન્ડ વિશ્વાસ" },
              easy_digestion: { label: "સરળ પાચન" },
              scientific_clinical_evidence: { label: "વૈજ્ઞાનિક / ક્લિનિકલ પુરાવા" },
              fssai_who_certifications: { label: "FSSAI / WHO પ્રમાણપત્રો" },
              family_elder_guidance: { label: "પરિવારના વડીલનું માર્ગદર્શન" },
              available_near_home: { label: "ઘર પાસે ઉપલબ્ધ" }
            }
          },
          mom_frustrating_aspect: {
            title: "આજે ઉપલબ્ધ પોષણ ઉત્પાદનો અથવા પોષણ સલાહ વિશે સૌથી નિરાશાજનક બાબત શું છે?",
            placeholder: "મુક્ત જવાબ - તમારી ચોક્કસ અડચણ તમારા શબ્દોમાં જણાવો."
          },
          mom_missing_support: {
            title: "ભારતમાં માતાઓ અને બાળકો માટે કયા પ્રકારનું પોષણ સહાય હજુ પણ ખૂટે છે એવું તમને લાગે છે?",
            placeholder: "મુક્ત જવાબ - કઈ સહાય હજુ ખૂટે છે તે જણાવો."
          }
        }
      }
    }
  }
};

export function normalizeLanguage(language) {
  return languageOptions.some((option) => option.code === language) ? language : DEFAULT_LANGUAGE;
}

export function getLanguageMeta(language) {
  return languageOptions.find((option) => option.code === normalizeLanguage(language)) || languageOptions[0];
}

export function getCopy(language) {
  return uiCopy[normalizeLanguage(language)] || uiCopy.en;
}

function applyQuestionCopy(question, questionCopy = {}) {
  const { options, ...questionFields } = questionCopy;
  return {
    ...question,
    ...questionFields,
    options: question.options?.map((option) => ({
      ...option,
      ...(options?.[option.value] || {})
    }))
  };
}

function applyBranchCopy(branch, branchCopy = {}) {
  const { questions, ...branchFields } = branchCopy;
  return {
    ...branch,
    ...branchFields,
    questions: branch.questions.map((question) => applyQuestionCopy(question, questions?.[question.id]))
  };
}

export function getLocalizedSurvey(language) {
  const normalizedLanguage = normalizeLanguage(language);
  const translation = surveyTranslations[normalizedLanguage];

  if (!translation) {
    return {
      roleQuestion: sourceRoleQuestion,
      branches: sourceBranches
    };
  }

  return {
    roleQuestion: applyQuestionCopy(sourceRoleQuestion, translation.roleQuestion),
    branches: Object.fromEntries(
      Object.entries(sourceBranches).map(([branchKey, branch]) => [
        branchKey,
        applyBranchCopy(branch, translation.branches?.[branchKey])
      ])
    )
  };
}
