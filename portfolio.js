import emoji from "react-easy-emoji";

export const greetings = {
	name: "Simon Samuel",
	title: "Hey, I'm Simon",
	description:
		"I'm a Blockchain developer with experience on Ethereum, Solidity, Web3.js, Hardhat, Moralis, and IPFS Framework. I'm also a Cloud developer and have knowledge on CI/CD systems using GitOps and working with Docker, CircleCi, Flux CD and Kubernetes. I'm also a quantitative developer fluent in MQL5 and Pinescript and other mathematical trading methods.",
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
	title: "Who do I do?",
	subTitle:
		"An innovative Software Developer with a passion for personal growth and learning.",
	data: [
		{
			title: "Blockchain Development",
			lottieAnimationFile: "/lottie/skills/Blockchain.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat and Ganache"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
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
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon"
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
					skillName: "MaterialUI",
					fontAwesomeClassname: "simple-icons:mui"
				},
				{
					skillName: "Rust",
					fontAwesomeClassname: "logos:rust"
				}
			],
		},
		{
			title: "Cloud Computing",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using CircleCi and Argo CD"
				),
			],
			softwareSkills: [
				{
					skillName: "Git",
					fontAwesomeClassname: "bi:git"
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "bxl:mongodb"
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon"
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes"
				},
				{
					skillName: "CircleCi",
					fontAwesomeClassname: "logos:circleci"
				},
				{
					skillName: "Argo CD",
					fontAwesomeClassname: "logos:argo-icon"
				},
				{
					skillName: "Google Cloud",
					fontAwesomeClassname: "logos:google-cloud"
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
				emoji(
					"⚡ Backtesting trading systems using historical data"
				),
				emoji(
					"⚡ Building robust trading systems by performing Walk Forward Optimization using python"
				)
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
					fontAwesomeClassname: "logos:numpy"
				},
				{
					skillName: "SQLite",
					fontAwesomeClassname: "vscode-icons:file-type-sqlite"
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "bxl:flask"
				},
				{
					skillName: "Express",
					fontAwesomeClassname: "simple-icons:express"
				}








			],
		},	
	],
};

export const SkillBars = [
	{
		Stack: "Blockchain Development", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
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
			"Profound knowledge of Algorithms, Data Structures and Design Patterns"
		],
	},
];

export const experience = [
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
	},
];

export const projects = [
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	}
];