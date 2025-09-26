import Section from '../Section/Section';
import TimeBlock from '../TimeBlock/TimeBlock';

import { experienceConstantsBuilder } from '@/shared/utils/experience-constants-builder';

const Experience = () => {
  const language = 'en';

  const experience = experienceConstantsBuilder(language);

  return (
    <Section width="45%">
      <Section width="100%">
        <h2 className="title-second">Experience</h2>
        {experience.work.map((el) => (
          <TimeBlock
            period={el.period}
            title={el.title}
            description={el.description}
            key={el.title}
          />
        ))}
      </Section>

      <Section width="100%">
        <h2 className="title-second">Education</h2>
        {experience.education.map((el) => (
          <TimeBlock
            period={el.period}
            title={el.title}
            description={el.description}
            key={`${el.title.slice(0, 4)}${el.period.slice(0, 4)}`}
          />
        ))}
      </Section>
    </Section>
  );
};

export default Experience;
