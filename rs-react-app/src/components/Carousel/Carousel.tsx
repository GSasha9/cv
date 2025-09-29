import { useEffect, useRef, useState } from 'react';

import './Carousel.scss';

interface CarouselProps {
  content: React.ReactElement[];
}

const Carousel = ({ content }: CarouselProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const loopedContent = [...content, ...content];

  useEffect(() => {
    if (wrapperRef.current) {
      const totalWidth = Array.from(wrapperRef.current.children).reduce(
        (acc, el) => acc + (el as HTMLElement).offsetWidth,
        0
      );

      setContentWidth(totalWidth / 2);
    }
  }, [content]);

  return (
    <div className="carousel">
      <div
        className="carousel__wrapper"
        ref={wrapperRef}
        style={{ '--scroll-width': `${contentWidth}px` } as React.CSSProperties}
      >
        {loopedContent.map((el) => {
          return (
            <div className="carousel-item" key={crypto.randomUUID()}>
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
