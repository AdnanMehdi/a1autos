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

export const HomeAcacia = ({ match }) => {
    let title = "";
    let metaDescription = "";
    let metaKeywords = "";

    if (match.path == "/Acacia-Ridge") {
        title = "Cash for Used Cars in Acacia Ridge";
        metaDescription =
            "A point comes when we all get tired by driving the same car for years. If you are looking to sell your used car for cash, call us. We will help you in buying your desired car by paying top money for cars without worrying about the condition of your vehicle.";
        metaKeywords = "Cash for Used Cars in Acacia Ridge";
    } else if (match.path == "/Brisbane") {
        title = "Cash for Damaged Cars Brisbane";
        metaDescription =
            "There are plenty of parts in a car that at the least still holds some worth and can be utilized in any other vehicle. In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer.";
        metaKeywords = "Cash for Damaged Cars Brisbane";
    } else if (match.path == "/Beenleigh") {
        title = "Cash for Damaged Cars in Beeneleigh";
        metaDescription =
            "Our Cash For damaged Cars Beenleigh service will give you instant cash for car. There are plenty of parts in a car that at the least still holds some worth and can be utilized in any other vehicle. In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer.";
        metaKeywords = "Cash for Damaged Cars Beeneleigh";
    }

    return (
        <div className="body_wrapper">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
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
};
