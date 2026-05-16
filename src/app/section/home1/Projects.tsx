"use client";
import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Development",
    title: "Apartment Building",
    image: "/assets/images/resource/project-h1-1.jpg",
  },
  {
    id: 2,
    category: "UX/UI Design",
    title: "Eden Estate",
    image: "/assets/images/resource/project-h1-2.jpg",
  },
  {
    id: 3,
    category: "Mobile Solution",
    title: "Vista at Councill Square",
    image: "/assets/images/resource/project-h1-3.jpg",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-3.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="sec-title text-center">
            <h6 className="sub-title">Our Gallery</h6>
            <h2 className="title">Displaying Your Creations</h2>
          </div>
        </div>
        <div className="project-h1_inner-container">
          {projects.map((project) => (
            <div className="project-block" key={project.id}>
              <div className="inner-block">
                <div className="content-box">
                  <div className="inner-box">
                    <span className="sub-title">
                      {project.category}
                    </span>
                    <h3 className="title">
                      {project.title}
                    </h3>
                    <Link
                      href="/page-project-details"
                      className="theme-btn btn-style-one">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span className="btn-title">
                        View More Details
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;