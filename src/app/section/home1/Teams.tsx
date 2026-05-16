"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    id: 1,
    name: "Arlene McCoy",
    role: "Managing Director",
    image: "/assets/images/resource/team1-1.png",
  },
  {
    id: 2,
    name: "Ralph Edwards",
    role: "Chief Executive",
    image: "/assets/images/resource/team1-2.png",
  },
  {
    id: 3,
    name: "Wade Warren",
    role: "Principal & CEO",
    image: "/assets/images/resource/team1-3.png",
  },
  {
    id: 4,
    name: "Albert Flores",
    role: "CEO-Founder",
    image: "/assets/images/resource/team1-4.png",
  },
    {
    id: 5,
    name: "Arlene McCoy",
    role: "Managing Director",
    image: "/assets/images/resource/team1-1.png",
  },
  {
    id: 6,
    name: "Ralph Edwards",
    role: "Chief Executive",
    image: "/assets/images/resource/team1-2.png",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-6.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title">
            <h6 className="sub-title">Our Leaders</h6>
            <h2 className="title">
              Get to Know our leadership team
            </h2>
          </div>
          <div className="arrow-box">
            <div className="team-h1-slider-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="team-h1-slider-next">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: ".team-h1-slider-prev",
          nextEl: ".team-h1-slider-next",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 4 },
        }}
        className="team-h1-slider">
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="team-block">
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <svg
                    className="shape"
                    width="304"
                    height="543"
                    viewBox="0 0 304 543"
                    fill="none">
                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                  </svg>
                  <ul className="social-link">
                    <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                  </ul>
                </div>
                <div className="author-info">
                  <div className="inner-box">
                    <h4 className="name">
                      <Link href="/page-team-details">
                        {member.name}
                      </Link>
                    </h4>
                    <span className="designation">
                      {member.role}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;