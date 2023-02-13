import React, { useContext } from "react";
import Blogrightsidebar from "./Blogrightsidebar";
import { BlogContext } from "../../store/BlogContext";
import BlogData from "./BlogData";

const Bloglists = () => {
    const blogCtx = useContext(BlogContext);
    let date = new Date(blogCtx.date);

    return (
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_sidebar_left">
                        <div className="blog_single mb_50">
                            <img
                                className="img-fluid"
                                src={require(`../../img/new/blog/${blogCtx.image}.jpg`)}
                                alt=""
                            />
                            <div className="blog_content">
                                <div className="post_date">
                                    <h2>
                                        {date.getDate()}
                                        <span>
                                            {date.toLocaleDateString(
                                                "default",
                                                { month: "short" }
                                            )}
                                        </span>
                                    </h2>
                                </div>
                                <div className="entry_post_info">
                                    By:
                                    <span> Admin</span>
                                    {/* <a href=".#">2 Comments</a>
                                    <a href=".#">SaasLand</a> */}
                                </div>
                                <a href=".#">
                                    <h5 className="f_p f_size_28 f_500 t_color mb-30">
                                        {blogCtx.title}
                                    </h5>
                                </a>
                                <p
                                    className="f_400 mb-30"
                                    dangerouslySetInnerHTML={{
                                        __html: blogCtx.body,
                                    }}
                                ></p>
                                {/* <div className="post_share">
                                    <div className="post-nam"> Share: </div>
                                    <div className="flex">
                                        <a href=".#">
                                            <i className="ti-facebook"></i>
                                            Facebook
                                        </a>
                                        <a href=".#">
                                            <i className="ti-twitter"></i>
                                            Twitter
                                        </a>
                                        <a href=".#">
                                            <i className="ti-pinterest"></i>
                                            Pinterest
                                        </a>
                                    </div>
                                </div> */}
                                {/* <div className="post_tag d-flex">
                                    <div className="post-nam"> Tags: </div>
                                    <a href=".#">Wheels</a>
                                    <a href=".#">Saasland</a>
                                    <a href=".#">UX/Design</a>
                                </div> */}
                                {/* <div className="media post_author mt_60">
                                    <img
                                        className="rounded-circle"
                                        src={require("../../img/blog-grid/author_img.png")}
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <h5 className="f_p t_color3 f_size_18 f_500">
                                            Bodrum Salvador
                                        </h5>
                                        <h6 className="f_p f_size_15 f_400 mb_20">
                                            Editor
                                        </h6>
                                        <p>
                                            Tinkety tonk old fruit Harry
                                            gormless morish Jeffrey what a load
                                            of rubbish burke what a plonker
                                            hunky-dory cor blimey guvnor.!
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="blog_post">
                            <div className="widget_title">
                                <h3 className="f_p f_size_20 t_color3">
                                    Related Post
                                </h3>
                                <div className="border_bottom"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img
                                                src={require("../../img/blog-grid/post_img_1.png")}
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">March 14, 2018</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">
                                                    Why I say old chap that.
                                                </h5>
                                            </a>
                                            <p className="f_400 mb-0">
                                                Harry bits and bleeding crikey
                                                argy-bargy...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img
                                                src={require("../../img/blog-grid/post_img_2.png")}
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">April 14, 2017</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">
                                                    Bloke cracking goal the.
                                                </h5>
                                            </a>
                                            <p className="f_400 mb-0">
                                                Harry bits and bleeding crikey
                                                argy-bargy...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img
                                                src={require("../../img/blog-grid/post_img_3.png")}
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">March 15, 2016</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">
                                                    Oxford james bond.
                                                </h5>
                                            </a>
                                            <p className="f_400 mb-0">
                                                Harry bits and bleeding crikey
                                                argy-bargy...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget_title mt_100">
                            <h3 className="f_p f_size_20 t_color3">
                                2 Comment
                            </h3>
                            <div className="border_bottom"></div>
                        </div>
                        <ul className="comment-box list-unstyled mb-0">
                            <li className="post_comment">
                                <div className="media post_author mt_60">
                                    <div className="media-left">
                                        <img
                                            className="rounded-circle"
                                            src={require("../../img/blog-grid/comment1.png")}
                                            alt=""
                                        />
                                        <a href=".#" className="replay">
                                            <i className="ti-share"></i>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="f_p t_color3 f_size_18 f_500">
                                            Fletch Skinner
                                        </h5>
                                        <h6 className="f_p f_size_15 f_400 mb_20">
                                            Just Now
                                        </h6>
                                        <p>
                                            Tinkety tonk old fruit Harry
                                            gormless morish Jeffrey what a load
                                            of rubbish burke what a plonker
                                            hunky-dory cor blimey guvnor.!
                                        </p>
                                    </div>
                                </div>
                                <ul className="reply-comment list-unstyled">
                                    <li className="post-comment">
                                        <div className="media post_author comment-content">
                                            <div className="media-left">
                                                <img
                                                    className="rounded-circle"
                                                    src={require("../../img/blog-grid/comment2.png")}
                                                    alt=""
                                                />
                                                <a href=".#" className="replay">
                                                    <i className="ti-share"></i>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="f_p t_color3 f_size_18 f_500">
                                                    Hans Down
                                                </h5>
                                                <h6 className="f_p f_size_15 f_400 mb_20">
                                                    44 mins ago
                                                </h6>
                                                <p>
                                                    Dropped a clanger up the
                                                    kyver easy peasy vagabond
                                                    victoria sponge Charles
                                                    tinkety tonk old fruit
                                                    argy.!
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="widget_title mt_100">
                            <h3 className="f_p f_size_20 t_color3">
                                Leave a Comment
                            </h3>
                            <div className="border_bottom"></div>
                        </div>
                        <form
                            className="get_quote_form row"
                            action=".#"
                            method="post"
                        >
                            <div className="col-md-12 form-group">
                                <textarea
                                    className="form-control message"
                                    placeholder="Comment"
                                ></textarea>
                            </div>
                            <div className="col-md-6 form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-md-12 form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="website"
                                    placeholder="Website (optional)"
                                />
                            </div>
                            <div className="col-md-12">
                                <button
                                    className="btn btn_three btn_hover f_size_15 f_500"
                                    type="submit"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </form> */}
                    </div>
                    <div className="col-lg-4">
                        <Blogrightsidebar BlogData={BlogData} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Bloglists;
