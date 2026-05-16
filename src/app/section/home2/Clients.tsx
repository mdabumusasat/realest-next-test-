"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientSection() {
  const clients = [
    "/assets/images/icons/client1-1.png",
    "/assets/images/icons/client1-2.png",
    "/assets/images/icons/client1-3.png",
    "/assets/images/icons/client1-4.png",
    "/assets/images/icons/client1-5.png",
  ];

  useEffect(() => {
    new Swiper(".client-h2-slider", {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      },
    });
  }, []);

  return (
    <section className="client-section">
      <div className="auto-container">
        <div className="row">
          <div className="client-box one col-lg-12">
            <div className="swiper client-h2-slider">
              <div className="swiper-wrapper">
                {clients.concat(clients).map((img, index) => (
                  <div key={index} className="swiper-slide client-block">
                    <div className="inner-block">
                      <div className="image">
                        <img
                          src={img}
                          alt="client"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="client-box col-lg-12">
            <div className="swiper client-h2-slider">
              <div className="swiper-wrapper">
                {clients
                  .slice()
                  .reverse()
                  .concat(clients)
                  .map((img, index) => (
                    <div key={index} className="swiper-slide client-block">
                      <div className="inner-block">
                        <div className="image">
                          <img
                            src={img}
                            alt="client"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}