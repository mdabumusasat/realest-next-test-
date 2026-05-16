"use client";
import Link from "next/link";
import React, { useState } from "react";


export default function FaqSectionTwo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      title: "1. What services does your agency offer?",
      content:
        "We go beyond job boards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screboards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screening tools.We go beyond job mapping",
    },
    {
      id: 2,
      title: "2. What is your typical time-to-fill for roles?",
      content:
        "We go beyond job boards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screboards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screening tools.We go beyond job mapping",
    },
    {
      id: 3,
      title: "3. Do you offer a guarantee on your placements?",
      content:
        "We go beyond job boards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screboards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screening tools.We go beyond job mapping",
    },
    {
      id: 4,
      title: "4. Can we customize a package to fit our budget?",
      content:
        "We go beyond job boards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screboards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screening tools.We go beyond job mapping",
    },
    {
      id: 5,
      title: "5. Can you support remote or international hiring?",
      content:
        "We go beyond job boards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screboards. Our process includes proactive talent mapping leveraging our extensive network, and using advanced screening tools.We go beyond job mapping",
    },
  ];

  return (
    <>
      <section className="faq-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6">
              <div className="inner-coloumn wow fadeInUp" data-wow-delay="200ms">
                <div className="sec-title">
                  <div className="h6 sub-title">asked Question</div>
                  <div className="h2 title char-animation">
                    All essential property doubts clarified
                  </div>
                </div>
                <div className="info-box">
                  <div className="image">
                    <img
                      src="/assets/images/resource/faq2-1.jpg"
                      alt="faq"
                    />
                  </div>
                  <div className="content">
                    <div className="h4 title">
                      Have Any Question on Your Minds?
                    </div>
                    <Link className="theme-btn btn-style-four" href="/page-faq">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span className="btn-title">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-column col-xl-6">
              <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
                <div className="faq-box">
                  <div className="inner-box">
                    <ul className="accordion-box">
                      {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                          <li
                            key={faq.id}
                            className={`accordion block ${
                              isActive ? "active-block" : ""
                            }`}>
                            <div
                              className={`acc-btn ${
                                isActive ? "active" : ""
                              }`}
                              onClick={() =>
                                setActiveIndex(isActive ? -1 : index)
                              }
                              style={{ cursor: "pointer" }}>
                              {faq.title}
                              <i className="icon fa-solid fa-chevron-down"></i>
                            </div>
                            <div
                              className={`acc-content ${
                                isActive ? "current" : ""
                              }`}>
                              {isActive && (
                                <div className="content">
                                  <div className="text">{faq.content}</div>
                                </div>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
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