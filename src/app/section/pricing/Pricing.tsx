"use client";
import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Single Room",
    price: 29,
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
  {
    title: "Double Room",
    price: 40,
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
  {
    title: "Family Room",
    price: 99,
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
];

export default function PricingSectionFour() {
  return (
    <section className="pricing-section-four">
      <div className="auto-container">
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              className="pricing-block-four col-md-6 col-lg-4"
              key={index}>
              <div className="inner-box">
                <div className="content-column">
                  <div className="inner-column wow fadeInLeft">
                    <span className="pricing-title">{plan.title}</span>
                    <h6 className="pricing-amount">
                      <sup>$</sup>
                      {plan.price} <span>Per Room</span>
                    </h6>
                    <ul className="list-style-two">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <i className="icon fa fa-circle-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="theme-btn btn-style-five book-now"
                      href="/page-pricing">
                      <span className="btn-title">Book Now</span>
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