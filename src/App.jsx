import Scene from "./Scene";
import AboutOverlay from "./AboutOverlay";
import ContactOverlay from "./ContactOverlay";
import ProjectsOverlay from "./ProjectsOverlay";
import SkillsOverlay from "./SkillsOverlay";
import ResumeButton from "./ResumeButton";
import InteractionHint from "./InteractionHint";
import MobileView from "./hooks/MobileView";
import useIsMobile from "./hooks/useIsMobile";
import IntroCard from "./IntroCard";
import ExperienceTree from "./ExperienceTree";
import { useEffect, useState } from "react";

export default function App() {
  //const isMobile = useIsMobile();
   const [showExperience, setShowExperience] = useState(false);
   useEffect(() => {
  const onScroll = () => {
    setShowExperience(window.scrollY > 200);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

 // if (isMobile) {
  //  return <MobileView />;
 // }
  return (
    <>
      <Scene />
      <ExperienceTree visible={showExperience} />
      <IntroCard />
      <InteractionHint />
      <ResumeButton />
      <AboutOverlay />
      <ContactOverlay />
      <ProjectsOverlay />
      <SkillsOverlay />
    </>
  );
}
