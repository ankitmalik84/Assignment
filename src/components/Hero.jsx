import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./hero.module.scss";

const Hero = () => {
  const slides = [
    {
      id: 1,
      text: "Slide 1",
      image:
        "https://res.cloudinary.com/dyw8llf7u/image/upload/v1689184717/samples/landscapes/landscape-panorama.jpg",
    },
    {
      id: 2,
      text: "Slide 2",
      image:
        "https://res.cloudinary.com/dyw8llf7u/image/upload/v1689184715/samples/cloudinary-group.jpg",
    },
    {
      id: 3,
      text: "Slide 3",
      image:
        "https://res.cloudinary.com/dyw8llf7u/image/upload/v1689184705/samples/food/fish-vegetables.jpg",
    },
  ];

  return (
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable
      infiniteLoop
      interval={3000}
    >
      {slides.map((slide) => (
        <div
          className="carousel-slide  lg:h-[300px] md:h-[200px] border-black relative"
          key={slide.id}
        >
          <img src={slide.image} alt={slide.text} className="object-cover" />
          <div className="slide-content absolute bottom-4 left-0 p-4 text-white">
            <h1>{slide.text}</h1>
            <p>SAMPLE</p>
            <button className={`${styles.hero_button} font-semibold`}>
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
