import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/about/About";
import Service from "../section/home2/Service";
import Video from "../section/about/Video";
import Teams from "../section/home2/Teams";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="three">
            <PageTitle pageName="About Us" />
            <About />
            <Service />
            <Video />
            <Teams />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;