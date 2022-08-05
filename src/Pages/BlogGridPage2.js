import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import BlogGrid2 from "../components/Blog/BlogGrid2";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import BlogData from "../components/Blog/BlogData";

const BlogGridPage2 = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar
                slogo="sticky_logo"
                cClass="custom_container p0"
                mClass="menu_four"
                nClass="w_menu"
            />
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                Ptitle="Blogs"
                Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
            />

            <BlogGrid2 BlogData={BlogData} />
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};
export default BlogGridPage2;
