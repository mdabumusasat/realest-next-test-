"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ralph Edwards",
    designation: "Chief Executive",
    image: "/assets/images/resource/team1-2.png",
  },
  {
    name: "Wade Worren",
    designation: "Principal & CEO",
    image: "/assets/images/resource/team1-3.png",
  },
  {
    name: "Albert Flores",
    designation: "Ceo-Founder",
    image: "/assets/images/resource/team1-4.png",
  },
  {
    name: "Albert Flores",
    designation: "Ceo-Founder",
    image: "/assets/images/resource/team1-4.png",
  },
  {
    name: "Wade Worren",
    designation: "Principal & CEO",
    image: "/assets/images/resource/team1-3.png",
  },
  {
    name: "Ralph Edwards",
    designation: "Chief Executive",
    image: "/assets/images/resource/team1-2.png",
  },
];

export default function TeamSectionTwo() {
  return (
    <section className="team-section-two">
      <div className="auto-container">
        <div className="row gx-4">
          {teamMembers.map((member, index) => (
            <div className="team-block col-lg-4 col-md-6" key={index}>
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <svg
                    className="shape"
                    width="304"
                    height="543"
                    viewBox="0 0 304 543"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                  </svg>
                  <ul className="social-link">
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="author-info">
                  <div className="inner-box">
                    <h4 className="name">
                      <Link href="/page-team-details">{member.name}</Link>
                    </h4>
                    <div className="designation">{member.designation}</div>
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