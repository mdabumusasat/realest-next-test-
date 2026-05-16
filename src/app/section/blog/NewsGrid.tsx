"use client";
import React from "react";
import Link from "next/link";

interface BlogType {
  id: number;
  title: string;
  image: string;
  author: string;
}

export default function BlogSection() {
  const blogs: BlogType[] = [
    {
      id: 1,
      title: "Converting Clicks into Clients: Strategies from Agencies",
      image: "/assets/images/resource/blog1-1.jpg",
      author: "kamrul",
    },
    {
      id: 2,
      title: "Driving Tangible Results: How Agencies Convert",
      image: "/assets/images/resource/blog1-2.jpg",
      author: "kamrul",
    },
    {
      id: 3,
      title: "Traffic to Customers: How Leading Agencies Succeed",
      image: "/assets/images/resource/blog1-3.jpg",
      author: "kamrul",
    },
    {
      id: 4,
      title: "Traffic to Customers: How Leading Agencies Succeed",
      image: "/assets/images/resource/blog1-3.jpg",
      author: "kamrul",
    },
    {
      id: 5,
      title: "Driving Tangible Results: How Agencies Convert",
      image: "/assets/images/resource/blog1-2.jpg",
      author: "kamrul",
    },
    {
      id: 6,
      title: "Converting Clicks into Clients: Strategies from Agencies",
      image: "/assets/images/resource/blog1-1.jpg",
      author: "kamrul",
    },
  ];

  return (
    <section className="blog-section">
      <div className="auto-container">
        <div className="row gx-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-block col-xl-4 col-md-6">
              <div className="inner-block">
                <div className="image-box">
                  <div className="image">
                    <img src={blog.image} alt={blog.title} />
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <Link href="/news-details" className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <div className="sub-title">
                    By <span>{blog.author}</span> No Comments
                  </div>
                  <div className="h4 title">
                    <Link href="/news-details">
                      {blog.title}
                    </Link>
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