
import React from 'react';
import { SITE_NAME } from "../app/Head";
import LayoutWrapper from './LayoutWrapper';
import Banner from "./section/home1/Banner";
import Service from "./section/home1/Service";
import About from "./section/home1/About";
import Service2 from "./section/home1/Service2";
import Projects from "./section/home1/Projects";
import ChooseUs from "./section/home1/ChooseUs";
import Award from "./section/home1/Award";
import Teams from "./section/home1/Teams";
import Testimonial from "./section/home1/Testimonial";
import Faq from "./section/home1/Faq";
import Contact from "./section/home1/Contact";
import News from "./section/home1/News";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <Service />
            <About />
            <Service2 />
            <Projects />
            <ChooseUs />
            <Award />
            <Teams />
            <Testimonial />
            <Faq />
            <Contact />
            <News />
        </LayoutWrapper>
        </>
    );
};

export default Home;