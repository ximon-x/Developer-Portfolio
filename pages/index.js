import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Simon Samuel",
          description:
            "An innovative Blockchain, Cloud and Quantitative Developer.",
          image: "https://avatars.githubusercontent.com/u/56292632?v=4",
          url: "https://simon-samuel.netlify.app/",
          keywords: [
            "Simon",
            "Simon Samuel",
            "@sympli_simon",
            "ximon",
            "Portfolio",
            "Simon Portfolio",
            "Simon Samuel Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Proficiency />
      {/* <Feedbacks /> */}

      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
