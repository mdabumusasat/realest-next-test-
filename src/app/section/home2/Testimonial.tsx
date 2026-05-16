"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSectionTwo() {

  const testimonials = [
    {
      id: 1,
      text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
      name: "Tina Brown",
      role: "Designer",
      image: "/assets/images/resource/testi1-1.jpg",
      link: "/page-testimonial",
    },
    {
      id: 2,
      text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
      name: "Joan Cooper",
      role: "Clients of Company",
      image: "/assets/images/resource/testi1-2.jpg",
      link: "/page-testimonial",
    },
    {
      id: 3,
      text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
      name: "David Smith",
      role: "Designer",
      image: "/assets/images/resource/testi1-3.jpg",
      link: "/page-testimonial",
    },
  ];

  return (
    <section className="testimonial-section-two">
      <div className="outer-box">
        <div className="shape-1">
          <img src="/assets/images/icons/shape-17.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="sec-title-box">
            <div className="sec-title light">
              <div className="h6 sub-title">Customer Feedback</div>
              <div className="h2 title char-animation">
                Hear What Others Say About Partnering With Us
              </div>
            </div>
            <div className="arrow-box">
              <button className="testi-slide-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="testi-slide-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            pagination={{
              el: ".testi-slider-dots",
              clickable: true,
            }}
            navigation={{
              prevEl: ".testi-slide-prev",
              nextEl: ".testi-slide-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1200: { slidesPerView: 2 },
            }}
            className="testi-h1-slider overflow-hidden"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-block">
                  <div className="inner-block style-two">
                    <div className="quote-icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <div className="image-box">
                      <div className="inner-box">
                        <div className="image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="content-box">
                      <div className="inner-box">
                        <div className="text">“ {item.text} ”</div>
                        <div className="author-info">
                          <div className="h4 name">
                            <Link href={item.link}>{item.name}</Link>
                          </div>
                          <div className="designation">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testi-slider-dots"></div>
        </div>
      </div>
    </section>
  );
}