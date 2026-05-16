"use client";
import React from "react";

export default function ContactSectionTwo() {
  return (
    <>
      <section className="conatct-section-two">
        <div className="outer-box">
          <div className="shape-1">
            <img src="/assets/images/icons/shape-19.png" alt="" />
          </div>
          <div className="row">
            <div className="image-column col-lg-6">
              <div className="inner-column">
                <div className="image">
                  <img
                    src="/assets/images/resource/conatct2-1.jpg"
                    alt="contact"
                  />
                </div>
                <div className="info-box">
                  <div className="info">
                    <div className="icon">
                      <i className="fa-sharp fa-light fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Call us</span>
                      <div className="h5 title">
                        (+234) 854-328-2548
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <i className="fa-sharp fa-light fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <div className="h5 title">
                        example@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-column col-lg-6">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="h6 sub-title">Send Message</div>
                  <div className="h2 title char-animation">
                    For any query, get in touch with us
                  </div>
                </div>
                <div className="form-box">
                  <div className="inner-box">
                    <form action="#">
                      <div className="row gx-3">
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <input
                              type="tel"
                              name="tel"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-clt">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button
                            className="theme-btn btn-style-three"
                            type="submit">
                            <span className="btn-title">
                              Send a Message
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
      </section>
    </>
  );
}