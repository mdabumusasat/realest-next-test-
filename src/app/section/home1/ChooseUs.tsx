"use client";
import React from "react";
import Link from "next/link";

const features = [
  "At vero eos et accusamus et iusto odio.",
  "Sed ut perspiciatis unde omnis iste natus sit.",
  "Established fact that a reader will be distracted.",
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="outer-box">
        <div className="shape-1">
          <img
            src="/assets/images/icons/shape-4.png"
            alt="shape"
          />
        </div>
        <div className="image-column">
          <div className="image overflow-hidden">
            <img
              src="/assets/images/resource/wcu1-1.jpg"
              alt="why choose us"
            />
          </div>
        </div>
        <div className="content-column">
          <div className="inner-column">
            <div className="sec-title light">
              <h6 className="sub-title">Why choose Us</h6>
              <h2 className="title">
                Premium Amenities Crafted For Modern Living
              </h2>
            </div>
            <p className="text">
              We design impactful built environments in fields ranging from
              energy and healthcare to entertainment and data centers,
              striving to elevate your project beyond expectations.
            </p>
            <ul className="list-style-one">
              {features.map((item, index) => (
                <li key={index}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/page-about" className="theme-btn btn-style-two">
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <span className="btn-title">Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;