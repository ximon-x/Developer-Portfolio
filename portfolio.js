import emoji from "react-easy-emoji";

export const greetings = {
  name: "Simon Samuel",
  title: "Hey, I'm Simon",
  description:
    "I'm a Blockchain developer with experience using Solidity, Web3.js to build cross platform dapps, a Cloud developer having profound knowledge on GitOps and building CI/CD systems and I'm also a quantitative developer able to use mathematical methods like Walk Forward Optimization and Backtesting to build robust trading systems.",
  resumeLink:
    "https://docs.google.com/document/d/1py9T68qf517224saYnid75M-lSJWBEaiUBQWsLL4qyo/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "salvien-code",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/salvien-code",
  linkedin: "https://www.linkedin.com/in/ximon/",
  instagram: "https://www.instagram.com/__ximon",
  twitter: "https://twitter.com/sympli_simon",
  medium: "https://www.medium.com/@salviensky",
};

export const skillsSection = {
  title: "Who am I?",
  subTitle:
    "I'm an innovative and enthusiastic Software Developer with a passion for personal growth and learning.",
  data: [
    {
      title: "Blockchain Development",
      lottieAnimationFile: "/lottie/skills/Blockchain.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Rust."
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat and Ganache."
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles."
        ),
        emoji(
          "⚡ Developing NFT Smart Contracts using ERC-721 Token Standard."
        ),
        emoji(
          "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS."
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
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Hardhat",
          fontAwesomeClassname: "logos:hardhat-icon",
        },
        {
          skillName: "Zeppelin",
          fontAwesomeClassname: "logos:open-zeppelin-icon",
        },
        {
          skillName: "IPFS",
          fontAwesomeClassname: "simple-icons:ipfs",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "MaterialUI",
          fontAwesomeClassname: "simple-icons:mui",
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos:rust",
        },
      ],
    },
    {
      title: "Cloud Computing",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms."),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases."
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using CircleCi and ArgoCD."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "bi:git",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "bxl:mongodb",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "CircleCi",
          fontAwesomeClassname: "logos:circleci",
        },
        {
          skillName: "ArgoCD",
          fontAwesomeClassname: "logos:argo-icon",
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
      ],
    },
    {
      title: "Quantitative Analysis",
      lottieAnimationFile: "/lottie/skills/Quant.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Backtesting trading systems using historical data."),
        emoji(
          "⚡ Building robust trading systems by performing Walk Forward Optimization using Python and VectorBT."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Pinescript",
          fontAwesomeClassname: "file-icons:pinescript",
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "vscode-icons:file-type-sqlite",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "bxl:flask",
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "vscode-icons:file-type-graphql",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Blockchain Development",
    progressPercentage: "90",
  },
  {
    Stack: "Quantitative Analysis",
    progressPercentage: "80",
  },
  {
    Stack: "Cloud Computing",
    progressPercentage: "60",
  },
  {
    Stack: "Backend Development",
    progressPercentage: "60",
  },
  {
    Stack: "Frontend Development",
    progressPercentage: "40",
  },
  {
    Stack: "Systems Programming",
    progressPercentage: "30",
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
    role: "Junior Blockchain Developer",
    company: "Xade",
    companylogo: "/img/icons/common/Xade.png",
    date: "April 2022 – Present",
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
