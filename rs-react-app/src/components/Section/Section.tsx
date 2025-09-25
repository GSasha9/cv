import './Section.scss';

interface SectionProps {
  width: string;
  children: React.ReactElement | React.ReactElement[];
}

const Section = ({ width, children }: SectionProps) => {
  return (
    <section className="section" style={{ width }}>
      {children}
    </section>
  );
};

export default Section;
