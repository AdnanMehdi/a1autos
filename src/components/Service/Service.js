import React, { useContext } from "react";
import SeoTitle from "../Title/SeoTitle";
import HRServiceItems from "./HRServiceItems";
import { LocationContext } from "../../store/LocationContext";
import Fade from "react-reveal/Fade";
import { ServiceDetailsProvider as ServiceProvider } from "../../store/ServiceDetailsContext";

const Service = ({ ServiceData }) => {
    const { location } = useContext(LocationContext);

    let imageFolder = "";
    let imageName = "";

    if (location === "") {
        imageFolder = "home";
        imageName = "home";
    } else if (location === "Acacia Ridge") {
        imageFolder = "acacia";
        imageName = "acacia";
    } else if (location === "Brisbane") {
        imageFolder = "brisbane";
        imageName = "brisbane";
    } else if (location === "Beenleigh") {
        imageFolder = "beenleigh";
        imageName = "beenleigh";
    } else if (location === "Coopers Plains") {
        imageFolder = "coopers";
        imageName = "coopers";
    } else if (location === "Gold Coast") {
        imageFolder = "goldcoast";
        imageName = "goldcoast";
    } else if (location === "Ipswich") {
        imageFolder = "ipswich";
        imageName = "ipswich";
    } else if (location === "Rocklea") {
        imageFolder = "rocklea";
        imageName = "rocklea";
    } else if (location === "Sunnybank") {
        imageFolder = "sunnybank";
        imageName = "sunnybank";
    } else if (location === "Toowoomba") {
        imageFolder = "toowoomba";
        imageName = "toowoomba";
    } else if (location === "Underwood") {
        imageFolder = "underwood";
        imageName = "underwood";
    } else if (location === "Woodridge") {
        imageFolder = "woodridge";
        imageName = "woodridge";
    }

    return (
        <React.Fragment>
            <section className="prototype_service_info" id="services">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                    <SeoTitle
                        Title={`Our Services ${
                            location !== "" ? `in ${location}` : ""
                        }`}
                        TitleP=""
                    />
                    {/* <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">
                        SaasLand is built for designers like you.
                        <br /> With useful features, an intuitive interface.
                    </h2> */}

                    <div className="row p_service_info">
                        {ServiceData.HRService.map((item) => {
                            return (
                                <HRServiceItems
                                    slug={item.slug}
                                    HRtitle={item.HRtitles}
                                    HRdescription={item.HRdescription}
                                    Hicon={item.Hicon}
                                    iconFolder={`services-${imageFolder}`}
                                    iconName={imageName}
                                    rclass={item.rclass}
                                    iclass={item.iclass}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Service;
