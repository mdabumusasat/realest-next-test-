"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="shape-1"><img src="/assets/images/resource/footer1-1.png" alt=""/></div>
      <div className="widgets-section">
        <div className="anim-icon"><img src="/assets/images/icons/footer-h1-2.png" alt=""/></div>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="footer-column col-lg-5">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="footer-logo"><img src="/assets/images/logo3.png" alt=""/></div>
              </div>
            </div>
            <div className="footer-column col-lg-2">
            </div>
            <div className="footer-column style-two col-lg-5">
              <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                 <div className="h5 text">Get the latest inspiration & insights</div>
              </div>
            </div>
          </div>
          <hr className="mb-40"/>
          <div className="row">
            <div className="footer-column border-0 col-lg-5 col-md-4">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="widget-content">
                  <div className="contact-area">
                    <Link className="phone" href="#">+ (123) 456-7890</Link>
                    <Link className="mail" href="#">domain@example.com</Link>
                  </div>
                  <div className="social-widget mt-30">
                    <ul className="social-icon-list1 mb-5 mb-lg-0">
                      <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column border-0 col-xl-2 col-md-1">
            </div>
            <div className="footer-column style-two border-0 col-lg-5 col-md-7">
              <div className="row d-block d-md-flex">
                <div className="footer-widget links-widget col wow fadeInLeft" data-wow-delay="400ms">
                   <div className="h5 widget-title">Quick Link</div>
                  <div className="widget-content mb-5 mb-sm-0">
                    <ul className="user-links">
                      <li><Link href="#">About Us</Link></li>
                      <li><Link href="#">Our Team</Link></li>
                      <li><Link href="#">Our Portfolio</Link></li>
                      <li><Link href="#">Careers</Link></li>
                      <li><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget style-two links-widget col wow fadeInLeft" data-wow-delay="400ms">
                   <div className="h5 widget-title">Our Works</div>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">Apartment Building</Link></li>
                      <li><Link href="#">Construction Management</Link></li>
                      <li><Link href="#">Investment & Capital</Link></li>
                      <li><Link href="#">Architecture & Design</Link></li>
                      <li><Link href="#">Projects Management</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="inner-container justify-content-center justify-content-sm-between">
              <p className="copyright-text">© Copyright Reserved by Company.com</p>
              <ul className="d-flex align-items-center gap-3">
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