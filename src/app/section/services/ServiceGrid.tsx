"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: (
      <>
        Property Buying & <br /> Selling
      </>
    ),
    img: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-set-investment",
    delay: "200ms",
  },
  {
    id: 2,
    title: (
      <>
        Property Rentals <br /> Services
      </>
    ),
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-set-building-2",
    delay: "400ms",
  },
  {
    id: 3,
    title: (
      <>
        Property <br /> Management
      </>
    ),
    img: "/assets/images/resource/service1-3.jpg",
    icon: "flaticon-set-location",
    delay: "600ms",
  },
  {
    id: 4,
    title: (
      <>
        Market <br /> Analysis
      </>
    ),
    img: "/assets/images/resource/service1-3.jpg",
    icon: "fa-solid fa-chart-area",
    delay: "600ms",
  },
  {
    id: 5,
    title: (
      <>
        Property Rentals <br /> Services
      </>
    ),
    img: "/assets/images/resource/service1-2.jpg",
    icon: "flaticon-set-location",
    delay: "400ms",
  },
  {
    id: 6,
    title: (
      <>
        Property Buying & <br /> Selling
      </>
    ),
    img: "/assets/images/resource/service1-1.jpg",
    icon: "flaticon-set-investment",
    delay: "200ms",
  },
];

export default function ServicesSectionTwo() {
  return (
    <section className="services-section-two pt-100 pb-100">
      <div className="auto-container">
        <div className="row gx-3">
          {services.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div
                className="service-block wow fadeInUp"
                data-wow-delay={item.delay}>
                <div className="inner-block">
                  <div className="image position-relative">
                    <img
                      src={item.img}
                      alt="service"
                    />
                    <img
                      src={item.img}
                      alt="service"
                    />
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link href="/page-service-details">
                        {item.title}
                      </Link>
                    </h4>
                    <Link
                      href="/page-service-details"
                      className="btn-service-style">
                      Get Free Quote{" "}
                      <i className="icon-arrow far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}