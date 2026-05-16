"use client";
import React from "react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <>
      <section className="services-section">
        <div className="shape-1">
          <img src="/assets/images/icons/shape-14.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="h6 sub-title">what We do</div>
            <div className="h2 title char-animation">
              Explore our services
            </div>
          </div>
          <div className="row gx-3">
            <div className="col-xl-4 col-md-6">
              <div className="service-block wow fadeInUp" data-wow-delay="200ms">
                <div className="inner-block">
                  <div className="image">
                    <img
                      src="/assets/images/resource/service1-1.jpg"
                      alt="service"
                    />
                    <img
                      src="/assets/images/resource/service1-1.jpg"
                      alt="service hover"
                    />
                    <div className="icon">
                      <i className="flaticon-set-investment"></i>
                    </div>
                  </div>
                  <div className="content">
                    <div className="h4 title">
                      <Link href="/page-service-details">
                        Property Buying & <br /> Selling
                      </Link>
                    </div>
                    <Link className="btn-service-style" href="/page-contact">
                      Get Free Quote
                      <i className="icon-arrow far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-block wow fadeInUp" data-wow-delay="400ms">
                <div className="inner-block">
                  <div className="image">
                    <img
                      src="/assets/images/resource/service1-2.jpg"
                      alt="service"
                    />
                    <img
                      src="/assets/images/resource/service1-2.jpg"
                      alt="service hover"
                    />
                    <div className="icon">
                      <i className="flaticon-set-building-2"></i>
                    </div>
                  </div>
                  <div className="content">
                    <div className="h4 title">
                      <Link href="/page-service-details">
                        Property Rentals <br /> Services
                      </Link>
                    </div>
                    <Link className="btn-service-style" href="/page-contact">
                      Get Free Quote
                      <i className="icon-arrow far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-block wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-block">
                  <div className="image">
                    <img
                      src="/assets/images/resource/service1-3.jpg"
                      alt="service"
                    />
                    <img
                      src="/assets/images/resource/service1-3.jpg"
                      alt="service hover"
                    />
                    <div className="icon">
                      <i className="flaticon-set-location"></i>
                    </div>
                  </div>
                  <div className="content">
                    <div className="h4 title">
                      <Link href="/page-service-details">
                        Property <br /> Management
                      </Link>
                    </div>
                    <Link className="btn-service-style" href="/page-contact">
                      Get Free Quote
                      <i className="icon-arrow far fa-chevron-right"></i>
                    </Link>
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