import {
  studentsphoto1,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Admission",
    url: "#features",
  },
  {
    id: "1",
    title: "Learning",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Staff",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Sports",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Fees",
    url: "#signup",
  },
  {
    id: "5",
    title: "Contact",
    url: "#signup",
  },
  {
    id: "6",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "7",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const fainestSports = [
  "Football",
  "Basketball",
  "Swimming",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  ["We follow the Curriculum of the ministry of education of Tanzania, we quickly adapt to apply curriculum apdates.",
    "We have membership with a number of exams and testing communities, this help prepare our students to be ready for any exams and testing settings.",
   ]

export const collabContent = [
  {
    id: "0",
    title: "Registered with the Ministry",
    text: collabText[0],
  },
  {
    id: "1",
    title: "Exams Testing Communities",
    text:collabText[1]
  }
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Pre Primary",
    description: "School transport is provided and is charged based on the distance from home to school",
    price: "690,000.00",
    features: [
      "School Fee",
      "Tea and bites",
      "Lunch",
      "Diary"
    ],
  },
  {
    id: "1",
    title: "Grade I, II,III",
    description: "School transport is provided and is charged based on the distance from home to school",
    price: "120,000.00",
    features: [
      "School Fee",
      "Tea and bites",
      "Lunch",
      "Diary"
    ],
  },
  {
    id: "2",
    title: "Grade IV, V,VI",
    description: "School transport is provided and is charged based on the distance from home to school",
    price: "150,000.00",
    features: [
      "School Fee",
      "Tea and bites",
      "Lunch",
      "Diary"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Admission",
    text: "There are 3 import easy steps you will follow to apply of admission at Finest School.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: studentsphoto1,
  },
  {
    id: "1",
    title: "Learning",
    text: "At our school, learning is an adventure! We believe in nurturing curious minds and fostering a love for knowledge through innovative teaching methods and hands-on experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: studentsphoto1,
    light: true,
  },
  {
    id: "2",
    title: "Sports",
    text: "A healthy and happier family come alive on our sports activities! From football, running, to swimming, our programs are designed to build confidence and resilience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: studentsphoto1,
  },
  {
    id: "3",
    title: "Fees",
    text: "A Our Fees are affordable and can be paid in four Installments.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: studentsphoto1,
    light: true,
  },
  {
    id: "4",
    title: "Teachers and Staff",
    text: "Our teachers are qualified and dedicated to teaching students of all ages Standardized lesson plans are created to meet the need of each student and queezes are offered to help students understand complex topics.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: studentsphoto1,
  },
  {
    id: "5",
    title: "Open for improvement",
    text: "If there is anything specific that you would like to know about or would like us to include on our community you can contact the school and see how we can work together.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: studentsphoto1,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
