"use client";
import React, { useState } from "react";

const faqItems = [
  {
    title: "What is a single property listing?",
    content:
      "Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.",
  },
  {
    title: "What information is included in a single property listing?",
    content:
      "Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.",
  },
  {
    title: "Can I add a virtual tour or drone video?",
    content:
      "Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.",
  },
  {
    title: "How do I know the property price is fair?",
    content:
      "Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.",
  },
  {
    title: "How do I schedule a tour for the property?",
    content:
      "Project timelines vary depending on complexity, but most projects are completed within 4–12 weeks. We provide a clear timeline after the initial consultation.",
  },
];

function AccordionColumn() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className="accordion-box">
      {faqItems.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            className={`accordion block ${isActive ? "active-block" : ""}`}
            key={index}>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}>
              {item.title}
              <i className="icon fa-solid fa-chevron-down"></i>
            </div>
            {isActive && (
              <div className="acc-content current">
                <div className="content">
                  <div className="text">{item.content}</div>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function FaqSection() {
  return (
    <section className="faq-section pt-100">
      <div className="auto-container">
        <div className="row">
          <div className="faq-box col-lg-6">
            <div className="inner-box">
              <AccordionColumn />
            </div>
          </div>

          <div className="faq-box col-lg-6">
            <div className="inner-box">
              <AccordionColumn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}