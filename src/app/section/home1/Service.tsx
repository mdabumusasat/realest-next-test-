"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Smart Home System",
    icon: "flaticon-set-property",
    image: "/assets/images/resource/service3-1.jpg",
  },
  {
    id: 2,
    title: "Solar Energy Panels",
    icon: "flaticon-set-management",
    image: "/assets/images/resource/service3-2.jpg",
  },
  {
    id: 3,
    title: "Central Air Conditioning",
    icon: "flaticon-set-house-design",
    image: "/assets/images/resource/service3-3.jpg",
  },
  {
    id: 4,
    title: "Investment Consulting",
    icon: "flaticon-set-building",
    image: "/assets/images/resource/service3-4.jpg",
  },
  {
    id: 5,
    title: "Reasonable Price",
    icon: "flaticon-set-investment",
    image: "/assets/images/resource/service3-5.jpg",
  },
];

const ServicesThree = () => {
  return (
    <section className="services-section-three">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-1.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="row row-cols-xl-5 row-cols-md-2 row-cols-sm-1 row-cols-1 gx-4">
          {services.map((service) => (
            <div className="column col" key={service.id}>
              <div className="service-block-three">
                <div className="inner-block">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h4 className="title">
                    <Link href="/page-service-details">
                      {service.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}{" "}
                          {(i === 1 || i === 2) && <br />}
                        </React.Fragment>
                      ))}
                    </Link>
                  </h4>
                  <div className="image">
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesThree;