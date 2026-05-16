import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home3/Banner";
import About from "../section/home3/About";
import Feature from "../section/home3/Feature";
import Working from "../section/home3/Working";
import Service from "../section/home3/Service";
import Projects from "../section/home3/Projects";
import Testimonial from "../section/home3/Testimonial";
import Teams from "../section/home1/Teams";
import Faqs from "../section/home3/Faqs";
import News from "../section/home3/News";
import Contact from "../section/home3/Contact";

export const metadata = {
  title: `Home Layout3 || ${SITE_NAME}`,
};

const home3: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <Banner />
      <About />
      <Feature />
      <Working />
      <Service />
      <Projects />
      <Testimonial />
      <Teams />
      <Faqs />
      <News />
      <Contact />
    </LayoutWrapper>
  );
};

export default home3;