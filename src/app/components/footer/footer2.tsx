"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer footer-style-three">
      <div className="shape-1">
        <img
          src="/assets/images/icons/footer3-1.png"
          alt="shape"
        />
      </div>
      <div className="outer-box">
        <div className="auto-container">
          <div className="upper-box">
            <div className="h2 title">Let’s Start a Project</div>
            <Link className="icon" href="/">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="widgets-section">
            <div className="row">
              <div className="footer-column col-lg-3 col-md-6">
                <div className="footer-widget about-widget">
                  <div className="footer-logo">
                    <img
                      src="/assets/images/logo3.png"
                      alt="logo"
                    />
                  </div>
                  <div className="text">
                    Through critical analysis and creative inquiry, our mission is to understand the complexities human.
                  </div>
                  <ul className="social-icon">
                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-youtube" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-3 col-md-6">
                <div className="footer-widget style-one links-widget">
                  <div className="h4 widget-title">Quick Links</div>
                  <ul className="user-links">
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Our Team</Link></li>
                    <li><Link href="#">Our Portfolio</Link></li>
                    <li><Link href="#">Careers</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-3 col-md-6">
                <div className="footer-widget style-two links-widget">
                  <div className="h4 widget-title">Our Services</div>
                  <ul className="user-links">
                    <li><Link href="#">Apartment Building</Link></li>
                    <li><Link href="#">Construction Management</Link></li>
                    <li><Link href="#">Investment & Capital</Link></li>
                    <li><Link href="#">Architecture & Design</Link></li>
                    <li><Link href="#">Projects Management</Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-3 col-md-6">
                <div className="footer-widget style-three solutions-widget">
                  <div className="h4 widget-title">Our Solutions</div>
                  <ul className="user-links">
                    <li><Link href="#">Behance</Link></li>
                    <li><Link href="#">Upwork</Link></li>
                    <li><Link href="#">Dribbble</Link></li>
                    <li><Link href="#">Fiverr</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container justify-content-center justify-content-md-between">
              <p className="copyright-text">
                © Copyright Reserved by Company.com
              </p>
              <ul className="d-flex align-items-center gap-1">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Term of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}