import { messages } from '../../../messages/messages';
import Section from '../Section/Section';

import './Skills.scss';

import { SKILLS } from '@/shared/constants/skills';

const Skills = () => {
  const language = 'en';
  const skillsList = SKILLS.map((el) => (
    <li key={el.slice(0, 3)} className="skills__list-item">
      {el}
    </li>
  ));

  return (
    <Section width="100%">
      <h2 className="title-second">{messages[language].skills}</h2>
      <ul className="skills__list">{skillsList}</ul>
    </Section>
  );
};

export default Skills;
