"use client";
import React from "react";

export default function ContactSectionThree() {
  return (
    <section className="conatct-section-three">
      <div className="outer-box">
        <div className="shape-1">
          <img src="/assets/images/icons/shape-28.png" alt="shape" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="h6 sub-title">Contact Us</div>
                  <div className="h2 title char-animation">
                    Let’s Collaborate With Us!
                  </div>
                </div>
                <div className="text">
                  Discover inspiring stories, design trends, innovations shaping
                  modern architecture and timeless interiors.
                </div>
                <div className="image-box">
                  <div className="image">
                    <img
                      src="/assets/images/resource/contact3-1.jpg"
                      alt="contact"
                    />
                  </div>
                  <div className="info-box">
                    <div className="info">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <span>
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                      </span>
                    </div>
                    <div className="info">
                      <div className="icon">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <span>demo@example.com | +629 555-0129</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-column col-lg-6">
              <div className="inner-column">
                <div className="form-box">
                  <div className="inner-box">
                    <form>
                      <div className="row gx-3">
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>First Name *</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Your Number"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>What are your needs? *</label>
                            <input
                              type="text"
                              name="service"
                              placeholder="Select a service"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-clt">
                            <label>Write Message</label>
                            <textarea
                              name="message"
                              placeholder="Write your message..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button
                            className="theme-btn btn-style-three"
                            type="submit">
                            <span className="btn-title">
                              Send Your Request
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}