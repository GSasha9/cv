import AboutMe from '../AboutMe/AboutMe.tsx';
import Contacts from '../Contacts/Contacts.tsx';
import Section from '../Section/Section.tsx';
import Skills from '../Skills/Skills.tsx';

const About = () => {
  return (
    <Section width="45%">
      <AboutMe />
      <Skills />
      <Contacts />
    </Section>
  );
};

export default About;
