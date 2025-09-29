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

  const picLinks = CERTIFICATES.map((el) => (
    <img
      key={crypto.randomUUID()}
      src={`./${el}`}
      className="certificates__img"
      onClick={() => handleClick(el)}
      alt="certificate"
    ></img>
  ));

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
