"use client";
import React from "react";
import Link from "next/link";

export default function ProjectSectionThree() {
  const projects = [
    {
      id: 1,
      title: "Vista Residences at Councill Square",
      desc: "It is a long established fact that a reader will be distracted by the readable content simply free lorem ipsum text.",
      img: "/assets/images/resource/project3-1.jpg",
    },
    {
      id: 2,
      title: "Councill Square Panorama Residences",
      desc: "It is a long established fact that a reader will be distracted by the readable content simply free lorem ipsum text.",
      img: "/assets/images/resource/project3-2.jpg",
    },
    {
      id: 3,
      title: "The Grand Vista at Councill Square",
      desc: "It is a long established fact that a reader will be distracted by the readable content simply free lorem ipsum text.",
      img: "/assets/images/resource/project3-3.jpg",
    },
  ];

  return (
    <section className="project-section-three">
      <div className="shape-1 bounce-y">
        <img src="/assets/images/icons/shape-23.png" alt="shape" />
      </div>

      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Our Projects</div>
          <div className="h2 title char-animation">
            Show casing Your Projects
          </div>
        </div>

        <div className="row">
          {projects.map((item) => (
            <div key={item.id} className="project-block-two col-lg-12">
              <div className="inner-block">
                <div className="bg-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="content-box">
                  <Link
                    href="/page-project-details"
                    className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <div className="h4 title">
                    <Link href="/page-project-details">
                      {item.title}
                    </Link>
                  </div>

                  <div className="text">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="btn-box col-lg-12">
            <Link
              href="/page-contact"
              className="theme-btn btn-style-two">
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <span className="btn-title">View All Property</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}