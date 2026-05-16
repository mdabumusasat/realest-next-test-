"use client";
import React from "react";
import Link from "next/link";

const awards = [
  {
    id: 1,
    year: "2026",
    title: "Best Real Estate Agency",
    status: "Winner",
  },
  {
    id: 2,
    year: "2026",
    title: "Property Consultant Award",
    status: "Mentioned",
  },
  {
    id: 3,
    year: "2026",
    title: "Best Customer Service",
    status: "Mentioned",
  },
  {
    id: 4,
    year: "2026",
    title: "Project of the Year",
    status: "Winner",
  },
];

const AwardSection = () => {
  return (
    <section className="award-section-one">
      <div className="outer-box">
        <div className="shape-1">
          <img
            src="/assets/images/icons/shape-5.png"
            alt="shape"
          />
        </div>
        <div className="auto-container">
          <div className="sec-title-box">
            <div className="sec-title">
              <h6 className="sub-title">Our Awards</h6>
              <h2 className="title">
                Awards And Industry Recognition For Excellence
              </h2>
            </div>
            <p className="text">
              We design impactful built environments in fields ranging from
              energy and healthcare to entertainment and data centers,
              striving to elevate your project beyond expectations.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="image-column col-lg-3">
              <div className="image">
                <img
                  src="/assets/images/resource/award1-1.png"
                  alt="award"
                />
              </div>
            </div>
            <div className="content-column col-lg-9">
              <div className="inner-column">
                {awards.map((award) => (
                  <div className="award-block" key={award.id}>
                    <div className="inner-block">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                          <div className="left-side">
                            <span className="count">{award.year}</span>
                            <h4 className="title">{award.title}</h4>
                          </div>
                        </div>
                        <div className="offset-xxl-1 col-lg-5 col-md-4">
                          <div className="right-side">
                            <span className="text">{award.status}</span>
                            <Link
                              href="/page-service-details"
                              className="link-btn"
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;