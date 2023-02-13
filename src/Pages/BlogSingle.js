import React, { useContext } from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Blogsingle from "../components/Blog/Blogsingle";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import { Helmet } from "react-helmet";
import { BlogContext } from "../store/BlogContext";

const BlogSingle = () => {
    const blogCtx = useContext(BlogContext);
    let title = "";
    let metaDescription = "";

    if (blogCtx.title === "5 Ways To Make Cash With Your Car In 2021") {
        title = "5 Ways To Make Cash With Your Car In 2021 – Cash for used Car";
        metaDescription =
            "Are your vehicle expenses mounting up? If so, we have prepared a list of five, we also provide cash for used cars.";
    } else if (
        blogCtx.title ===
        "How To Trade In Your Vehicle With Upside-Down Car Loan"
    ) {
        title =
            "How To Trade In Your Vehicle With Upside-Down Car Loan – Cash for Cars in Brisbane";
        metaDescription =
            "Cars lose more than 20% of their values within the first year of purchase. Knowing Cash for Cars in Brisbane";
    } else if (
        blogCtx.title ===
        "A Quick Guide To Getting The Most Value For Your Totalled Car Instantly"
    ) {
        title =
            "A Quick Guide To Getting The Most Value For Your Totalled Car Instantly – Cash for Wrecked Cars";
        metaDescription =
            "Having suffered a car accident is a traumatic experience in itsel, A Quick Guide To Getting The Most Value For Your Totalled Car Instantly,  Cash for Wrecked Cars";
    } else if (
        blogCtx.title ===
        "5 Reasons Why Your Car Won’t Run + A Solution For Damaged Vehicles In Toowoomba"
    ) {
        title =
            "5 Reasons Why Your Car Won’t Run + A Solution For Damaged Vehicles In Toowoomba";
        metaDescription =
            "Are your vehicle expenses mounting up? If so, 5 Reasons Why Your Car Won’t Run + A Solution For Damaged Vehicles In Toowoomba";
    } else if (
        blogCtx.title ===
        "Sell Your Damaged Car For Cash + Get FREE Towing In Brisbane"
    ) {
        title = "Sell Your Damaged Car For Cash + Get FREE Towing In Brisbane";
        metaDescription =
            "No one likes getting their cars damaged, but sometimes, unfortunately, it can’t be helped. Whether";
    } else if (
        blogCtx.title ===
        "Trade-In Your Old Car With Body Damage And Earn Cash In Brisbane"
    ) {
        title =
            "Trade-In Your Old Car with Body Damage and Earn Cash in Brisbane";
        metaDescription =
            "There are times when you are driving calmly on the road, and a car crashes, Trade-In Your Old Car with Body Damage and Earn Cash in Brisbane";
    } else if (
        blogCtx.title ===
        "10 Common Traits Used To Identify Junk and End-of-life Vehicles"
    ) {
        title =
            "10 Common Traits Used To Identify Junk and End-of-life Vehicles";
        metaDescription =
            "One man’s trash is another man’s treasure. But sometimes, it’s difficult for car owners to";
    }

    return (
        <div className="body_wrapper">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>

            <CustomNavbar
                slogo="sticky_logo"
                mClass="menu_four"
                nClass="w_menu ml-auto mr-auto"
            />
            <Breadcrumb
                breadcrumbClass="breadcrumb_area"
                imgName="breadcrumb/banner_bg.png"
                Ptitle="Blog Post"
                Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
            />
            <Blogsingle />
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};
export default BlogSingle;
