import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';

import './Certificates.scss';

import { CERTIFICATES } from '@/shared/constants/certificates';

const Certificates = () => {
  const picLinks = CERTIFICATES.map((el) => (
    <a
      key={crypto.randomUUID()}
      href={el}
      className="certificates__link"
      style={{ backgroundImage: `url(./${el})` }}
    ></a>
  ));

  return (
    <>
      <Section width="100%">
        <h2 className="title-second">Certificates</h2>
        <Carousel content={picLinks}></Carousel>
      </Section>
    </>
  );
};

export default Certificates;
