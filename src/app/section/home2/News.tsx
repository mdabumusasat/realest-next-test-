"use client";
import React from "react";
import Link from "next/link";

export default function BlogSectionTwo() {
  const blogs = [
    {
      id: 1,
      date: "May 7, 2026",
      title:
        "Converting Clicks into Clients: Strategies from Agencies",
      image: "/assets/images/resource/blog1-1.jpg",
      link: "/news-details",
    },
    {
      id: 2,
      date: "May 7, 2026",
      title: "Driving Tangible Results: How Agencies Convert",
      image: "/assets/images/resource/blog1-2.jpg",
      link: "/news-details",
    },
    {
      id: 3,
      date: "May 7, 2026",
      title: "Traffic to Customers: How Leading Agencies Succeed",
      image: "/assets/images/resource/blog1-3.jpg",
      link: "/news-details",
    },
  ];

  return (
    <>
      <section className="blog-section-two pt-0 pb-0">
        <div className="outer-box">
          <div className="shape-1 bounce-y">
            <img src="/assets/images/icons/shape-18.png" alt="" />
          </div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="h6 sub-title">News & Articles</div>
              <div className="h2 title">
                Experience new inspirations and movements
              </div>
            </div>
            <div className="row gx-3">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-block col-xl-4 col-md-6">
                  <div className="inner-block">
                    <div className="image-box">
                      <div className="image">
                        <img
                          src={blog.image}
                          alt={blog.title}
                        />
                        <img
                          src={blog.image}
                          alt={blog.title}
                        />
                      </div>
                      <Link href={blog.link} className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="sub-title">
                        <span>{blog.date}</span>No Comments
                      </div>
                      <div className="h4 title">
                        <Link href={blog.link}>{blog.title}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}