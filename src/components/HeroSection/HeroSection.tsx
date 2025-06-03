import React, { useEffect, useState } from 'react';
import './index.css';
import type { SlideContent } from '../../types/Slide.type';

const slidesTour  = [
    {
      id: 1,
      title: "Discover Vietnam's Beauty",
      description: "Experience unforgettable adventures in Vietnam's most beautiful destinations",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Ha Long Bay landscape with limestone karsts"
    },
    {
      id: 2,
      title: "Authentic Cultural Experiences",
      description: "Immerse yourself in Vietnam's rich cultural heritage and traditions",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Colorful lanterns in Hoi An Ancient Town"
    },
    {
      id: 3,
      title: "Culinary Journeys",
      description: "Taste the extraordinary flavors of Vietnamese cuisine",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Traditional Vietnamese cuisine"
    },
    {
      id: 4,
      title: "Nature Connection",
      description: "Immerse yourself in Ninh Bình's breathtaking landscapes of limestone mountains and tranquil rivers",
      image: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/canh-dep-94.jpg",
      alt: "Serene river winding through Ninh Bình's karst mountains at sunrise"
    }
  ];

const HeroSection = () => {
  const [slides, setSlides] = useState(slidesTour);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (autoplay && slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoplay, slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // useEffect (() => {
  //   const timer = setInterval(() => {
  //     if(autoplay && slides.length > 1){
  //       setCurrentSlide((prev) => (prev+1) % slides.length)
  //     }
  //   }, 5000);
  //   return () => clearInterval(timer);
  // })

  return (
    <section className="hero-carousel">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide: SlideContent) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.image} alt={slide.alt} className="carousel-image" />
            <div className="overlay" />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button>Explore Tours</button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        className="nav-button prev"
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
      >
        &#10094;
      </button>
      <button
        className="nav-button next"
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSection;