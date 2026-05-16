"use client";
import React from "react";
import Link from "next/link";

export default function BlogSection() {
  return (
    <>
      <section className="blog-section pt-0 pb-0">
        <div className="outer-box">
          <div className="shape-1 bounce-x">
            <img src="/assets/images/icons/shape-11.png" alt="" />
          </div>
          <div className="auto-container">
            <div className="sec-title-box">
              <div className="sec-title">
                <div className="h6 sub-title">News & Articles</div>
                <div className="h2 title">
                  Experience new inspirations and movements
                </div>
              </div>
              <Link className="theme-btn btn-style-one" href="/news-grid">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span className="btn-title">View All News</span>
              </Link>
            </div>
            <div className="row gx-3">
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block">
                  <div className="image-box">
                    <div className="image">
                      <img
                        src="/assets/images/resource/blog1-1.jpg"
                        alt="blog"
                      />
                      <img
                        src="/assets/images/resource/blog1-1.jpg"
                        alt="blog hover"
                      />
                    </div>
                    <Link href="/news-details" className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      By <span>kamrul</span> No Comments
                    </div>
                    <div className="h4 title">
                      <Link href="/news-details">
                        Converting Clicks into Clients: Strategies from Agencies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block">
                  <div className="image-box">
                    <div className="image">
                      <img
                        src="/assets/images/resource/blog1-2.jpg"
                        alt="blog"
                      />
                      <img
                        src="/assets/images/resource/blog1-2.jpg"
                        alt="blog hover"
                      />
                    </div>
                    <Link href="/news-details" className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      By <span>kamrul</span> No Comments
                    </div>
                    <div className="h4 title">
                      <Link href="/news-details">
                        Driving Tangible Results: How Agencies Convert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-block col-xl-4 col-md-6">
                <div className="inner-block">
                  <div className="image-box">
                    <div className="image">
                      <img
                        src="/assets/images/resource/blog1-3.jpg"
                        alt="blog"
                      />
                      <img
                        src="/assets/images/resource/blog1-3.jpg"
                        alt="blog hover"
                      />
                    </div>
                    <Link href="/news-details" className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      By <span>kamrul</span> No Comments
                    </div>
                    <div className="h4 title">
                      <Link href="/news-details">
                        Traffic to Customers: How Leading Agencies Succeed
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog-section */}
    </>
  );
}