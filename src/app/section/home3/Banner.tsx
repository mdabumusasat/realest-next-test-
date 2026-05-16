"use client";
import React from "react";
import Link from "next/link";

export default function BannerSectionThree() {
  return (
    <section className="banner-section-three">
      <div className="outer-box">
        <div className="bg-image">
          <img
            src="/assets/images/banner/banner3-1.png"
            alt="banner bg"
          />
        </div>
        <div className="icon-box">
          <div className="icon">
            <img
              src="/assets/images/icons/wcu2-1.png"
              alt="icon"
            />
          </div>
          <span>
            <svg width="200" height="200" viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                />
              </defs>
              <text letterSpacing="6" textAnchor="middle">
                <textPath href="#circlePath" startOffset="50%">
                  25 years of experience - 25 years of experience
                </textPath>
              </text>
            </svg>
          </span>
        </div>
        <div className="row">
          <div className="content-column col-lg-6">
            <div className="inner-column">
              <div className="title-style wow fadeInUp" data-wow-delay="200ms">
                Property
              </div>
              <div
                className="h1 banner-title wow fadeInUp"
                data-wow-delay="400ms">
                Start your property journey with confidence today
              </div>
              <div className="text wow fadeInUp" data-wow-delay="600ms">
                The talent at kimono runs wide range of services. Across many markets, geographies & typologies, our team members are some of the finest people of photographers in the industry wide and deep
              </div>
              <Link
                className="theme-btn btn-style-two wow fadeInUp"
                data-wow-delay="600ms"
                href="/page-contact">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span className="btn-title">Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="image-column col-lg-6">
            <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
              <div className="image">
                <img
                  src="/assets/images/banner/banner3-1.jpg"
                  alt="banner image"
                />
              </div>
              <div className="feature-block">
                <div className="inner-block">
                  <div className="icon">
                    <i className="flaticon-set-building-1"></i>
                  </div>
                  <div className="h4 title">Research & Planning</div>
                  <div className="text">
                    Our diverse community spans the globe, bringing together
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}