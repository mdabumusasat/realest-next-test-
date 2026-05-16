"use client";
import React, { useState } from "react";

export default function FAQSectionThree() {
  const faqs = [
    {
      q: "What exactly does an HR consultant do?",
      a: "An HR consultant acts as an external expert who helps businesses solve people-related challenges and achieve their strategic goals. We provide specialized knowledge and hands-on support in areas like compliance talent management training performance",
    },
    {
      q: "What is the ROI of hiring an HR consultant?",
      a: "An HR consultant acts as an external expert who helps businesses solve people-related challenges and achieve their strategic goals. We provide specialized knowledge and hands-on support in areas like compliance talent management training performance",
    },
    {
      q: "How much does HR consulting cost?",
      a: "An HR consultant acts as an external expert who helps businesses solve people-related challenges and achieve their strategic goals. We provide specialized knowledge and hands-on support in areas like compliance talent management training performance",
    },
    {
      q: "Are there any long-term contracts?",
      a: "An HR consultant acts as an external expert who helps businesses solve people-related challenges and achieve their strategic goals. We provide specialized knowledge and hands-on support in areas like compliance talent management training performance",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section-three">
      <div className="outer-box">
        <div className="bg bg-image">
          <img src="/assets/images/resource/faq3-1.jpg" alt="" />
        </div>
        <div className="row">
          <div className="faq-column col-lg-7 offset-lg-5">
            <div className="inner-column">
              <div className="shape-1">
                <img src="/assets/images/icons/shape-26.png" alt="" />
              </div>
              <div className="sec-title light">
                <div className="h6 sub-title">FAQs</div>
                <div className="h2 title">
                  Everything You Need to Know Before You Buy or Sell
                </div>
              </div>
              <ul className="accordion-box">
                {faqs.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <li
                      key={index}
                      className={`accordion block ${isActive ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${isActive ? "active" : ""}`}
                        onClick={() => toggle(index)}
                      >
                        {item.q}
                        <i className="icon fa-solid fa-chevron-down"></i>
                      </div>

                      {isActive && (
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text">{item.a}</div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}