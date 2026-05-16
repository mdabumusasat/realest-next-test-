"use client";
import React from "react";
import Link from "next/link";

export default function BannerSectionTwo() {
  return (
    <>
      <section className="banner-section-two">
        <div className="outer-box">
          <div className="banner-bg-box">
            <div className="swiper-container banner-h2-slider pb-0">
              <div className="swiper-wrapper">
                <div className="banner-bg swiper-slide">
                  <img
                    src="/assets/images/banner/banner2-1.jpg"
                    alt="banner"
                  />
                </div>
                <div className="banner-bg swiper-slide">
                  <img
                    src="/assets/images/banner/banner2-2.jpg"
                    alt="banner"
                  />
                </div>
                <div className="banner-bg swiper-slide">
                  <img
                    src="/assets/images/banner/banner2-1.jpg"
                    alt="banner"
                  />
                </div>
                <div className="banner-bg swiper-slide">
                  <img
                    src="/assets/images/banner/banner2-2.jpg"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-content">
            <div className="auto-container">
              <div className="row">
                <div className="banner-block-two col-xl-8">
                  <div className="inner-block">
                    <div className="h1 title wow fadeInUp" data-wow-delay="200ms">
                      Building Tomorrow with Unmatched Quality
                    </div>
                    <div className="text wow fadeInUp" data-wow-delay="400ms">
                      We create iconic real estate developments that provide enduring value to investors and communities
                    </div>
                    <Link
                      className="theme-btn btn-style-four wow fadeInUp"
                      data-wow-delay="600ms"
                      href="/page-contact">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span className="btn-title">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-box">
              <div className="auto-container">
                <div className="row gx-3">
                  <div className="feature-block col-xl-4 col-md-6">
                    <div className="inner-block">
                      <div className="icon">
                        <i className="flaticon-set-building-plan"></i>
                      </div>
                      <div className="h4 title">Research & Planning</div>
                      <div className="text">
                        Our diverse community spans the globe, bringing together
                      </div>
                    </div>
                  </div>
                  <div className="feature-block col-xl-4 col-md-6">
                    <div className="inner-block">
                      <div className="icon">
                        <i className="flaticon-set-building-2"></i>
                      </div>
                      <div className="h4 title">Design & Development</div>
                      <div className="text">
                        Our diverse community spans the globe, bringing together
                      </div>
                    </div>
                  </div>
                  <div className="feature-block col-xl-4 col-md-6">
                    <div className="inner-block">
                      <div className="icon">
                        <i className="flaticon-set-investment"></i>
                      </div>
                      <div className="h4 title">Quality Checking</div>
                      <div className="text">
                        Our diverse community spans the globe, bringing together
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}