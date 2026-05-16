"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: 1,
    title: "Construction Management",
    icon: "flaticon-set-residential",
    image: "/assets/images/resource/service2-1.jpg",
  },
  {
    id: 2,
    title: "Architecture & Design",
    icon: "flaticon-set-accomodation",
    image: "/assets/images/resource/service2-2.jpg",
  },
  {
    id: 3,
    title: "Investment & Capital",
    icon: "flaticon-set-blueprint",
    image: "/assets/images/resource/service2-3.jpg",
  },
  {
    id: 4,
    title: "Construction Management",
    icon: "flaticon-set-investment",
    image: "/assets/images/resource/service2-5.jpg",
  },
  {
    id: 5,
    title: "Property Rentals Services",
    icon: "flaticon-set-residential",
    image: "/assets/images/resource/service2-5.jpg",
  },
];

const clients = [
  "/assets/images/icons/client1-1.png",
  "/assets/images/icons/client1-2.png",
  "/assets/images/icons/client1-3.png",
  "/assets/images/icons/client1-4.png",
  "/assets/images/icons/client1-5.png",
    "/assets/images/icons/client1-2.png",
  "/assets/images/icons/client1-3.png",
];

const ServicesTwo = () => {
  return (
    <section className="services-section-two">
      <div className="outer-box">
        <div className="bg bg-image">
          <img
            src="/assets/images/resource/service2-1.png"
            alt="bg"
          />
        </div>
        <div className="auto-container">
          <div className="sec-title light">
            <h6 className="sub-title">Our Services</h6>
            <h2 className="title">Check Out Our Key Services</h2>
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
          className="service-h1-slider">
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div className="service-block-two">
                <div className="inner-block">
                  <div className="content">
                    <div className="icon-box">
                      <div className="icon">
                        <i className={service.icon}></i>
                      </div>
                      <div className="count">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h4 className="title">
                      <Link href="/page-service-details">
                        {service.title}
                      </Link>
                    </h4>
                    <p className="text">
                      Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                    </p>
                  </div>
                  <div className="images-box">
                    <Link href="/page-service-details" className="btn-icon-style">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="image">
                      <img
                        src={service.image}
                        alt={service.title}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrow-box">
          <div className="slider-prev">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="slider-next">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="auto-container">
          <div className="client-box">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                320: { slidesPerView: 2 },
                565: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 5 },
              }}
              className="client-h1-slider"
            >
              {clients.map((logo, i) => (
                <SwiperSlide key={i}>
                  <div className="client-block">
                    <div className="inner-block">
                      <div className="image">
                        <img
                          src={logo}
                          alt="client"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;