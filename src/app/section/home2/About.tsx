"use client";
import React, { useEffect, useState } from "react";

export default function AboutSectionTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 15;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 50);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="about-section-two">
        <div className="shape-1 bounce-x">
          <img src="/assets/images/icons/shape-13.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-7">
              <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
                <div className="sec-title">
                  <div className="h6 sub-title">Who we are</div>
                  <div className="h2 title char-animation">
                    The foremost privately held firm in global real estate investment
                  </div>
                </div>
                <div className="bottom-box">
                  <div className="inner-box">
                    <div className="counter-box">
                      <div className="icon">
                        <img src="/assets/images/icons/shape-12.png" alt="" />
                      </div>
                      <div className="h2 count-box">
                        <span className="count-text">{count}</span>
                        <sup>+</sup>
                      </div>
                      <div className="h4 title">Years Of Experience</div>
                    </div>
                    <div className="image">
                      <img
                        src="/assets/images/resource/about2-1.jpg"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-5">
              <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
                <div className="image">
                  <img
                    src="/assets/images/resource/about2-2.jpg"
                    alt="about"
                  />
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur. Ac purus pharetra est et.
                  Dictum donec urna vitae in nibh. Pharetra id rhoncus eu viverra morbi maecenas aliquet in.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}