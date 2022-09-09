import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import DesignBanner from "../components/Banner/DesignBanner";
import Service from "../components/Service/Service";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import ServiceData from "../components/Service/ServiceData";
import HomeProcess from "./HomeProcess";
import { Helmet } from "react-helmet";

export const Home = () => (
    <div className="body_wrapper">
        <Helmet>
            <title>
                Cash for Used Cars – Cash for Junk Cars - Car Wrecker Near You
            </title>
            <meta
                name="description"
                content="Selling your old car won’t be as stress-free as you are might thinking. If you are wondering where to sell my car or junk cars for cash, you are accessing the right site"
            />
            <meta
                name="keywords"
                content="Cash for Used Cars, Cash for Junk Cars, Car Wrecker Near You"
            />
            <meta
                name="google-site-verification"
                content="E-AwgVdm3Xq7sIYatcf_8q6BTDnxpsMP21Z9fqS4tf4"
            />
        </Helmet>

        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
        {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" nClass="ml-auto mr-auto" /> */}
        <DesignBanner />
        <HomeProcess />
        <Service ServiceData={ServiceData} />
        <Subscribe FooterData={FooterData} />
        <Footer FooterData={FooterData} />
    </div>
);
