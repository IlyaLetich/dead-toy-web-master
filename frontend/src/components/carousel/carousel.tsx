import React, { FC, memo, useCallback, useRef, useState } from "react";
import { CarouselContainer, CarouselSlide, CarouselSlides } from "./carousel.styles";
import { Image } from 'react-bootstrap';
import swipeLeft from "../../images/gameDescription/swipe_left.png"
import swipeRight from "../../images/gameDescription/swipe_right.png"

export type CarouselProps = {
  slides: string[];
};

export const Carousel: FC<CarouselProps> = memo(({ slides }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [slidesCollection] = useState(slides);

  const nextSlide = useCallback((): void => {
    slidesCollection.push(slidesCollection[0]);
    slidesCollection.splice(0, 1);
    carouselRef.current?.scrollBy({ left: 262, behavior: "smooth" });
  }, [slidesCollection]);

  const prevSlide = useCallback((): void => {
    slidesCollection.unshift(slidesCollection[slidesCollection.length - 1]);
    slidesCollection.pop();
    carouselRef.current?.scrollBy({ left: -262, behavior: "smooth" });

  }, [slidesCollection]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer>
      <button onClick={prevSlide}>
        <Image src={swipeLeft} />
      </button>
      <CarouselSlides ref={carouselRef}>
        {slidesCollection.map((slide, index) => (
          <CarouselSlide
            key={index}
            style={{ backgroundImage: `url(${slide})` }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselSlides>
      <button onClick={nextSlide}>
        <Image src={swipeRight} />
      </button>
    </CarouselContainer>
  );
});