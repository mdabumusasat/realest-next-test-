"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSectionFour() {

  const services = [
    {
      id: 1,
      title: "Construction Management",
      desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur",
      icon: "flaticon-set-residential",
      image: "/assets/images/resource/service2-1.jpg",
    },
    {
      id: 2,
      title: "Architecture & Design",
      desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur",
      icon: "flaticon-set-accomodation",
      image: "/assets/images/resource/service2-2.jpg",
    },
    {
      id: 3,
      title: "Investment & Capital",
      desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur",
      icon: "flaticon-set-blueprint",
      image: "/assets/images/resource/service2-3.jpg",
    },
    {
      id: 4,
      title: "Real Estate Management",
      desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur",
      icon: "flaticon-set-investment",
      image: "/assets/images/resource/service2-5.jpg",
    },
    {
      id: 5,
      title: "Property Rentals Services",
      desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur",
      icon: "flaticon-set-residential",
      image: "/assets/images/resource/service2-5.jpg",
    },
  ];

  return (
    <section className="services-section-four">
      <div className="bg bg-image">
        <img src="/assets/images/icons/shape-22.png" alt="" />
      </div>
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title light">
            <div className="h6 sub-title">what We do</div>
            <div className="h2 title char-animation">
              Building exceptional infrastructure and real estate projects
            </div>
          </div>
          <div className="arrow-box">
            <div className="slider-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="slider-next">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="service-h3-slider pb-0">
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="service-block-two">
              <div className="inner-block">
                <div className="content">
                  <div className="icon-box">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="count">0{item.id}</div>
                  </div>

                  <div className="h4 title">
                    <Link href="/page-service-details">{item.title}</Link>
                  </div>

                  <div className="text">{item.desc}</div>
                </div>

                <div className="images-box">
                  <Link className="btn-icon-style" href="/page-service-details">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="image">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}