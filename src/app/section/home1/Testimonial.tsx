"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Tina Brown",
    role: "Designer",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
  },
  {
    id: 2,
    name: "Joan Cooper",
    role: "Clients of Company",
    image: "/assets/images/resource/testi1-2.jpg",
    text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Designer",
    image: "/assets/images/resource/testi1-3.jpg",
    text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="outer-box">
        <div className="shape-1">
          <img
            src="/assets/images/icons/shape-7.png"
            alt="shape"
          />
        </div>
        <div className="sec-title text-center">
          <h6 className="sub-title">Hear from customer</h6>
          <h2 className="title">
            Hear What Others Say About Partnering With Us
          </h2>
        </div>
        <div className="auto-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              el: ".testi-slider-dots",
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="testi-h1-slider"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <div className="testimonial-block">
                  <div className="inner-block">
                    <div className="quote-icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <div className="image-box">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src={item.image}
                            alt={item.name}
                          />
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
                        <p className="text">“ {item.text} ”</p>
                        <div className="author-info">
                          <h4 className="name">
                            <Link href="/page-testimonial">
                              {item.name}
                            </Link>
                          </h4>
                          <span className="designation">
                            {item.role}
                          </span>
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
};

export default TestimonialSection;