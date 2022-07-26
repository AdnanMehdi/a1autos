import React from "react";
import SeoTitle from "../Title/SeoTitle";
import HRServiceItems from "./HRServiceItems";
import Fade from "react-reveal/Fade";

const Service = ({ ServiceData }) => {
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
                    <SeoTitle Title="Services" TitleP="" />
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
