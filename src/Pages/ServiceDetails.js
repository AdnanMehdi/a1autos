import React, { useContext } from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import ServiceDetails from "../components/Service/ServiceDetails";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import { ServiceDetailsContext } from "../store/ServiceDetailsContext";
import { Helmet } from "react-helmet";
// import { ServiceDetailsProvider as ServiceProvider } from "../store/ServiceDetailsContext";\

const Faq = ({ match }) => {
    const serviceDetailsCtx = useContext(ServiceDetailsContext);
    let title = "";
    let metaDescription = "";
    let metaKeywords = "";

    if (match.params.serviceName == "Cash-for-Used-Cars") {
        title = "Cash for Used Cars";
        metaDescription =
            "Our Cash for Cars services encourage responsible disposal of toxic fluids and will scrap your car in an eco-friendly manner.";
        metaKeywords = "Cash for Used Cars";
    } else if (match.params.serviceName == "Cash-for-Junk-Cars") {
        title = "Cash for Junk Cars";
        metaDescription =
            "If you have a junk car, truck, van, SUV, or any other vehicle you need to make a call to us.";
        metaKeywords = "Cash for Junk Cars";
    } else if (match.params.serviceName == "All-Brand-Car-Wreckers") {
        title = "All Brand Car Wreckers";
        metaDescription =
            "Our Car Wreckers team will give you a quote and cash immediately. crew of professional A1 Auto Recycling specialists is highly efficient.";
        metaKeywords = "All Brand Car Wreckers";
    } else if (match.params.serviceName == "Cash-for-Damaged-Cars") {
        title = "Cash for Damaged Car";
        metaDescription =
            "In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer. Keeping an extremely old and damaged car may be an eyesore for your neighbors.";
        metaKeywords = "Cash for Damaged Car";
    } else if (match.params.serviceName == "Free-Scrap-Car-Removal") {
        title = "Free Scrap Removal";
        metaDescription =
            "We are swollen with pride to mention here the characteristics of our scrap car removal team.";
        metaKeywords = "Free Scrap Removal";
    } else if (match.params.serviceName == "Unwanted-Car-Buyer") {
        title = "Unwanted Car Buyers ";
        metaDescription =
            "We are a scrap car removal service provider that not only accepts and remove old and unwanted cars.";
        metaKeywords = "Unwanted Car Buyers ";
    }

    return (
        <div className="body_wrapper">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
            </Helmet>

            <CustomNavbar
                slogo="sticky_logo"
                cClass="custom_container p0"
                mClass="menu_four"
                nClass="w_menu"
            />
            {/* <CustomNavbar slogo="sticky_logo" cClass="custom_container p0" mClass="menu_four" nClass="w_menu ml-auto mr-auto" /> */}
            {/* <ServiceProvider> */}
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
                padding="0px"
                Ptitle={match.params.serviceName}
                icon={match.params.serviceImage}
            />
            {/* </ServiceProvider> */}
            <ServiceDetails title={match.params.serviceName} />
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};
export default Faq;
