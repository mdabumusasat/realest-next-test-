"use client";
import React from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Tina Brown",
    designation: "Designer",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
  },
  {
    name: "Joan Cooper",
    designation: "Clients of Company",
    image: "/assets/images/resource/testi1-2.jpg",
    text: "I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website.",
  },
];

export default function TestimonialSectionTwo() {
  return (
    <section
      className="testimonial-section-two pt-100 pb-100"
      style={{ backgroundColor: "#F6F3EC" }}>
      <div className="auto-container">
        <div className="row">
          {testimonials.map((item, index) => (
            <div className="testimonial-block col-xl-6" key={index}>
              <div className="inner-block">
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="image-box">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i className="fa-solid fa-star" key={i}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="text">“ {item.text} ”</div>
                    <div className="author-info">
                      <h4 className="name">
                        <Link href="/page-testimonial">{item.name}</Link>
                      </h4>
                      <div className="designation">{item.designation}</div>
                    </div>
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