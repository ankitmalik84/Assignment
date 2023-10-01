import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Product1 from "./Product1";
import products from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fstyles.css";

const FeatureItem = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides to show based on screen size
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 780) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 500) {
        setSlidesToShow(2);
      } else {
        // Calculate the number of items to show based on available space
        const containerWidth =
          document.querySelector(".slider-container").offsetWidth;
        const itemWidth = 350; // Adjust this value based on your item width
        const calculatedSlidesToShow = Math.floor(containerWidth / itemWidth);
        setSlidesToShow(calculatedSlidesToShow);
      }
    };

    // Initial adjustment
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the dynamically calculated value
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h1 className="font-sans font-medium mt-[10px] ml-[60px] text-3xl md:text-4xl sm:text-2xl">
        Feature Products
      </h1>

      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product) => (
            <Product1 key={product.id} post={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureItem;
