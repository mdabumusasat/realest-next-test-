"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      {/* start faq-section */}
      <section className="faq-section">
        <div className="shape-1">
          <img src="/assets/images/icons/shape-9.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6">
              <div className="inner-coloumn wow fadeInUp" data-wow-delay="200ms">
                <div className="sec-title">
                  <div className="h6 sub-title">FAQ’s</div>
                  <div className="h2 title">
                    From basics to details everything answered
                  </div>
                  <div className="text">
                    We are all passionate and committed to deliver high quality services to our clients
                  </div>
                </div>
                <div className="info-box">
                  <div className="inner-box">
                    <div className="bg-image">
                      <img src="/assets/images/icons/shape-8.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="icon">
                        <i className="fa-solid fa-circle-question"></i>
                      </div>
                      <div className="content">
                        <div className="h4 title">Still have questions?</div>
                        <div className="text">
                          Can’t find the answer you’re looking for? Please chat to our friendly team!
                        </div>
                      </div>
                    </div>
                    <Link className="theme-btn btn-style-three" href="/page-contact">
                      <span className="btn-title">Get in touch</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-column col-xl-6 col-lg-10">
              <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
                <div className="faq-box">
                  <div className="inner-box">
                    <ul className="accordion-box">
                      <li className={`accordion block ${activeIndex === 0 ? "active-block" : ""}`}>
                        <div
                          className={`acc-btn ${activeIndex === 0 ? "active" : ""}`}
                          onClick={() => toggle(0)}>
                          What is a single property listing?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 0 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                      <li className={`accordion block ${activeIndex === 1 ? "active-block" : ""}`}>
                        <div
                          className={`acc-btn ${activeIndex === 1 ? "active" : ""}`}
                          onClick={() => toggle(1)}
                        >
                          What information is included in a single property listing?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 1 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

                      {/* 3 */}
                      <li className={`accordion block ${activeIndex === 2 ? "active-block" : ""}`}>
                        <div
                          className={`acc-btn ${activeIndex === 2 ? "active" : ""}`}
                          onClick={() => toggle(2)}
                        >
                          Can I add a virtual tour or drone video?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 2 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

                      {/* 4 */}
                      <li className="accordion block">
                        <div className="acc-btn" onClick={() => toggle(3)}>
                          How do I know the property price is fair?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 3 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

                      {/* 5 */}
                      <li className="accordion block">
                        <div className="acc-btn" onClick={() => toggle(4)}>
                          How do I schedule a tour for the property?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 4 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

                      {/* 6 */}
                      <li className="accordion block">
                        <div className="acc-btn" onClick={() => toggle(5)}>
                          Can I buy the property through bank loan?
                          <i className="icon fa-solid fa-chevron-down"></i>
                        </div>
                        {activeIndex === 5 && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">
                                Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

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