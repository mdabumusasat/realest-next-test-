"use client";
import React from "react";
import Link from "next/link";

export default function ProjectSectionTwo() {
  return (
    <>
      <section className="project-section-two">
        <div className="shape-1 bounce-y">
          <img src="/assets/images/icons/shape-16.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="h6 sub-title">Our Projects</div>
            <div className="h2 title">Showcasing Your Projects</div>
          </div>
          <div className="row gx-3">
            <div className="col-md-6">
              <div className="project-box1 wow fadeInUp" data-wow-delay=".1s">
                <div className="inner-box">
                  <div className="thumb">
                    <img
                      src="/assets/images/resource/project1-1.jpg"
                      alt="project"
                    />
                    <img
                      src="/assets/images/resource/project1-1.jpg"
                      alt="project hover"
                    />
                    <Link href="/page-project-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="tag">Cornerstone</div>
                  </div>
                  <div className="content">
                    <div className="catogory-box">
                      <Link href="/page-project-details">Tokyo, Japan</Link>
                    </div>
                    <div className="h4 title">
                      <Link href="/page-project-details">
                        Vista Residences at Councill Square
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-box1 wow fadeInUp" data-wow-delay=".2s">
                <div className="inner-box">
                  <div className="thumb">
                    <img
                      src="/assets/images/resource/project1-2.jpg"
                      alt="project"
                    />
                    <img
                      src="/assets/images/resource/project1-2.jpg"
                      alt="project hover"
                    />
                    <Link href="/page-project-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="tag">Foundation</div>
                  </div>
                  <div className="content">
                    <div className="catogory-box">
                      <Link href="/page-project-details">Miami, Florida</Link>
                    </div>
                    <div className="h4 title">
                      <Link href="/page-project-details">
                        Councill Square Panorama Residences
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-box1 wow fadeInUp" data-wow-delay=".3s">
                <div className="inner-box">
                  <div className="thumb">
                    <img
                      src="/assets/images/resource/project1-3.jpg"
                      alt="project"
                    />
                    <img
                      src="/assets/images/resource/project1-3.jpg"
                      alt="project hover"
                    />
                    <Link href="/page-project-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="tag">Pinnacle</div>
                  </div>
                  <div className="content">
                    <div className="catogory-box">
                      <Link href="/page-project-details">Paris, France</Link>
                    </div>
                    <div className="h4 title">
                      <Link href="/page-project-details">
                        The Grand Vista at Councill Square
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-box1 wow fadeInUp" data-wow-delay=".4s">
                <div className="inner-box">
                  <div className="thumb">
                    <img
                      src="/assets/images/resource/project1-4.jpg"
                      alt="project"
                    />
                    <img
                      src="/assets/images/resource/project1-4.jpg"
                      alt="project hover"
                    />
                    <Link href="/page-project-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="tag">Sanctum</div>
                  </div>
                  <div className="content">
                    <div className="catogory-box">
                      <Link href="/page-project-details">London, UK</Link>
                    </div>
                    <div className="h4 title">
                      <Link href="/page-project-details">
                        Apartment Complex
                      </Link>
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