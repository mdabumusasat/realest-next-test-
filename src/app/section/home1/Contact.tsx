"use client";
import React from "react";

export default function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <div className="outer-box">
          <div className="bg bg-image">
            <img
              src="/assets/images/resource/contact1-1.jpg"
              alt="contact bg"
            />
          </div>
          <div className="row">
            <div className="form-coumn col-lg-7 offset-lg-5">
              <div className="inner-column">
                <div className="shape-1">
                  <img src="/assets/images/icons/shape-10.png" alt="" />
                </div>
                <div className="sec-title light">
                  <div className="h6 sub-title">Send Message</div>
                  <div className="h2 title char-animation">
                    Need Help For Project!
                  </div>
                  <div className="text">
                    We denounce with righteous indignation and like men beguiled and demoralized by the charms
                  </div>
                </div>
                <div className="form-box">
                  <div className="inner-box">
                    <form action="#">
                      <div className="row">
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <input type="text" name="name" placeholder="Your Name" required />
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".4s">
                          <div className="form-clt">
                            <input type="email" name="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".6s">
                          <div className="form-clt">
                            <input type="text" name="phone" placeholder="Phone Number" />
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".6s">
                          <div className="form-clt">
                            <input type="text" name="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-sm-12 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <textarea name="message" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12 wow fadeInUp animated" data-wow-delay=".2s">
                          <button className="theme-btn btn-style-three" type="submit">
                            <span className="btn-title">Send a Message</span>
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