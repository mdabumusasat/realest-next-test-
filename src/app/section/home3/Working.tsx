"use client";
import React from "react";

export default function WorkingSection() {
const steps = [
  {
    step: "Step 01",
    title: (
      <>
        Search your <br /> Location
      </>
    ),
    img: "/assets/images/resource/work3-1.jpg",
    delay: "200ms",
  },
  {
    step: "Step 02",
    title: (
      <>
        Check out The <br /> Residence
      </>
    ),
    img: "/assets/images/resource/work3-2.jpg",
    delay: "400ms",
  },
  {
    step: "Step 03",
    title: (
      <>
        Search your <br /> Location
      </>
    ),
    img: "/assets/images/resource/work3-3.jpg",
    delay: "200ms",
  },
  {
    step: "Step 04",
    title: (
      <>
        Check out The <br /> Residence
      </>
    ),
    img: "/assets/images/resource/work3-4.jpg",
    delay: "400ms",
  },
];

  return (
    <section className="working-section">
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape-21.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Working step</div>
          <div className="h2 title char-animation">
            Effortless path to discover your ideal apartment
          </div>
        </div>
        <div className="row gx-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="working-block col-xl-3 col-md-6">
              <div
                className="inner-block wow fadeInUp"
                data-wow-delay={item.delay}>
                <div className="step-box">
                  <div className="count">{item.step}</div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="image">
                  <img
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="h4 title">
                  {item.title}
                </div>
                <div className="text">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}