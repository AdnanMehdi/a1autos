import React, { useContext, useRef, useState } from "react";
import Reveal from "react-reveal/Reveal/";
import { LocationContext } from "../../store/LocationContext";
import emailjs from "@emailjs/browser";

const DesignBanner = () => {
    const { location } = useContext(LocationContext);
    const [status, setStatus] = useState(undefined);
    const form = useRef();
    const name = useRef(null);
    const email = useRef(null);
    const phone_number = useRef(null);
    const make = useRef(null);
    const sub_urb = useRef(null);
    const message = useRef(null);

    let videoLocation = "";
    let iconFolder = "";
    let iconName = "";

    if (location === "") {
        videoLocation = "home";
        iconFolder = "home";
        iconName = "home";
    } else if (location === "Acacia Ridge") {
        videoLocation = "acacia";
        iconFolder = "acacia";
        iconName = "acacia";
    } else if (location === "Brisbane") {
        videoLocation = "brisbane";
        iconFolder = "brisbane";
        iconName = "brisbane";
    } else if (location === "Beenleigh") {
        videoLocation = "beenleigh";
        iconFolder = "beenleigh";
        iconName = "beenleigh";
    } else if (location === "Coopers Plains") {
        videoLocation = "coopers";
        iconFolder = "coopers";
        iconName = "coopers";
    } else if (location === "Gold Coast") {
        videoLocation = "goldcoast";
        iconFolder = "gold-coast";
        iconName = "goldcoast";
    } else if (location === "Ipswich") {
        videoLocation = "ipswich";
        iconFolder = "ipswich";
        iconName = "ipswich";
    } else if (location === "Rocklea") {
        videoLocation = "rocklea";
        iconFolder = "rocklea";
        iconName = "rocklea";
    } else if (location === "Sunnybank") {
        videoLocation = "sunnybank";
        iconFolder = "sunnybank";
        iconName = "sunnybank";
    } else if (location === "Toowoomba") {
        videoLocation = "toowoomba";
        iconFolder = "toowoomba";
        iconName = "toowoomba";
    } else if (location === "Underwood") {
        videoLocation = "underwood";
        iconFolder = "underwood";
        iconName = "underwood";
    } else if (location === "Woodridge") {
        videoLocation = "woodridge";
        iconFolder = "woodridge";
        iconName = "woodridge";
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xqwqy4x",
                "template_yhz2obm",
                form.current,
                "3nu8MipAR5Bt-cYMp"
            )
            .then(
                (result) => {
                    setStatus({ type: "success" });
                    name.current.value = "";
                    email.current.value = "";
                    phone_number.current.value = "";
                    make.current.value = "";
                    sub_urb.current.value = "";
                    message.current.value = "";
                },
                (error) => {
                    setStatus({ type: "error" });
                }
            );
    }

    return (
        <section className="seo_home_area">
            <div className="home_bubble">
                {/* <div className="bubble b_one"></div> */}
                <img
                    className="bubble b_one"
                    src={require(`../../img/seo/${iconFolder}/car-1-${iconName}.png`)}
                    alt="truck-icon"
                />
                <img
                    className="bubble b_two"
                    src={require(`../../img/seo/${iconFolder}/dollar-2-${iconName}.png`)}
                    alt="cash-icon"
                />
                <img
                    className="bubble b_three"
                    src={require(`../../img/seo/${iconFolder}/dollar-1-${iconName}.png`)}
                    alt="dollar-icon"
                />
                <img
                    className="bubble b_four"
                    src={require(`../../img/seo/${iconFolder}/car-2-${iconName}.png`)}
                    alt="car-icon"
                />
                <img
                    className="bubble b_five"
                    src={require(`../../img/seo/${iconFolder}/dollar-1-${iconName}.png`)}
                    alt="dollar-icon"
                />
                <img
                    className="bubble b_six"
                    src={require(`../../img/seo/${iconFolder}/dollar-2-${iconName}.png`)}
                    alt="cash-icon"
                />
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
                            <h3 className="text-center">
                                Get instant cash for your used/scrap car
                            </h3>
                            <div className="saas_home_img">
                                <Reveal effect="fadeInUp" duration={1400}>
                                    {/* <img
                                src={require("../../img/seo/image.png")}
                                alt=""
                            /> */}
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <video
                                            src={require(`../../video/a1-auto-${videoLocation}.mp4`)}
                                            autoPlay
                                            loop
                                            muted
                                            defaultMuted
                                            playsInline
                                            className="embed-responsive-item"
                                            style={{
                                                filter: "brightness(100%)",
                                            }}
                                        ></video>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                        <Reveal effect="fadeInUp" duration={1400}>
                            <div className="contact_form col-md-12 col-lg-4">
                                {/* <div className="card">
                                <div className="card-body"> */}
                                <form
                                    ref={form}
                                    className="quote_form"
                                    action=""
                                    onSubmit={sendEmail}
                                >
                                    <h4 className="text-center pb-3">
                                        Get free quotation now!
                                    </h4>
                                    {status?.type === "success" && (
                                        <p className="alert alert-success">
                                            Message Send Successfully
                                        </p>
                                    )}
                                    {status?.type === "error" && (
                                        <p className="alert alert-danger">
                                            Message Not Sent
                                        </p>
                                    )}
                                    <div className="row">
                                        <div className="form-group col-12 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                ref={name}
                                            />
                                        </div>
                                        <div className="col-12 text_box">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                                ref={email}
                                            />
                                        </div>
                                        <div className="form-group col-6 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="phone-number"
                                                name="phone_number"
                                                placeholder="Your Phone Number"
                                                required
                                                ref={phone_number}
                                            />
                                        </div>
                                        <div className="form-group col-6 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="sub-urb"
                                                name="sub_urb"
                                                placeholder="Your Suburb"
                                                required
                                                ref={sub_urb}
                                            />
                                        </div>
                                        <div className="col-12 text_box">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="make-model"
                                                name="make"
                                                placeholder="Year Make Model"
                                                required
                                                ref={make}
                                            />
                                        </div>
                                        <div className="form-group col-md-12 text_box">
                                            <textarea
                                                type="text"
                                                class="form-control message"
                                                id="message"
                                                name="message"
                                                placeholder="Your Message"
                                                required
                                                rows="1"
                                                ref={message}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn_three"
                                            type="submit"
                                        >
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
