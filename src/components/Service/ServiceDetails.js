import React from "react";

const ServiceDetails = ({ title }) => {
    let text = "";
    let newTitle = title.split("-").join(" ");

    if (newTitle == "Free Scrap Car Removal") {
        text =
            "We are swollen with pride to mention here the characteristics of our scrap car removal team. <br/><br/> The one who speaks simple and the one who is humble and there will be no twisting of words. It will be a transparent agreement that is not concealed in any fake promises. <br/><br/> The one who explains thoroughly, right before, during and after the scrap car removal we will be with you at every step and will answer all your queries promptly. <br/><br/> The one who responds promptly, and breaks the standard workflow when needed. <br/><br/> When the trash mass up in landfills eventually decomposes, it can let go greenhouse gases like methane into the air, and other harmful substances into the ground and water. Scrap car removal is a way of avoiding doing this kind of damage to the environment.";
    } else if (newTitle == "Cash for Used Cars") {
        text =
            "Many older cars, even if they are virtually in running motion can cause serious damage to the environment. Leaking fluids and fuels from unused cars resting in your backyard can leach into the groundwater system, cause de-vegetation and widespread contamination.<br/><br/>Our Cash for Cars services encourage responsible disposal of toxic fluids and will scrap your car in an eco-friendly manner.<br/><br/>In the scrapyard, the parts of the vehicles are segregated. The parts that are working are refurbished and are sold to dealers, whereas the metal is extracted from the non-working parts and sold as scrap.<br/><br/>The rest of the parts of the vehicles are carefully recycled that they do not end up in the landfills and clog the environment.";
    } else if (newTitle == "Cash for Junk Cars") {
        text =
            "If you have a junk car, truck, van, SUV, or any other vehicle you need to make a call to us. We are top free car removal for a good reason. We will make you an offer no matter in what condition your vehicle is.<br/><br/>We make it very trouble-free; just get a quote of your car from us. You can either call us or you can fill an online form. When you fill out an online form you need to answer some basics of your vehicle such as year of its make and model and your location.In the end, we will leave you with nothing but cash for cars.<br/><br/>Our administration is very wide and inventive we are pleased to present ourselves as the most trusted auto trade purchasers. We promise to serve our customers with integrity";
    } else if (newTitle == "All Brand Car Wreckers") {
        text =
            "Our crew of professional A1 Auto Recycling specialists is highly efficient.<br/><br/>Our Car Wreckers team will give you a quote and cash immediately.<br/><br/>Our sales staff are trained to help you locate the used vehicle you require. If you are not certain what to do after reading our tips, we are confident that as soon as you arrive and collect your vehicle hire, you will see that you find yourself running out of time, as the attractions on the Brisbane are endless.";
    } else if (newTitle == "Cash for Damaged Cars") {
        text =
            "There are plenty of parts in a car that at the least still holds some worth and can be utilized in any other vehicle. In case the vehicle is not too old but is damaged by any crash, it is quite hard to sell it to a prospective customer. Keeping an extremely old and damaged car may be an eyesore for your neighbors.<br/><br/>Thus, you no longer need to search for professional mechanics to repair your damaged car as A1 Auto Recycling saves you from spending again and again on your damaged car and helps you to sell it for top cash for cars.<br/><br/>Inform us about a year, make, and model, mileage, and the exterior and interior condition of your vehicle for a fair assessment. We will schedule an appointment according to your flexibility and get your vehicle picked.";
    } else if (newTitle == "Unwanted Car Buyer") {
        text =
            "We provide you the great and easy way to turn your scrap car into cash for cars. If you are looking to car disposal and a quick and hassle-free way to sell your car then you are at the right site.<br/><br/>Just because your car gets old and not working that does not mean you cannot do anything with that. We are a scrap car removal service provider that not only accepts and remove old and unwanted cars, but we also purchase vans, 4*4, SUVs, Ute’s, trucks, and other types of commercial vehicles.<br/><br/>The age, make, model, as well as the condition of your vehicle, is not important to us as at A1 Auto Recycling we accept cars even they are not in a running condition and completely rusted.<br/><br/>So, if you are worried about having to dispose of your old, damaged, and wrecked vehicle at a throwaway price, get in touch with us. We are confident that our offer will impress you!";
    }

    return (
        <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr_70">
                        <div
                            className="job_info"
                            style={{
                                background: "#C4EDE3",
                            }}
                        >
                            <form className="quote_form" action="">
                                <div className="row">
                                    <div className="form-group col-md-6 text_box">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 text_box">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            required
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6 text_box">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            placeholder="Your Phone Number"
                                            required
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 text_box">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder="Your Make Model"
                                            required
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-12 text_box">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            placeholder="Your Sub Urb"
                                            required
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-12 text_box">
                                        <textarea
                                            type="text"
                                            class="form-control message"
                                            id="name"
                                            placeholder="Your Message"
                                            required
                                            rows="1"
                                            style={{
                                                border: "1px solid #C4EDE3",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn_three" type="submit">
                                        Get Quote Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="details_content">
                            <div className="sec_title">
                                {text !== "" && (
                                    <p
                                        className="f_400 f_size_15"
                                        dangerouslySetInnerHTML={{
                                            __html: text,
                                        }}
                                    ></p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ServiceDetails;
