import React from "react";
import Reveal from "react-reveal/Reveal";

const HomeAbout = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <Reveal effect="fadeInUp" durtaion={1300}>
                        <div className="col-lg-12 about_content_left">
                            <div className="about_content mb_30">
                                <h2 className="f_size_30 f_700 l_height45 mb_20">
                                    Get Top Cash For Car Removal
                                </h2>
                                <p className="f_size_15 f_400 mb_40">
                                    A1 Auto Recycling is the best in the cash
                                    for cars removal services. We are spread
                                    across Brisbane, the Gold Coast, Sunshine
                                    Coast, Ipswich, and Toowoomba as well as
                                    provide services in the suburbs around the
                                    same. If you are looking forward to getting
                                    rid of an old, unwanted or damaged vehicle
                                    which is only occupying space and is no more
                                    useful to you, You have come to the right
                                    place. A1 Auto Recycling has a wide range of
                                    services to offer to its customers who want
                                    to make instant cash for cars.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
