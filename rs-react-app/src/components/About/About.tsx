import AboutMe from '../AboutMe/AboutMe.tsx';
import Section from '../Section/Section.tsx';
import Skills from '../Skills/Skills.tsx';

const About = () => {
  return (
    <Section width="50%">
      <AboutMe />
      <Skills />
    </Section>
  );
};

export default About;
