import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import ChooseUs from "../section/home2/ChooseUs";
import Video from "../section/home2/Video";
import Projects from "../section/home2/Projects";
import Teams from "../section/home2/Teams";
import Testimonial from "../section/home2/Testimonial";
import News from "../section/home2/News";
import Faqs from "../section/home2/Faqs";
import Contact from "../section/home2/Contact";
import Clients from "../section/home2/Clients";

export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two">
      <Banner />
      <About />
      <Service />
      <ChooseUs />
      <Video />
      <Projects />
      <Teams />
      <Testimonial />
      <News />
      <Faqs />
      <Contact />
      <Clients />
    </LayoutWrapper>
  );
};

export default Home2;