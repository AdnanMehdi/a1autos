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
        title = "Cash For Cars in Acacia Ridge - Junk Car Removal Acacia Ridge";
        metaDescription =
            "We have the means to pay the highest cash for cars Acacia Ridge.  Get Top Junk Car Removal Acacia Ridge";
        metaKeywords =
            "Cash For Cars in Acacia Ridge, Junk Car Removal Acacia Ridge";
    } else if (match.path == "/Brisbane") {
        title = "Cash for Cars in brisbane - Junk Car Removal brisbane";
        metaDescription =
            "Get cash for cars Brisbane faster than ever. We have Junk Car Removal in Brisbane";
        metaKeywords = "Cash for Cars in Brisbane, Junk Car Removal brisbane";
    } else if (match.path == "/Beenleigh") {
        title = "Cash for Cars in Beeneleigh - Junk Car Removal Beeneleigh";
        metaDescription =
            "Our Cash For Cars Beenleigh service will give you instant cash for Junk Car Removal Beeneleigh";
        metaKeywords = "Cash for Cars in Beeneleigh";
    } else if (match.path == "/Coopers-Plains") {
        title =
            "Cash for Cars in Coopers Plains - Junk Car Removal Coopers Plains";
        metaDescription =
            "Cash for Cars in Coopers Plains services Junk Car Removal with car recycling.";
        metaKeywords = "Cash for Cars in Coopers Plains";
    } else if (match.path == "/Gold-Coast") {
        title = "Cash for Cars in Gold Cast - Junk Car Removal in Gold Coast";
        metaDescription =
            "Cash for Cars in Gold Cast is all that you need. Adrian's is the top choice for auto selling cars and buying parts in Gold Coast. Junk Car Removal in Gold Coast";
        metaKeywords = "Cash for Cars in Gold Cast";
    } else if (match.path == "/Ipswich") {
        title = "Cash for Cars in Ipswich - Junk Car Removal Ipswich";
        metaDescription =
            "Looking to Cash for Cars in Ipswich, Junk Car Removal Ipswich and pay top prices for your old scrap vehicle.";
        metaKeywords = "Cash for Cars in Ipswich";
    } else if (match.path == "/Rocklea") {
        title = "Cash for Cars in Rocklea - Junk Car Removal Rocklea";
        metaDescription =
            "Cash for Cars in Rocklea We provide you the great and easy way to turn your scrap car into cash for cars. Junk Car Removal Rocklea";
        metaKeywords = "Cash for Cars in Rocklea";
    } else if (match.path == "/Sunnybank") {
        title = "Cash for Cars in Sunnybank - Junk Car Removal Sunnybank";
        metaDescription =
            "We are a Cash for Cars in Sunnybank service provider that not only accepts and remove old and Junk Car Removal Sunnybank";
        metaKeywords = "Cash for Cars in Sunnybank";
    } else if (match.path == "/Toowoomba") {
        title = "Cash for Cars in Toowoomba - Junk Car Removal Toowoomba  ";
        metaDescription =
            "Cash for Cars in Toowoomba. Efficient, hassle-free truck and scrap car removal. Professional and Prompt Service.";
        metaKeywords = "Cash for Cars in Toowoomba";
    } else if (match.path == "/Underwood") {
        title = "Cash for Cars in Underwood - Junk Car Removal Underwood";
        metaDescription =
            "Unwanted Car Buyer in Underwood. Efficient, hassle-free truck and scrap car removal. Professional and Prompt Service.";
        metaKeywords = "Cash for Cars in Underwood, Junk Car Removal Underwood";
    } else if (match.path == "/Woodridge") {
        title = "Cash for Cars in Woodridge - Junk Car Removal Woodridge";
        metaDescription =
            "Unwanted Car Buyer in Underwood. Efficient, hassle-free truck and scrap car removal. Professional and Prompt Service.";
        metaKeywords = "Cash for Cars in Woodridge";
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
