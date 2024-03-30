import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import BlogData from "../components/Blog/BlogData";
import BlogGrid13 from "../components/Blog/BlogGrid13";
// import BlogGrid6 from "../components/Blog/BlogGrid6";

const BlogGridPage13 = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar
                slogo="sticky_logo"
                cClass="custom_container p0"
                mClass="menu_four"
                nClass="w_manu"
            />
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                Ptitle="Blogs"
                Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
            />

            <BlogGrid13 BlogData={BlogData} />
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};
export default BlogGridPage13;
