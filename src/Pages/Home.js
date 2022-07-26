import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import DesignBanner from "../components/Banner/DesignBanner";
import Service from "../components/Service/Service";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import ServiceData from "../components/Service/ServiceData";
import HomeProcess from "./HomeProcess";

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
        {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" nClass="ml-auto mr-auto" /> */}
        <DesignBanner />
        <HomeProcess />
        <Service ServiceData={ServiceData} />
        <Subscribe FooterData={FooterData} />
        <Footer FooterData={FooterData} />
    </div>
);
