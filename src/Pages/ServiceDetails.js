import React, { useContext } from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import ServiceDetails from "../components/Service/ServiceDetails";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import { ServiceDetailsContext } from "../store/ServiceDetailsContext";

const Faq = ({ match }) => {
    const serviceDetailsCtx = useContext(ServiceDetailsContext);

    return (
        <div className="body_wrapper">
            <CustomNavbar
                slogo="sticky_logo"
                cClass="custom_container p0"
                mClass="menu_four"
                nClass="w_menu"
            />
            {/* <CustomNavbar slogo="sticky_logo" cClass="custom_container p0" mClass="menu_four" nClass="w_menu ml-auto mr-auto" /> */}
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                Ptitle={match.params.serviceName}
                Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
                icon={match.params.serviceImage}
                padding="0px"
            />
            <ServiceDetails />
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};
export default Faq;
