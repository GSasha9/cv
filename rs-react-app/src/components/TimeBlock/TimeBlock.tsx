import Section from '../Section/Section';

import './TimeBlock.scss';

export interface TimeBlockProps {
  period: string;
  title: string;
  description: string;
}

const TimeBlock = ({ period, title, description }: TimeBlockProps) => {
  return (
    <Section width="100%">
      <div className="time-block__wrapper">
        <div className="time-block__period">{period}</div>
        <div className="time-block__title">{title}</div>
        <div className="time-block__description">{description}</div>
      </div>
    </Section>
  );
};

export default TimeBlock;
