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
            "Our Cash For damaged Cars Beenleigh service will give you instant cash for car. There are plenty of parts in a car that at the least still holds some worth and can be utilized in any other vehicle. In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer.";
        metaKeywords = "Cash for Damaged Cars Beeneleigh";
    } else if (match.path == "/Coopers-Plains") {
        title = "Scrap Removal Car in Coopers Plains";
        metaDescription =
            "Scrap car removal services with car recycling can keep the environment safe from harmful emissions released by an old, unusable automobile";
        metaKeywords = "Scrap Removal Car in Coopers Plains";
    } else if (match.path == "/Gold-Coast") {
        title = "Car Wrecker Near You in Gold Coast";
        metaDescription =
            "Auto Car wrecking Gold Coast is all that you need. Adrian's is the top choice for auto selling cars and buying parts in Gold Coast.";
        metaKeywords = "Car Wrecker Near You in Gold Coast";
    } else if (match.path == "/Ipswich") {
        title = "Scrap Removal Car in Ipswich";
        metaDescription =
            "Looking to Scrap Your Car in Ipswich, scrappage service and pay top prices for your old scrap vehicle.";
        metaKeywords = "Scrap Removal Car in Ipswich";
    } else if (match.path == "/Rocklea") {
        title = "Unwanted Car Buyer in Rocklea";
        metaDescription =
            "Unwanted Car Buyer in Rocklea We provide you the great and easy way to turn your scrap car into cash for cars.";
        metaKeywords = "Unwanted Car Buyer in Rocklea";
    } else if (match.path == "/Sunnybank") {
        title = "Unwanted Car Buyer in Sunnybank";
        metaDescription =
            "We are a scrap car removal service provider that not only accepts and remove old and unwanted cars, but we also purchase vans, 4*4, SUVs, Ute's, trucks, and other types of commercial vehicles.";
        metaKeywords = "Unwanted Car Buyer in Sunnybank";
    } else if (match.path == "/Toowoomba") {
        title = "Scrap Removal Car in Toowoomba";
        metaDescription =
            "Get free and instant cash for scrap cars. Efficient, hassle-free truck and scrap car removal. Professional and Prompt Service.";
        metaKeywords = "Scrap Removal Car in Toowoomba";
    } else if (match.path == "/Underwood") {
        title = "Unwanted Car Buyer in Underwood";
        metaDescription =
            "Unwanted Car Buyer in Underwood. Efficient, hassle-free truck and scrap car removal. Professional and Prompt Service.";
        metaKeywords = "Cash for Damaged Cars Beeneleigh";
    } else if (match.path == "/Woodridge") {
        title = "Scrap Removal Car in Woodridge";
        metaDescription =
            "Our Cash For damaged Cars Woodridge service will give you instant cash for car. There are plenty of parts in a car that at the least still holds some worth and can be utilized in any other vehicle. In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer.";
        metaKeywords = "Scrap Removal Car in Woodridge";
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
