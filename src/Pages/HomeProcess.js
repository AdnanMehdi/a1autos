import React from "react";
import Featuresitems from "../components/Features/Featuresitems";
import SeoTitle from "../components/Title/SeoTitle";

function HomeProcess() {
    return (
        <section
            className="process_area bg_color sec_pad"
            style={{ paddingTop: "150px" }}
            id="process"
        >
            <div className="container">
                <div className="features_info">
                    <SeoTitle
                        Title="Process"
                        TitleP="Selling your old car won’t be as stress-free as you are might thinking. If you are wondering where to sell my car for cash, you are accessing the right site."
                    />
                    <img
                        className="divider_img"
                        src={require("../img/home4/process-divider.png")}
                        alt=""
                    />
                    <Featuresitems
                        rowClass="row flex-row-reverse"
                        aClass="pr_70 pl_70"
                        fimage="get-an-offer.png"
                        iImg="icon01.png"
                        ftitle="Get An Offer"
                        descriptions="You can either call us or fill an online form to know the worth of the vehicle you want to get rid of. You do not have to worry about private dealers or dealing with their tactics once you reach out to us."
                    />
                    <Featuresitems
                        rowClass="row"
                        aClass="pl_70"
                        fimage="schedule-pickup.png"
                        iImg="icon02.png"
                        ftitle="Schedule Pick Up"
                        descriptions="Yes, it is so simple. Once we agree on a price, you can just book us for any day and time. We would be at your service to pick up your vehicle from your premises."
                    />
                    <Featuresitems
                        rowClass="row flex-row-reverse"
                        aClass="pr_70 pl_70"
                        fimage="get-paid.png"
                        iImg="icon3.png"
                        ftitle="Get Paid"
                        descriptions="We do not charge you any amount for our car removal services. At A1 Auto Recycling we pay you instant cash on cars up to $8999 or more depending on the condition of the vehicle, its make, year and model."
                    />
                    <div className="dot middle_dot">
                        <span className="dot1"></span>
                        <span className="dot2"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeProcess;
