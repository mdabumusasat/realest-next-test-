"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamSectionThree() {
  const team = [
    {
      name: "Arlene McCoy",
      role: "Managing Director",
      img: "/assets/images/resource/team1-1.png",
    },
    {
      name: "Ralph Edwards",
      role: "Chief Executive",
      img: "/assets/images/resource/team1-2.png",
    },
    {
      name: "Wade Worren",
      role: "Principal & CEO",
      img: "/assets/images/resource/team1-3.png",
    },
    {
      name: "Albert Flores",
      role: "CEO-Founder",
      img: "/assets/images/resource/team1-4.png",
    },
  ];

  return (
    <section className="team-section-three">
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title">
            <div className="h6 sub-title">Our Leaders</div>
            <div className="h2 title">
              Get to Know our leadership team
            </div>
          </div>
          <div className="arrow-box">
            <div className="team-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="team-next">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}>
          {team.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="team-block">
                <div className="inner-block">
                  <div className="images-box">
                    <div className="image">
                      <img src={item.img} alt={item.name} />
                    </div>

                    {/* Optional SVG (same as your design) */}
                    <svg
                      className="shape"
                      width="304"
                      height="543"
                      viewBox="0 0 304 543"
                      fill="none" >
                      <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                    </svg>
                    <ul className="social-link">
                      <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                  <div className="author-info">
                    <div className="h4 name">{item.name}</div>
                    <div className="designation">{item.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}