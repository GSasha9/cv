import { useContext } from 'react';

import { messages } from '../../../messages/messages.ts';
import Section from '../Section/Section.tsx';

import LanguageContext from '@/context/language-context.tsx';

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section width="100%">
      <h2 className="title-second">{messages[language].about.me}</h2>
      <p className="regular-text">{messages[language].about.text}</p>
    </Section>
  );
};

export default AboutMe;
