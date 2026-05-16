"use client";
import React from "react";
import Link from "next/link";

const features = [
  {
    id: 1,
    icon: "flaticon-set-pencil-and-ruler",
    title: "Creative Solutions",
    desc: "In today's competitive business landscape, the need for efficient IT solutions has been more critical.",
  },
  {
    id: 2,
    icon: "flaticon-set-architect",
    title: "Actionable Solutions",
    desc: "In today's competitive business landscape, the need for efficient IT solutions has been more critical.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-2.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-xl-5 col-md-10">
            <div className="inner-column">
              <div className="images-box one">
                <div className="image">
                  <img
                    src="/assets/images/resource/about1-1.jpg"
                    alt="about"
                  />
                </div>
              </div>
              <div className="images-box two">
                <div className="image">
                  <img
                    src="/assets/images/resource/about1-2.jpg"
                    alt="about"
                  />
                </div>
              </div>
              <div className="info-box bounce-y">
                <h5>Skilled Team</h5>
                <div className="image">
                  <img
                    src="/assets/images/resource/about1-1.png"
                    alt="team"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-xl-7 col-lg-10">
            <div className="inner-column">
              <div className="sec-title">
                <h6 className="sub-title">About our company</h6>
                <h2 className="title">
                  The Foremost Privately Held Firm In Global Real Estate Investment And Management.
                </h2>
                <p className="text">
                  Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula,
                  eget egestas magna mi ut arcu. Phasellus nec odio orci. The foremost privately held firm in global real estate investment and management.
                </p>
              </div>
              {features.map((item) => (
                <div className="about-block" key={item.id}>
                  <div className="inner-block">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="content">
                      <h5 className="title">{item.title}</h5>
                      <p className="text">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bottom-box">
                <Link href="/page-about" className="theme-btn btn-style-two">
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <span className="btn-title">Read More</span>
                </Link>
                <div className="info-box">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="info">
                    <span>Call Anytime</span>
                    <Link href="#">+880 1750 050088</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;