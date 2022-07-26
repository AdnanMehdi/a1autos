import React from "react";
import Reveal from "react-reveal/Reveal/";

const DesignBanner = () => {
    return (
        <section className="seo_home_area">
            <div className="home_bubble">
                {/* <div className="bubble b_one"></div> */}
                <img className="bubble b_one"  src={require("../../img/seo/car-1.png")} alt="" />
                <img className="bubble b_two"  src={require("../../img/seo/dollar-2.png")} alt="" />
                <img className="bubble b_three"  src={require("../../img/seo/dollar-1.png")} alt="" />
                <img className="bubble b_four"  src={require("../../img/seo/car-2.png")} alt="" />
                <img className="bubble b_five"  src={require("../../img/seo/dollar-1.png")} alt="" />
                <img className="bubble b_six"  src={require("../../img/seo/dollar-2.png")} alt="" />
                {/* <div
                    className="triangle b_seven"
                    data-parallax='{"x": 20, "y": 150}'
                >
                    <img
                        src={require("../../img/seo/triangle_one.png")}
                        alt=""
                    />
                </div>
                <div
                    className="triangle b_eight"
                    data-parallax='{"x": 120, "y": -10}'
                >
                    <img
                        src={require("../../img/seo/triangle_two.png")}
                        alt=""
                    />
                </div>
                <div className="triangle b_nine">
                    <img
                        src={require("../../img/seo/triangle_three.png")}
                        alt=""
                    />
                </div> */}
            </div>
            <div className="banner_top">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 seo_banner_content mb-5">
                            <div className="saas_home_img">
                                <Reveal effect="fadeInUp" duration={1400}>
                                    {/* <img
                                src={require("../../img/seo/image.png")}
                                alt=""
                            /> */}
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <video
                                            src={require("../../video/a1-auto.mp4")}
                                            autoPlay="true"
                                            loop
                                            muted
                                            defaultmuted 
                                            playsinline
                                            className="embed-responsive-item"
                                            style={{filter: "brightness(100%)"}}
                                        ></video>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                        <Reveal effect="fadeInUp" duration={1400}>
                            <div className="contact_form col-md-12 col-lg-4">
                                {/* <div className="card">
                                <div className="card-body"> */}
                                <form className="quote_form" action="">
                                    <div className="row">
                                        <div className="form-group col-6 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                required
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                        <div className="col-6 text_box">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                                required
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                        <div className="form-group col-6 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="phone-number"
                                                placeholder="Your Phone Number"
                                                required
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                        <div className="col-6 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="make-model"
                                                placeholder="Your Make Model"
                                                required
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                        <div className="form-group col-md-12 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="sub-urb"
                                                placeholder="Your Sub Urb"
                                                required
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                        <div className="form-group col-md-12 text_box">
                                            <textarea
                                                type="text"
                                                class="form-control message"
                                                id="message"
                                                placeholder="Your Message"
                                                required
                                                rows="1"
                                                style={{paddingLeft: "15px"}}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn_three" type="submit">
                                            Get Quote Now
                                        </button>
                                    </div>
                                </form>
                                {/* </div>
                            </div> */}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DesignBanner;
