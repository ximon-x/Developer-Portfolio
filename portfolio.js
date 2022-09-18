import emoji from "react-easy-emoji";

export const greetings = {
  name: "Simon Samuel",
  title: "Hey, I'm Simon",
  description:
    "I'm a Software Developer. I love reading, playing chess and also creating systems that use Deep Learning to algorithmically trade on Centralized and Decentralized Exchanges!",
  resumeLink:
    "https://docs.google.com/document/d/1py9T68qf517224saYnid75M-lSJWBEaiUBQWsLL4qyo/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "salvien-code",
};

export const contact = {
  email: "salviensky@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/salvien-code",
  linkedin: "https://www.linkedin.com/in/ximon/",
  instagram: "https://www.instagram.com/__ximon",
  twitter: "https://twitter.com/sympli_simon",
  medium: "https://simon-ximon.medium.com/",
};

export const skillsSection = {
  title: "What can I do?",
  subTitle:
    "I am specialized in the Blockchain, Quantitative and Cloud Software Development Domains.",
  data: [
    {
      title: "Blockchain Development",
      lottieAnimationFile: "/lottie/skills/Blockchain.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Rust."
        ),
        emoji(
          "⚡ Development, Testing and Deployment of Smart Contracts using Hardhat."
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos:rust",
        },
        {
          skillName: "Hardhat",
          fontAwesomeClassname: "logos:hardhat-icon",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
      ],
    },
    {
      title: "Quantitative Analysis",
      lottieAnimationFile: "/lottie/skills/Quant.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Backtesting trading systems using historical data."),
        emoji(
          "⚡ Making Trading Decisions using Predictions through machine learning."
        ),
        emoji(
          "⚡ Interacting with Decentralized Exchanges like Uniswap and OpenSea."
        ),
        emoji(
          "⚡ Exploiting Arbitrage, and Liquidity opputurnities and maximazing profits using Flash Loans on AAVE."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Julia",
          fontAwesomeClassname: "vscode-icons:file-type-julia",
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
        },
        {
          skillName: "CoinMarketCap",
          fontAwesomeClassname: "simple-icons:coinmarketcap",
        },
        {
          skillName: "openSea",
          fontAwesomeClassname: "simple-icons:opensea",
        },
        {
          skillName: "AAVE",
          fontAwesomeClassname: "cryptocurrency:aave",
        },
      ],
    },
    {
      title: "Cloud Computing",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Using Git as the Centre of Truth for a CI/CD pipeline."),
        emoji(
          "⚡ Hosting, managing and scaling dApps on a public Cloud Provider."
        ),
        emoji(
          "⚡ Containerization of trading systems to ensure consistency when deploying to the Cloud."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Go",
          fontAwesomeClassname: "logos:go",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "bi:git",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "CircleCi",
          fontAwesomeClassname: "logos:circleci",
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Hands-On Smart Contract Development with Solidity & Ethereum",
    progressPercentage: "68",
  },
  {
    Stack: "Python for Finance",
    progressPercentage: "53",
  },
  {
    Stack: "Rust in Action",
    progressPercentage: "40",
  },
  {
    Stack: "The Art of Agile Development",
    progressPercentage: "37",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Port Harcourt",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2018 - April 2023",
    descBullets: [
      "Profound knowledge of Algorithms, Data Structures and Design Patterns",
    ],
  },
];

export const experience = [
  {
    role: "Blockchain Developer Intern",
    company: "Xade",
    companylogo: "/img/icons/common/Xade.jpeg",
    date: "April 2022 – June 2022",
    desc: "I worked as a blockchain engineer in charge of integration with Metamask, building smart contracts and also managing deployed on chain contracts.",
  },
  {
    role: "Blockchain Developer",
    company: "MysticSwap",
    companylogo: "/img/icons/common/MysticSwap.svg",
    date: "July 2022 – Present",
    desc: "I worked as a blockchain engineer in charge of integration with Metamask, building smart contracts and also managing deployed on chain contracts.",
  },
];

export const projects = [
  {
    name: "Always-Alive",
    desc: "A fun Decentralized Application, built with Next.js, and Typescript.",
    github: "https://github.com/Salvien-code/Always-Alive",
    link: "https://always-alive.vercel.app/",
  },
];

export const feedbacks = [
  {
    name: "Harshall Arnav",
    feedback: "He's catches up quickly and always keeps an open mind.",
  },
];
