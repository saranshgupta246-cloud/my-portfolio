import { AIChat } from "@/components/chat/AIChat";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { About } from "@/components/sections/About";
import { BuildTimeline } from "@/components/sections/BuildTimeline";
import { Contact } from "@/components/sections/Contact";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Experiments } from "@/components/sections/Experiments";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { contactCopy, getPublishedContactMethods } from "@/data/contact";
import { getPublishedCurrentlyBuilding } from "@/data/currentlyBuilding";
import { me } from "@/data/me";
import { getPublishedExperiments } from "@/data/experiments";
import { getPublishedProof } from "@/data/proof";
import { getPublishedProjects } from "@/data/projects";
import { getPublishedSkills } from "@/data/skills";
import { getPublishedTimeline } from "@/data/timeline";

export default function HomePage() {
  const projects = getPublishedProjects();
  const experiments = getPublishedExperiments();
  const skills = getPublishedSkills();
  const timeline = getPublishedTimeline();
  const proof = getPublishedProof();
  const building = getPublishedCurrentlyBuilding();
  const contactMethods = getPublishedContactMethods();

  return (
    <>
      <SectionReveal delay={0}>
        <Hero me={me} />
      </SectionReveal>

      <SectionReveal delay={0.03}>
        <Work projects={projects} />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <Experiments experiments={experiments} />
      </SectionReveal>

      <SectionReveal delay={0.07}>
        <Skills skills={skills} />
      </SectionReveal>

      <SectionReveal delay={0.09}>
        <About me={me} />
      </SectionReveal>

      <SectionReveal delay={0.11}>
        <BuildTimeline items={timeline} />
      </SectionReveal>

      <SectionReveal delay={0.13}>
        <Proof proof={proof} />
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <CurrentlyBuilding items={building} />
      </SectionReveal>

      <SectionReveal delay={0.17}>
        <Contact copy={contactCopy} methods={contactMethods} />
      </SectionReveal>

      <AIChat />
    </>
  );
}
