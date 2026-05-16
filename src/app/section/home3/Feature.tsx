"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FeatureSection() {
  const features = [
    { title: "Investment", img: "/assets/images/resource/feature-1.jpg" },
    { title: "Management", img: "/assets/images/resource/feature-2.jpg" },
    { title: "Eden Estate", img: "/assets/images/resource/feature-3.jpg" },
    { title: "Property", img: "/assets/images/resource/feature-4.jpg" },
  ];

  useEffect(() => {
    new Swiper(".feature-h3-slider", {
      modules: [Autoplay],
      loop: true,
      speed: 3000,
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
  }, []);

  return (
    <section className="feature-section pt-0">
      <div className="swiper feature-h3-slider pb-0">
        <div className="swiper-wrapper">
          {features.concat(features).map((item, index) => (
            <div key={index} className="swiper-slide">
              <div className="feature-box1">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="h6 title">
                      <Link href="#">{item.title}</Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img
                        src={item.img}
                        alt={item.title}
                      />
                      <img
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}