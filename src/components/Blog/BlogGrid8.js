import React, { useContext } from "react";
import Blogrightsidebar from "./Blogrightsidebar";
import BlogGridItem from "./BlogGridItem";
import ServiceData from "../Service/ServiceData";
import { Link } from "react-router-dom";

const BlogGrid8 = ({ BlogData }) => {
    return (
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_grid_info">
                        <div className="row">
                            {BlogData.Blogs.slice(70, 80).map((blog) => {
                                return (
                                    <BlogGridItem
                                        date={blog.date}
                                        image={blog.image}
                                        Title={blog.title}
                                        description={blog.excerpt}
                                        body={blog.body}
                                        slug={blog.slug}
                                        btn="Read More"
                                        // comment="3"
                                        key={blog.id}
                                    />
                                );
                            })}
                        </div>
                        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li>
                                <Link
                                    to="/blog-posts/1"
                                    className="page-numbers"
                                >
                                    1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/2"
                                    className="page-numbers"
                                >
                                    2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/3"
                                    className="page-numbers"
                                >
                                    3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/4"
                                    className="page-numbers"
                                >
                                    4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/5"
                                    className="page-numbers"
                                >
                                    5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/6"
                                    className="page-numbers"
                                >
                                    6
                                </Link>
                            </li>
                            <li>
                                <span
                                    aria-current="/blog-posts/7"
                                    className="page-numbers"
                                >
                                    7
                                </span>
                            </li>
                            <li>
                                <span
                                    aria-current="page"
                                    className="page-numbers current"
                                >
                                    8
                                </span>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/9"
                                    className="page-numbers"
                                >
                                    9
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/10"
                                    className="page-numbers"
                                >
                                    10
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/11"
                                    className="page-numbers"
                                >
                                    11
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/12"
                                    className="page-numbers"
                                >
                                    12
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog-posts/13"
                                    className="page-numbers"
                                >
                                    13
                                </Link>
                            </li>
                            {/* <li>
                                <a className="next page-numbers" href=".#">
                                    <i className="ti-arrow-right"></i>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <Blogrightsidebar BlogData={BlogData} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BlogGrid8;
