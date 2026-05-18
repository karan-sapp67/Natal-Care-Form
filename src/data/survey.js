export const roleQuestion = {
  id: "respondent_role",
  type: "role",
  eyebrow: "Profile setup",
  title: "Which best describes you?",
  help: "Your response personalizes the study path and keeps the questions clinically relevant.",
  options: [
    { label: "Gynaecologist", value: "gynaecologist", icon: "stethoscope" },
    { label: "Pediatrician", value: "pediatrician", icon: "baby" },
    { label: "Mother/Caregiver", value: "mother", icon: "heartHandshake" }
  ]
};

const baseBranches = {
  gynaecologist: {
    label: "Gynaecologist Path",
    shortLabel: "Clinical maternal care",
    audience: "Gynaecologist",
    impact: "Your clinical perspective helps map real-world maternal nutrition gaps, adherence barriers, and evidence expectations across Indian practice settings.",
    questions: [
      {
        id: "gyn_deficiencies",
        type: "multi",
        eyebrow: "Question 1 of 15",
        title: "What are the most common nutritional deficiencies or dietary gaps you observe in pregnant and lactating women?",
        help: "Select all that apply.",
        options: [
          { label: "Iron / Anemia", value: "iron", icon: "droplets" },
          { label: "Protein gap", value: "protein", icon: "wheat" },
          { label: "Calcium", value: "calcium", icon: "bone" },
          { label: "Vitamin D", value: "vitamin_d", icon: "sun" },
          { label: "Vitamin B12", value: "vitamin_b12", icon: "badgePlus" },
          { label: "Folate", value: "folate", icon: "leaf" },
          { label: "Iodine", value: "iodine", icon: "flaskConical" },
          { label: "DHA/Omega-3", value: "dha_omega", icon: "brain" },
          { label: "Magnesium", value: "magnesium", icon: "zap" },
          { label: "Zinc", value: "zinc", icon: "shieldPlus" }
        ]
      },
      {
        id: "gyn_challenge_stage",
        type: "single",
        eyebrow: "Question 2 of 15",
        title: "At which stage do you observe the greatest nutritional challenges in women?",
        options: [
          { label: "Preconception", value: "preconception", icon: "calendarHeart" },
          { label: "First Trimester", value: "first_trimester", icon: "circleDot" },
          { label: "Second Trimester", value: "second_trimester", icon: "activity" },
          { label: "Third Trimester", value: "third_trimester", icon: "heartPulse" },
          { label: "Lactation / Breastfeeding", value: "lactation", icon: "milk" },
          { label: "Postpartum Recovery", value: "postpartum", icon: "sparkles" }
        ]
      },
      {
        id: "gyn_gap_significance",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 3 of 15",
        title: "How significant do you believe the maternal nutrition gap currently is among Indian women?",
        lowLabel: "Minimal gap",
        highLabel: "Extremely significant"
      },
      {
        id: "gyn_adequacy",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 4 of 15",
        title: "Do you feel currently available maternal nutrition products adequately address patient needs?",
        lowLabel: "Not at all",
        highLabel: "Completely"
      },
      {
        id: "gyn_discontinuation_reasons",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 5 of 15",
        title: "What are the most common reasons patients discontinue maternal nutrition supplements or powders?",
        help: "Select exactly three primary reasons.",
        options: [
          { label: "Taste or texture", value: "taste_texture", icon: "smilePlus" },
          { label: "Cost/Too expensive", value: "cost_expensive", icon: "indianRupee" },
          { label: "Forgot to take them", value: "forgot", icon: "clock3" },
          { label: "Digestive discomfort (nausea/constipation)", value: "digestive_discomfort", icon: "stomach" },
          { label: "Pill burden (too many tablets)", value: "pill_burden", icon: "pill" },
          { label: "No noticeable effect", value: "no_effect", icon: "eyeOff" },
          { label: "Family preference/Home remedies", value: "family_preference", icon: "home" },
          { label: "High sugar content", value: "sugar_content", icon: "candy" },
          { label: "Availability issues", value: "availability", icon: "packageX" }
        ]
      },
      {
        id: "gyn_product_gaps_open",
        type: "textarea",
        eyebrow: "Question 6 of 15",
        title: "What gaps do you feel still exist in maternal nutrition products currently available in the market?",
        placeholder: "Share your thoughts on what's missing (e.g., specific nutrients, cleaner labels, better formats)...",
        maxLength: 420
      },
      {
        id: "gyn_recommendation_factors",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 7 of 15",
        title: "What factors influence your recommendation of a maternal nutrition product the most?",
        help: "Select exactly three factors.",
        options: [
          { label: "Clinical evidence/studies", value: "clinical_evidence", icon: "clipboardCheck" },
          { label: "Brand reputation/trust", value: "brand_reputation", icon: "medal" },
          { label: "Patient affordability", value: "affordability", icon: "indianRupee" },
          { label: "Digestibility/Tolerability", value: "tolerability", icon: "stomach" },
          { label: "Scientific formulation", value: "formulation", icon: "flaskConical" },
          { label: "Sugar-free/Low sugar", value: "sugar_free", icon: "candyOff" },
          { label: "Taste/Palatability", value: "taste", icon: "smile" },
          { label: "Availability", value: "availability", icon: "mapPin" }
        ]
      },
      {
        id: "gyn_digestibility_importance",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 8 of 15",
        title: "How important is digestibility and ease of consumption in maternal nutrition products?",
        lowLabel: "Nice to have",
        highLabel: "Critical factor"
      },
      {
        id: "gyn_compliance_formats",
        type: "multi",
        layout: "icon-grid",
        eyebrow: "Question 9 of 15",
        title: "Which formats are generally associated with better patient compliance?",
        help: "Select all that apply.",
        options: [
          { label: "Powder (Milk-based)", value: "powder_milk", icon: "packageOpen" },
          { label: "Single-use Sachets", value: "sachets", icon: "panelTop" },
          { label: "Tablets/Capsules", value: "tablets", icon: "pill" },
          { label: "Gummies", value: "gummies", icon: "candy" },
          { label: "Ready-to-drink liquids", value: "rtd", icon: "glassWater" }
        ]
      },
      {
        id: "gyn_flavor_profiles",
        type: "multi",
        eyebrow: "Question 10 of 15",
        title: "What flavour profiles are generally better accepted among pregnant and lactating women?",
        help: "Select all that apply.",
        options: [
          { label: "Chocolate", value: "chocolate", icon: "candy" },
          { label: "Vanilla", value: "vanilla", icon: "sparkles" },
          { label: "Kesar/Elaichi", value: "kesar_elaichi", icon: "leaf" },
          { label: "Fruit flavors", value: "fruit", icon: "apple" },
          { label: "Unflavored/Neutral", value: "unflavored", icon: "circle" }
        ]
      },
      {
        id: "gyn_sugar_relevance",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 11 of 15",
        title: "How relevant is controlled or reduced sugar content in maternal nutrition products today?",
        lowLabel: "Low relevance",
        highLabel: "High relevance"
      },
      {
        id: "gyn_price_range",
        type: "single",
        eyebrow: "Question 12 of 15",
        title: "What monthly price range is generally most acceptable for maternal nutrition support products?",
        options: [
          { label: "Below ₹300", value: "below_300", icon: "indianRupee" },
          { label: "₹300 - ₹600", value: "300_600", icon: "indianRupee" },
          { label: "₹600 - ₹1000", value: "600_1000", icon: "indianRupee" },
          { label: "Above ₹1000", value: "above_1000", icon: "indianRupee" }
        ]
      },
      {
        id: "gyn_affordability_influence",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 13 of 15",
        title: "How much does affordability influence long-term patient compliance?",
        lowLabel: "Minimal influence",
        highLabel: "Very high influence"
      },
      {
        id: "gyn_certifications",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 14 of 15",
        title: "What factors or certifications increase your confidence in recommending a product?",
        help: "Select exactly three markers.",
        options: [
          { label: "WHO-GMP Certified", value: "who_gmp", icon: "shieldCheck" },
          { label: "FSSAI License", value: "fssai", icon: "badgeCheck" },
          { label: "Third-party lab tested", value: "lab_tested", icon: "flaskConical" },
          { label: "Clinical validation", value: "clinical_validation", icon: "clipboardCheck" },
          { label: "ISO Certified", value: "iso", icon: "factory" },
          { label: "Vegetarian / Vegan mark", value: "veg_mark", icon: "leaf" }
        ]
      },
      {
        id: "gyn_innovations",
        type: "textarea",
        eyebrow: "Question 15 of 15",
        title: "What improvements or innovations would you most like to see in future maternal nutrition products?",
        placeholder: "Share your vision for better maternal care solutions...",
        maxLength: 420
      }
    ]
  },
  pediatrician: {
    label: "Pediatrician Path",
    shortLabel: "Pediatric growth insights",
    audience: "Pediatrician",
    impact: "Your responses strengthen evidence around child growth, immunity, feeding behavior, and supplementation needs across Indian pediatric care.",
    questions: [
      {
        id: "ped_growth_concerns",
        type: "top-n",
        max: 5,
        eyebrow: "Question 1 of 13",
        title: "Which pediatric growth or nutrition concerns do you see most often?",
        help: "Choose your Top 5 concerns.",
        options: [
          { label: "Poor weight gain", value: "weight_gain", icon: "trendingDown" },
          { label: "Stunting (Height for age)", value: "stunting", icon: "ruler" },
          { label: "Low immunity / Infections", value: "immunity", icon: "shieldPlus" },
          { label: "Cognitive / Brain development", value: "cognitive", icon: "brain" },
          { label: "Poor appetite", value: "appetite", icon: "utensils" },
          { label: "Micronutrient deficiencies", value: "deficiency", icon: "badgePlus" },
          { label: "Gut health / Constipation", value: "gut", icon: "stomach" },
          { label: "Picky eating behavior", value: "picky_eating", icon: "frown" },
          { label: "Anemia", value: "anemia", icon: "droplets" }
        ]
      },
      {
        id: "ped_greatest_gap_age",
        type: "single",
        eyebrow: "Question 2 of 13",
        title: "Which age group do you believe currently faces the greatest nutritional gap?",
        options: [
          { label: "0-6 months", value: "0_6m", icon: "baby" },
          { label: "6-12 months", value: "6_12m", icon: "milk" },
          { label: "1-3 years (Toddlers)", value: "1_3y", icon: "footprints" },
          { label: "4-6 years (Preschool)", value: "4_6y", icon: "blocks" },
          { label: "7-12 years (School age)", value: "7_12y", icon: "school" }
        ]
      },
      {
        id: "ped_gap_significance",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 3 of 13",
        title: "How significant do you believe the nutritional gap is among Indian children today?",
        lowLabel: "Minimal",
        highLabel: "Very significant"
      },
      {
        id: "ped_inadequate_reasons",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 4 of 13",
        title: "What are the most common reasons children fail to receive adequate nutrition?",
        help: "Select exactly three reasons.",
        options: [
          { label: "Picky eating / Food refusal", value: "picky_eating", icon: "frown" },
          { label: "Lack of parental awareness", value: "awareness", icon: "bookOpen" },
          { label: "Affordability of quality food", value: "affordability", icon: "indianRupee" },
          { label: "Busy lifestyle of parents", value: "busy_parents", icon: "clock" },
          { label: "Poor quality of available snacks", value: "junk_food", icon: "utensils" },
          { label: "Digestive issues", value: "digestion", icon: "stomach" }
        ]
      },
      {
        id: "ped_discontinuation_reasons",
        type: "multi",
        eyebrow: "Question 5 of 13",
        title: "What are the most common reasons parents discontinue infant or child nutrition products midway?",
        help: "Select all that apply.",
        options: [
          { label: "Child refuses taste", value: "taste_refusal", icon: "frown" },
          { label: "Cost issues", value: "cost", icon: "indianRupee" },
          { label: "Forgetfulness", value: "forget", icon: "clock3" },
          { label: "Digestive side effects", value: "digestion", icon: "stomach" },
          { label: "No visible growth results", value: "no_results", icon: "trendingDown" },
          { label: "Switching to home food", value: "home_food", icon: "home" }
        ]
      },
      {
        id: "ped_adequacy",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 6 of 13",
        title: "Do you feel currently available infant and child nutrition products adequately address nutritional needs?",
        lowLabel: "Not at all",
        highLabel: "Completely"
      },
      {
        id: "ped_product_gaps_open",
        type: "textarea",
        eyebrow: "Question 7 of 13",
        title: "What are the biggest gaps you currently see in pediatric nutrition products available in the market?",
        placeholder: "Share gaps in Screening, Formulations, Parent education, or Access...",
        maxLength: 420
      },
      {
        id: "ped_recommendation_factors",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 8 of 13",
        title: "What factors most influence your recommendation of pediatric nutrition products?",
        help: "Select exactly three factors.",
        options: [
          { label: "Clinical studies", value: "clinical", icon: "clipboardCheck" },
          { label: "Sugar content", value: "sugar", icon: "candy" },
          { label: "Affordability", value: "cost", icon: "indianRupee" },
          { label: "Taste/Acceptability", value: "taste", icon: "smile" },
          { label: "Brand trust", value: "brand", icon: "medal" },
          { label: "Natural ingredients", value: "natural", icon: "leaf" }
        ]
      },
      {
        id: "ped_taste_importance",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 9 of 13",
        title: "How important is taste and ease of consumption in long-term compliance among children?",
        lowLabel: "Not very",
        highLabel: "Extremely important"
      },
      {
        id: "ped_affordability_influence",
        type: "scale",
        min: 1,
        max: 5,
        eyebrow: "Question 10 of 13",
        title: "How strongly does affordability affect long-term usage of pediatric nutrition products?",
        lowLabel: "Weakly",
        highLabel: "Very strongly"
      },
      {
        id: "ped_purchase_channels",
        type: "multi",
        eyebrow: "Question 11 of 13",
        title: "Which purchasing channels are most commonly used by parents for child nutrition products?",
        help: "Select all that apply.",
        options: [
          { label: "Local Pharmacy / Chemist", value: "pharmacy", icon: "store" },
          { label: "Online (Amazon/FirstCry/BigBasket)", value: "online", icon: "globe2" },
          { label: "Supermarkets", value: "supermarket", icon: "building2" },
          { label: "Directly from clinic", value: "clinic", icon: "hospital" }
        ]
      },
      {
        id: "ped_confidence_factors",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 12 of 13",
        title: "What increases your confidence in recommending a new pediatric nutrition product?",
        help: "Select exactly three factors.",
        options: [
          { label: "Evidence-based formula", value: "evidence", icon: "flaskConical" },
          { label: "Clean labels (No additives)", value: "clean_label", icon: "sparkles" },
          { label: "FSSAI/GMP compliance", value: "compliance", icon: "badgeCheck" },
          { label: "Positive patient feedback", value: "feedback", icon: "messagesSquare" },
          { label: "Affordability for masses", value: "affordability", icon: "indianRupee" }
        ]
      },
      {
        id: "ped_innovations",
        type: "textarea",
        eyebrow: "Question 13 of 13",
        title: "What improvements or innovations would you most like to see in future infant and child nutrition products?",
        placeholder: "E.g., new formats, lower sugar, targeted nutrients...",
        maxLength: 420
      }
    ]
  },
  mother: {
    label: "Mother/Caregiver Path",
    shortLabel: "Maternal nutrition and wellness",
    audience: "Mother/Caregiver",
    impact: "Your lived experience helps identify what Indian families need most: accessible advice, trustworthy products, and nutrition guidance that fits daily life.",
    questions: [
      {
        id: "mom_relationship",
        type: "single",
        eyebrow: "Question 1 of 21",
        title: "Which best describes you?",
        options: [
          { label: "Pregnant mother", value: "pregnant", icon: "heartPulse" },
          { label: "New mother (Lactating)", value: "lactating", icon: "milk" },
          { label: "Mother of an infant/child", value: "mother_child", icon: "baby" },
          { label: "Family member / Caregiver", value: "caregiver", icon: "heartHandshake" }
        ]
      },
      {
        id: "mom_age_group",
        type: "single",
        eyebrow: "Question 2 of 21",
        title: "What is your age group?",
        options: [
          { label: "Under 24", value: "u24", icon: "userRound" },
          { label: "25-30", value: "25_30", icon: "userRound" },
          { label: "31-35", value: "31_35", icon: "userRound" },
          { label: "36-40", value: "36_40", icon: "userRound" },
          { label: "Above 40", value: "a40", icon: "userRound" }
        ]
      },
      {
        id: "mom_pincode",
        type: "input",
        inputType: "number",
        eyebrow: "Question 3 of 21",
        title: "Please enter your Pincode",
        placeholder: "e.g., 110001",
        maxLength: 6,
        icon: "mapPin"
      },
      {
        id: "mom_additional_nutrition_needed",
        type: "multi",
        eyebrow: "Question 4 of 21",
        title: "Do you think women require additional nutrition during:",
        help: "Select all that apply.",
        options: [
          { label: "Pre-pregnancy planning", value: "preconception", icon: "calendarHeart" },
          { label: "Pregnancy", value: "pregnancy", icon: "activity" },
          { label: "Breastfeeding / Lactation", value: "lactation", icon: "milk" },
          { label: "Postpartum recovery", value: "postpartum", icon: "sparkles" },
          { label: "Monthly cycles", value: "cycles", icon: "droplets" }
        ]
      },
      {
        id: "mom_heard_powders",
        type: "single",
        eyebrow: "Question 5 of 21",
        title: "Have you heard about maternal nutrition powders or health supplements before?",
        options: [
          { label: "Yes, I use them", value: "yes_use", icon: "circleCheck" },
          { label: "Yes, but never used them", value: "yes_not_used", icon: "eye" },
          { label: "No, never heard of them", value: "no", icon: "circleSlash" }
        ]
      },
      {
        id: "mom_weakness_habit",
        type: "multi",
        eyebrow: "Question 6 of 21",
        title: "What do women in your family/community usually do when they feel weak or tired during pregnancy?",
        help: "Select all that apply.",
        options: [
          { label: "Take rest", value: "rest", icon: "moon" },
          { label: "Drink fruit juices / coconut water", value: "liquids", icon: "glassWater" },
          { label: "Consult a doctor", value: "doctor", icon: "stethoscope" },
          { label: "Take home remedies / Special foods", value: "home_remedies", icon: "home" },
          { label: "Use a health drink / Powder", value: "health_drink", icon: "packageOpen" }
        ]
      },
      {
        id: "mom_consumed_powders",
        type: "single",
        eyebrow: "Question 7 of 21",
        title: "Have you ever consumed nutrition powders or health drinks for yourself or your child?",
        options: [
          { label: "Yes, for myself", value: "self", icon: "userRound" },
          { label: "Yes, for my child", value: "child", icon: "baby" },
          { label: "Yes, for both", value: "both", icon: "usersRound" },
          { label: "No, neither", value: "none", icon: "circleSlash" }
        ]
      },
      {
        id: "mom_influence",
        type: "multi",
        eyebrow: "Question 8 of 21",
        title: "Who influenced or recommended these products to you?",
        help: "Select all that apply.",
        options: [
          { label: "Doctor / Pediatrician", value: "doctor", icon: "medicalCross" },
          { label: "Family / Elders", value: "family", icon: "home" },
          { label: "Friends / Other mothers", value: "friends", icon: "usersRound" },
          { label: "TV / Social Media ads", value: "ads", icon: "globe2" },
          { label: "Pharmacy suggestion", value: "pharmacy", icon: "store" }
        ]
      },
      {
        id: "mom_brand_awareness",
        type: "textarea",
        eyebrow: "Question 9 of 21",
        title: "Which brands of health drinks or nutrition powders have you heard of or used?",
        placeholder: "E.g., Horlicks Mother's Plus, Simmom, Protinex, PediaSure...",
        maxLength: 200
      },
      {
        id: "mom_health_concerns",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 10 of 21",
        title: "What are the biggest health or nutrition concerns faced during pregnancy or motherhood?",
        help: "Select your Top 3 concerns.",
        options: [
          { label: "Weakness / Fatigue", value: "fatigue", icon: "batteryLow" },
          { label: "Baby's growth", value: "baby_growth", icon: "trendingUp" },
          { label: "Digestion / Nausea", value: "digestion", icon: "stomach" },
          { label: "Weight management", value: "weight", icon: "gauge" },
          { label: "Immunity", value: "immunity", icon: "shieldPlus" },
          { label: "Hair / Skin health", value: "hair_skin", icon: "sparkles" }
        ]
      },
      {
        id: "mom_discontinuation_difficulty",
        type: "multi",
        eyebrow: "Question 11 of 21",
        title: "What makes it difficult to continue nutrition products regularly?",
        help: "Select all that apply.",
        options: [
          { label: "Forgetfulness", value: "forget", icon: "clock3" },
          { label: "High cost", value: "cost", icon: "indianRupee" },
          { label: "Poor taste", value: "taste", icon: "frown" },
          { label: "Digestion issues", value: "digestion", icon: "stomach" },
          { label: "No visible benefit", value: "no_benefit", icon: "eyeOff" }
        ]
      },
      {
        id: "mom_product_dislikes",
        type: "multi",
        eyebrow: "Question 12 of 21",
        title: "What aspects of current nutrition products do you dislike?",
        help: "Select all that apply.",
        options: [
          { label: "Too much sugar", value: "sugar", icon: "candy" },
          { label: "Artificial smell / taste", value: "smell", icon: "frown" },
          { label: "Lumpy / Hard to mix", value: "mix", icon: "packageOpen" },
          { label: "Too expensive", value: "expensive", icon: "indianRupee" },
          { label: "Boring flavors", value: "flavors", icon: "palette" }
        ]
      },
      {
        id: "mom_flavor_preference",
        type: "multi",
        eyebrow: "Question 13 of 21",
        title: "Which flavour profiles do you prefer or find easiest to drink?",
        help: "Select all that apply.",
        options: [
          { label: "Chocolate", value: "chocolate", icon: "candy" },
          { label: "Vanilla", value: "vanilla", icon: "sparkles" },
          { label: "Kesar / Elaichi", value: "kesar", icon: "leaf" },
          { label: "Fruity", value: "fruity", icon: "apple" },
          { label: "Natural / Unflavored", value: "natural", icon: "circle" }
        ]
      },
      {
        id: "mom_preferred_format",
        type: "single",
        eyebrow: "Question 14 of 21",
        title: "Preferred consumption format",
        options: [
          { label: "Milk-based powder", value: "milk_powder", icon: "packageOpen" },
          { label: "Water-based powder", value: "water_powder", icon: "glassWater" },
          { label: "Ready-to-drink bottle", value: "rtd", icon: "droplet" },
          { label: "Sachets", value: "sachets", icon: "panelTop" },
          { label: "Gummies / Chewables", value: "gummies", icon: "candy" }
        ]
      },
      {
        id: "mom_benefits_priority",
        type: "top-n",
        max: 5,
        eyebrow: "Question 15 of 21",
        title: "Which nutrition benefits matter most to you?",
        help: "Choose your Top 5 priorities.",
        options: [
          { label: "Immunity", value: "immunity", icon: "shieldPlus" },
          { label: "Energy levels", value: "energy", icon: "batteryCharging" },
          { label: "Brain development", value: "brain", icon: "brain" },
          { label: "Physical growth (Height/Weight)", value: "growth", icon: "trendingUp" },
          { label: "Iron / Hemoglobin", value: "iron", icon: "droplets" },
          { label: "Bone health", value: "bones", icon: "bone" },
          { label: "Digestion", value: "digestion", icon: "stomach" },
          { label: "Low sugar", value: "sugar", icon: "candyOff" }
        ]
      },
      {
        id: "mom_purchase_location",
        type: "multi",
        eyebrow: "Question 16 of 21",
        title: "Where do you usually buy health or nutrition products?",
        help: "Select all that apply.",
        options: [
          { label: "Local Pharmacy", value: "pharmacy", icon: "store" },
          { label: "Online (Amazon/BigBasket/etc.)", value: "online", icon: "globe2" },
          { label: "Supermarket / Grocery", value: "grocery", icon: "shoppingCart" },
          { label: "Doctor's clinic", value: "clinic", icon: "hospital" }
        ]
      },
      {
        id: "mom_choice_factors",
        type: "top-n",
        max: 3,
        exact: true,
        eyebrow: "Question 17 of 21",
        title: "What matters most while choosing nutrition products?",
        help: "Select exactly three factors.",
        options: [
          { label: "Doctor's recommendation", value: "doctor", icon: "medicalCross" },
          { label: "Price / Affordability", value: "price", icon: "indianRupee" },
          { label: "Taste", value: "taste", icon: "smile" },
          { label: "Brand trust", value: "brand", icon: "medal" },
          { label: "Nutritional ingredients", value: "ingredients", icon: "leaf" },
          { label: "No added sugar", value: "no_sugar", icon: "candyOff" }
        ]
      },
      {
        id: "mom_spending_reasonable",
        type: "single",
        eyebrow: "Question 18 of 21",
        title: "What monthly spending feels reasonable for maternal nutrition support?",
        options: [
          { label: "Below ₹300", value: "u300", icon: "indianRupee" },
          { label: "₹300 - ₹600", value: "300_600", icon: "indianRupee" },
          { label: "₹600 - ₹1000", value: "600_1000", icon: "indianRupee" },
          { label: "Above ₹1000", value: "a1000", icon: "indianRupee" }
        ]
      },
      {
        id: "mom_frustrating_aspect",
        type: "textarea",
        eyebrow: "Question 19 of 21",
        title: "What is the most frustrating aspect of nutrition products available today?",
        placeholder: "Tell us about what bothers you most...",
        maxLength: 420
      },
      {
        id: "mom_missing_support",
        type: "textarea",
        eyebrow: "Question 20 of 21",
        title: "What kind of nutrition support do you feel is still missing for mothers and children?",
        placeholder: "Advice, product types, reminders, or something else...",
        maxLength: 420
      },
      {
        id: "mom_trusted_medium",
        type: "multi",
        eyebrow: "Question 21 of 21",
        title: "Which medium of data consumption do you trust the most for health information?",
        help: "Select all that apply.",
        options: [
          { label: "Doctors / Experts", value: "doctors", icon: "stethoscope" },
          { label: "WhatsApp / Community groups", value: "whatsapp", icon: "messageCircle" },
          { label: "Instagram / YouTube", value: "social_media", icon: "video" },
          { label: "News / Websites", value: "web", icon: "globe2" },
          { label: "Books / Magazines", value: "books", icon: "bookOpen" }
        ]
      }
    ]
  }
};

const motherCaregiverBranch = {
  label: "Mother/Caregiver Path",
  shortLabel: "Maternal nutrition and wellness",
  audience: "Mother/Caregiver",
  impact: "Your lived experience helps identify what Indian families need most: accessible advice, trustworthy products, and nutrition guidance that fits daily life.",
  questions: [
    {
      id: "mom_age_group",
      type: "single",
      eyebrow: "Q2",
      title: "Age Group",
      options: [
        { label: "18-25", value: "18_25", icon: "userRound" },
        { label: "26-30", value: "26_30", icon: "userRound" },
        { label: "31-35", value: "31_35", icon: "userRound" },
        { label: "36-40", value: "36_40", icon: "userRound" },
        { label: "41+", value: "41_plus", icon: "userRound" }
      ]
    },
    {
      id: "mom_relationship",
      type: "single",
      eyebrow: "Q1",
      title: "Which best describes you right now?",
      options: [
        { label: "Planning pregnancy", value: "planning_pregnancy", icon: "calendarHeart" },
        { label: "Currently pregnant", value: "currently_pregnant", icon: "heartPulse" },
        { label: "New mother (0-6 months postpartum)", value: "new_mother_0_6m", icon: "milk" },
        { label: "Mother with young child (6 months-3 years)", value: "mother_child_6m_3y", icon: "baby" },
        { label: "Caregiver / family member", value: "caregiver_family", icon: "heartHandshake" }
      ]
    },
    {
      id: "mom_owns_car",
      type: "single",
      eyebrow: "Q4",
      title: "Do you own a car at home?",
      options: [
        { label: "Yes", value: "yes", icon: "circleCheck" },
        { label: "No", value: "no", icon: "circleSlash" }
      ]
    },
    {
      id: "mom_health_concerns",
      type: "top-n",
      max: 3,
      exact: true,
      eyebrow: "Q6",
      title: "What are the biggest health or nutrition concerns you face or have faced during pregnancy or motherhood?",
      help: "Select your top 3 - the ones that bother you most.",
      options: [
        { label: "Weakness / fatigue", value: "weakness_fatigue", icon: "batteryLow" },
        { label: "Low iron or haemoglobin", value: "low_iron_haemoglobin", icon: "droplets" },
        { label: "Poor appetite", value: "poor_appetite", icon: "utensils" },
        { label: "Digestive discomfort / bloating", value: "digestive_discomfort_bloating", icon: "activity" },
        { label: "Low milk production", value: "low_milk_production", icon: "milk" },
        { label: "Difficulty eating a balanced diet", value: "balanced_diet_difficulty", icon: "wheat" },
        { label: "Child not eating properly", value: "child_not_eating", icon: "baby" },
        { label: "Child weakness or low weight", value: "child_weakness_low_weight", icon: "trendingDown" },
        { label: "Lack of clear guidance on what to eat", value: "lack_clear_guidance", icon: "bookOpen" },
        { label: "Nutrition products are too expensive", value: "products_too_expensive", icon: "indianRupee" },
        { label: "Confused about what to consume", value: "confused_what_to_consume", icon: "circleHelp" }
      ]
    },
    {
      id: "mom_guidance_sources",
      type: "multi",
      eyebrow: "Q9",
      title: "Where do you usually look for guidance on what to eat during pregnancy or for your child?",
      help: "Select all that apply.",
      options: [
        { label: "Doctor / gynaecologist", value: "doctor_gynaecologist", icon: "stethoscope" },
        { label: "Family elders / mother-in-law", value: "family_elders_mother_in_law", icon: "home" },
        { label: "Friends or other mothers", value: "friends_other_mothers", icon: "usersRound" },
        { label: "Social media (Instagram, YouTube)", value: "social_media", icon: "video" },
        { label: "WhatsApp groups / community", value: "whatsapp_community", icon: "messageCircle" },
        { label: "Google / ChatGPT", value: "google_chatgpt", icon: "search" },
        { label: "TV or print media", value: "tv_print_media", icon: "monitorSmartphone" },
        { label: "Medical apps or websites", value: "medical_apps_websites", icon: "globe2" }
      ]
    },
    {
      id: "mom_benefits_priority",
      type: "multi",
      eyebrow: "Q8",
      title: "Which nutrition benefits matter most to you right now?",
      help: "Select all that feel important to you personally.",
      options: [
        { label: "Energy / reducing fatigue", value: "energy_reducing_fatigue", icon: "batteryCharging" },
        { label: "Protein intake", value: "protein_intake", icon: "wheat" },
        { label: "Fetal / baby development", value: "fetal_baby_development", icon: "baby" },
        { label: "Brain development (DHA, choline)", value: "brain_development", icon: "brain" },
        { label: "Bone strength (calcium, vitamin D)", value: "bone_strength", icon: "bone" },
        { label: "Better digestion", value: "better_digestion", icon: "activity" },
        { label: "Improved immunity", value: "improved_immunity", icon: "shieldPlus" },
        { label: "Better milk production (lactation)", value: "better_milk_production", icon: "milk" },
        { label: "Reducing weakness / anaemia", value: "reducing_weakness_anaemia", icon: "droplets" },
        { label: "Weight management", value: "weight_management", icon: "gauge" },
        { label: "Better child growth", value: "better_child_growth", icon: "trendingUp" }
      ]
    },
    {
      id: "mom_nutrition_barriers",
      type: "multi",
      eyebrow: "Q7",
      title: "What makes it hard to take care of your own nutrition regularly?",
      help: "Select all that apply.",
      options: [
        { label: "Forget or no fixed routine", value: "forget_no_routine", icon: "clock3" },
        { label: "Taste of available products", value: "product_taste", icon: "smile" },
        { label: "Too expensive", value: "too_expensive", icon: "indianRupee" },
        { label: "Not easily available near home", value: "not_available_near_home", icon: "mapPin" },
        { label: "Family doesn't see it as necessary", value: "family_not_necessary", icon: "home" },
        { label: "Didn't feel any difference", value: "no_difference", icon: "eyeOff" },
        { label: "Too many medicines already", value: "too_many_medicines", icon: "pill" },
        { label: "Doctor stopped recommending", value: "doctor_stopped_recommending", icon: "stethoscope" },
        { label: "No specific reason - just haven't prioritised it", value: "not_prioritised", icon: "timerReset" }
      ]
    },
    {
      id: "mom_product_awareness",
      type: "single",
      eyebrow: "Q11",
      title: "Have you heard of or used any nutrition powders or supplements for pregnancy, breastfeeding, or children?",
      options: [
        { label: "Yes, I use them regularly", value: "use_regularly", icon: "circleCheck" },
        { label: "I have used them before but not currently", value: "used_before_not_currently", icon: "timerReset" },
        { label: "I have heard of them but never used", value: "heard_never_used", icon: "eye" },
        { label: "No, I have never heard of them", value: "never_heard", icon: "circleSlash" }
      ]
    },
    {
      id: "mom_recommendation_source",
      type: "single",
      eyebrow: "Q13",
      title: "Who first told you about or recommended these products?",
      options: [
        { label: "Doctor / gynaecologist", value: "doctor_gynaecologist", icon: "stethoscope" },
        { label: "Family member / mother-in-law", value: "family_member_mother_in_law", icon: "home" },
        { label: "Friend or other mother", value: "friend_other_mother", icon: "usersRound" },
        { label: "Social media / influencer", value: "social_media_influencer", icon: "video" },
        { label: "Pharmacy / medical store staff", value: "pharmacy_medical_store", icon: "store" },
        { label: "Self-research", value: "self_research", icon: "scanText" },
        { label: "ASHA / health worker", value: "asha_health_worker", icon: "heartHandshake" }
      ]
    },
    {
      id: "mom_usage_frequency",
      type: "single",
      eyebrow: "Q14",
      title: "How often do you or did you use these products?",
      options: [
        { label: "Daily / as recommended", value: "daily_as_recommended", icon: "calendarDays" },
        { label: "A few times a week", value: "few_times_week", icon: "calendarClock" },
        { label: "Occasionally / when I remember", value: "occasionally_remember", icon: "clock3" },
        { label: "Stopped after a short trial", value: "stopped_short_trial", icon: "circleSlash" }
      ]
    },
    {
      id: "mom_product_dislikes",
      type: "multi",
      eyebrow: "Q15",
      title: "What aspects of these products do you dislike or find difficult?",
      help: "Answer even if you have only tried once or just heard complaints from others.",
      options: [
        { label: "Taste / flavour", value: "taste_flavour", icon: "smile" },
        { label: "Aftertaste", value: "aftertaste", icon: "frown" },
        { label: "Chalky or thick texture", value: "chalky_thick_texture", icon: "packageOpen" },
        { label: "Too sweet", value: "too_sweet", icon: "candy" },
        { label: "Artificial smell", value: "artificial_smell", icon: "cloudSun" },
        { label: "Hard to mix / dissolve", value: "hard_to_mix_dissolve", icon: "glassWater" },
        { label: "Heavy on stomach", value: "heavy_on_stomach", icon: "activity" },
        { label: "Too expensive", value: "too_expensive", icon: "indianRupee" },
        { label: "Packaging inconvenient", value: "packaging_inconvenient", icon: "packageX" },
        { label: "Other", value: "other", icon: "circleHelp" }
      ]
    },
    {
      id: "mom_choice_factors",
      type: "top-n",
      minSelections: 3,
      eyebrow: "Q17",
      title: "What matters most when choosing a nutrition product?",
      help: "Select all that apply. Choose at least 3.",
      options: [
        { label: "Doctor's recommendation", value: "doctor_recommendation", icon: "stethoscope" },
        { label: "Taste", value: "taste", icon: "smile" },
        { label: "Price / affordability", value: "price_affordability", icon: "indianRupee" },
        { label: "Ingredient quality", value: "ingredient_quality", icon: "leaf" },
        { label: "Brand trust", value: "brand_trust", icon: "medal" },
        { label: "Easy digestion", value: "easy_digestion", icon: "activity" },
        { label: "Scientific / clinical evidence", value: "scientific_clinical_evidence", icon: "clipboardCheck" },
        { label: "FSSAI / WHO certifications", value: "fssai_who_certifications", icon: "badgeCheck" },
        { label: "Family elder's guidance", value: "family_elder_guidance", icon: "home" },
        { label: "Available near home", value: "available_near_home", icon: "mapPin" }
      ]
    },
    {
      id: "mom_frustrating_aspect",
      type: "textarea",
      eyebrow: "Q18",
      title: "What is the most frustrating thing about nutrition products or nutrition advice available today?",
      placeholder: "Open response - share the exact frustration in your own words.",
      maxLength: 420
    },
    {
      id: "mom_missing_support",
      type: "textarea",
      eyebrow: "Q19",
      title: "What kind of nutrition support do you feel is still missing for mothers and children in India?",
      placeholder: "Open response - share what kind of support is still missing.",
      maxLength: 420
    }
  ]
};

export const branches = {
  ...baseBranches,
  mother: motherCaregiverBranch
};

export const branchOrder = ["gynaecologist", "pediatrician", "mother"];
