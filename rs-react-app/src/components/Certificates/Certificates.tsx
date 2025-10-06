import { useState } from 'react';

import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import Section from '../Section/Section';

import './Certificates.scss';

import { CERTIFICATES } from '@/shared/constants/certificates';

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const handleClick = (img: string) => {
    setModalImg(img);
    setIsModalOpen(true);
  };

  function handleClose() {
    setIsModalOpen(false);
    setModalImg(null);
  }

  const picLinks = Object.keys(CERTIFICATES).map((el) => {
    const key = el as keyof typeof CERTIFICATES;

    return (
      <div className="certificates__img-container" key={crypto.randomUUID()}>
        <img
          src={`./${CERTIFICATES[key].pic}`}
          className="certificates__img"
          onClick={() => handleClick(CERTIFICATES[key].pic)}
          alt={CERTIFICATES[key].name}
        ></img>
        <p>{CERTIFICATES[key].name}</p>
      </div>
    );
  });

  return (
    <>
      <Section width="100%">
        <h2 className="title-second">Certificates</h2>
        <Carousel content={picLinks}></Carousel>
      </Section>
      <Modal isOpen={isModalOpen} handleClose={handleClose}>
        {modalImg ? (
          <img
            src={`./${modalImg}`}
            alt="certificate"
            className="certificate__modal-img"
          />
        ) : (
          <span></span>
        )}
      </Modal>
    </>
  );
};

export default Certificates;
