import React, { useState, useEffect } from "react";
import styles from "./carousel.module.css";

const slides = [
  {
    image: "/images/rock2.jpg",
    title: "Slide 1",
    description: "Description for Slide 1",
  },
  {
    image: "/images/rock3.jpg",
    title: "Slide 2",
    description: "Description for Slide 2",
  },
  {
    image: "/images/rock4.jpg",
    title: "Slide 3",
    description: "Description for Slide 3",
  },
];
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 自动播放间隔时间：3000毫秒（3秒）
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            index === currentSlide
              ? `${styles.slide} ${styles.active}`
              : styles.slide
          }
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* <div className={styles.content}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
