// ============================================================
//  SP DEV 22 — Projects Data
//  नया project जोड़ना आसान है: नीचे list में एक नया block
//  copy करके नाम, details, tags, रंग और links बदल दो।
//  category के options: 'android-apps', 'android-games',
//                       'web-games', 'web-apps'
//  हर card को अपना अलग रंग color / color2 से मिलता है।
// ============================================================

const PROJECTS = [
  {
    id: "sp-ai-agent",
    category: "web-apps",
    icon: "🤖",
    name: "SP Ai Agent 2.0",
    desc: "AI chat agent — Gemini API के साथ chat, पढ़ाई में मदद, reminders, time table, Code Canvas और memory। Settings में अपनी free Gemini API key डालकर चलाओ।",
    tags: ["AI", "Gemini", "Study", "Chat Agent"],
    color: "#7c3aed",
    color2: "#4f46e5",
    open: "apps/sp-ai-agent.html",
    download: "apps/sp-ai-agent.html"
  },
  {
    id: "cbt-pro",
    category: "web-apps",
    icon: "🎯",
    name: "CBT PRO — Quiz & Test",
    desc: "Exam practice का असली माहौल! Test mode: negative marking, subject sections, timer और question palette — बिल्कुल असली CBT जैसा। Quiz mode: हर सवाल पर तुरंत result + explanation, कोई negative नहीं। पहला Test: SSC CHSL Maths (25 सवाल)।",
    tags: ["Exam", "SSC CHSL", "Mock Test", "Quiz"],
    color: "#e11d48",
    color2: "#991b1b",
    open: "apps/cbt-pro.html",
    download: "apps/cbt-pro.html"
  },
  {
    id: "water-supply-demo",
    category: "web-apps",
    icon: "💧",
    name: "Water Supply Demo — Suroth",
    desc: "सुरोठ (हिंडौन, राजस्थान) के लिए water supply demo — User/Admin login (Demo PIN: 1234), bill देखो, notice board और complaint system के साथ।",
    tags: ["Demo", "Hindi", "Utility"],
    color: "#0284c7",
    color2: "#0e7490",
    open: "water-supply-demo.html",
    download: "water-supply-demo.html"
  },
  {
    id: "diwali-greeting",
    category: "web-apps",
    icon: "🪔",
    name: "Diwali Greeting Page",
    desc: "अपने नाम वाला Diwali wish page बनाओ और link दोस्तों को भेजो — खोलने पर नाम के साथ शुभकामनाएँ और आतिशबाज़ी दिखेगी!",
    tags: ["Diwali", "Greeting", "Share"],
    color: "#db2777",
    color2: "#ea580c",
    open: "diwali.html",
    download: "diwali.html"
  },
  {
    id: "diwali-dhamaka",
    category: "web-games",
    icon: "🎆",
    name: "दीपावली धमाका — Thali Catch",
    desc: "Diwali theme वाला मज़ेदार browser game — mobile और computer, दोनों पर बिना install किए खेलो!",
    tags: ["Game", "Diwali", "Arcade"],
    color: "#ea580c",
    color2: "#f59e0b",
    open: "games/diwali-dhamaka.html",
    download: "games/diwali-dhamaka.html"
  },
  {
    id: "sp-launcher",
    category: "android-apps",
    icon: "🚀",
    name: "SP Launcher",
    desc: "Students के लिए free Android launcher — Study Manager, Goals, Quick Time Table, Calendar, Study Popups, Themes और Backup/Restore। हल्का और fast — कम RAM वाले phones के लिए perfect।",
    tags: ["Android", "Launcher", "Study", "Free"],
    color: "#059669",
    color2: "#0d9488",
    open: "https://github.com/sp-dev-22/sp-launcher",
    openLabel: "View on GitHub",
    download: "https://github.com/sp-dev-22/sp-launcher/releases",
    downloadLabel: "Download APK"
  }
];
