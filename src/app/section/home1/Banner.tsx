"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    id: 1,
    bg: "/assets/images/banner/banner1-1.jpg",
    image: "/assets/images/resource/banner1-1.png",
  },
  {
    id: 2,
    bg: "/assets/images/banner/banner1-2.jpg",
    image: "/assets/images/resource/banner1-1.png",
  },
  {
    id: 3,
    bg: "/assets/images/banner/banner1-3.jpg",
    image: "/assets/images/resource/banner1-1.png",
  },
];

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="outer-box">
        <Swiper
          className="banner-h1-slider"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="banner-block">
                <div className="inner-block">
                  <div className="bg bg-image">
                    <img
                      src={slide.bg}
                      alt="banner"
                    />
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-arrow-down"></i>
                    <span>
                      <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200">
                        <path
                          id={`circlePath-${index}`}
                          d="M100 100 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
                          fill="none"
                        />
                        <text
                          fontSize="14"
                          letterSpacing="6"
                          textAnchor="middle"
                          dominantBaseline="middle">
                          <textPath
                            href={`#circlePath-${index}`}
                            startOffset="50%">
                            MY PROJECTS · MY PROJECTS ·
                          </textPath>
                        </text>
                      </svg>
                    </span>
                  </div>
                  <h1 className="banner-title">
                    Crafting A Brighter Future With Excellence
                  </h1>
                  <div className="content-box">
                    <p className="text">
                      We create iconic real estate developments that provide
                      enduring value to investors and communities.
                    </p>
                    <div className="content">
                      <div className="info-box">
                        <div className="h2 count-box">
                          <span className="count-text">4.8</span>
                        </div>
                        <div className="info">
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star"></i>
                            ))}
                          </div>
                          <div className="text">
                            Based on 204 Reviews
                          </div>
                        </div>
                      </div>

                      <div className="image">
                        <img
                          src={slide.image}
                          alt="thumb"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;