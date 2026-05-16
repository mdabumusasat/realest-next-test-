"use client";
import React from "react";

export default function WhyChooseUsSectionTwo() {
  return (
    <>
      <section className="why-choose-us-section-two">
        <div className="bg-shape">
          <img src="/assets/images/icons/shape-15.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <div className="h6 sub-title">Why choose Us</div>
            <div className="h2 title char-animation">
              What Makes Our Company Most Deferent
            </div>
          </div>
          <div className="row">
            <div className="image-column col-xl-6">
              <div className="inner-column">
                <div className="image wow reveal-top tm-gsap-img-parallax overflow-hidden">
                  <img
                    src="/assets/images/resource/wcu2-1.jpg"
                    alt="why choose us"
                  />
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <img src="/assets/images/icons/wcu2-1.png" alt="" />
                  </div>
                  <span>
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg">
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
              </div>
            </div>
            <div className="content-column col-xl-6">
              <div className="inner-column">
                <div className="why-choose-us-block">
                  <div className="inner-block">
                    <div className="icon">
                      <i className="flaticon-set-residential"></i>
                    </div>
                    <div className="content">
                      <div className="h4 title">Research & Planning</div>
                      <div className="text">
                        Develop high-quality, engaging content tailored to your audience. Post regularly, engage
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-choose-us-block">
                  <div className="inner-block">
                    <div className="icon">
                      <i className="flaticon-set-agreement"></i>
                    </div>
                    <div className="content">
                      <div className="h4 title">Design & Development Idea</div>
                      <div className="text">
                        Develop high-quality, engaging content tailored to your audience. Post regularly, engage
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-choose-us-block">
                  <div className="inner-block">
                    <div className="icon">
                      <i className="flaticon-set-property-1"></i>
                    </div>
                    <div className="content">
                      <div className="h4 title">Testing & Quality Checking</div>
                      <div className="text">
                        Develop high-quality, engaging content tailored to your audience. Post regularly, engage
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-choose-us-block">
                  <div className="inner-block">
                    <div className="icon">
                      <i className="flaticon-set-architecture"></i>
                    </div>
                    <div className="content">
                      <div className="h4 title">Project Delivered</div>
                      <div className="text">
                        Develop high-quality, engaging content tailored to your audience. Post regularly, engage
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