"use client";
import React from "react";
import Link from "next/link";
import CounterUp from '../../components/elements/CounterUp';

const counters = [
  { value: 15 },  
];

export default function AboutSectionThree() {
  return (
    <section className="about-section-three">
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape-20.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">About US</div>
          <div className="h2 title char-animation">
            Premier private real estate investors and operators.
          </div>
        </div>
        <div className="row">
          <div className="image-column col-lg-4">
            <div className="inner-column one wow fadeInUp" data-wow-delay="200ms">
              <div className="image">
                <img
                  src="/assets/images/resource/about3-1.jpg"
                  alt="about image"
                />
              </div>
              <div className="counter-box">
                <div className="h2 count-box">
                  <span className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                  +
                </div>
                <div className="h5 title">
                  Years Of <br /> Experience
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-lg-4">
            <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
              <div className="h4 title">
                The foremost privately held firm in global real estate investment and management.
              </div>
              <div className="text">
                The talent at kimono runs wide range of services. Across many markets, geographies & typologies, our team members are some of the finest people of photographers in the industry wide and deep. From Across many markets, geographies & boundaries. Hire Kimono in your event. our team members are some of the finest people.
              </div>
              <Link className="theme-btn btn-style-two" href="/page-about">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span className="btn-title">Learn More</span>
              </Link>
            </div>
          </div>
          <div className="image-column col-lg-4">
            <div className="inner-column two wow fadeInUp" data-wow-delay="600ms">
              <div className="image">
                <img
                  src="/assets/images/resource/about3-2.jpg"
                  alt="about image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}