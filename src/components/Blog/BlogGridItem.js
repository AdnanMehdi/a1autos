import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../store/BlogContext";

function BlogGridItem({ date, Title, description, btn, body, image, slug }) {
    let blogDate = new Date(date);
    const blogCtx = useContext(BlogContext);

    return (
        <div
            className="col-lg-6"
            onClick={() => {
                blogCtx.setBlogPost(Title, description, date, body, image);
            }}
        >
            <Link to={`/Blog/${slug}`}>
                <div className="blog_list_item blog_list_item_two">
                    <a href="#" className="post_date">
                        <h2>
                            {blogDate.getDate()}{" "}
                            <span>
                                {blogDate.toLocaleDateString("default", {
                                    month: "short",
                                })}
                            </span>
                        </h2>
                    </a>
                    <a href="#">
                        <img
                            className="img-fluid"
                            src={require("../../img/new/blog/" +
                                image +
                                ".jpg")}
                            alt=""
                        />
                    </a>

                    <div className="blog_content">
                        {/* <a href="/#"> */}
                        <h5 className="blog_title">{Title}</h5>
                        {/* </a> */}
                        <p>{description}</p>
                        <div className="post-info-bottom">
                            <a href="/#" className="learn_btn_two">
                                {btn} <i className="arrow_right"></i>
                            </a>
                            {/* <a className="post-info-comments" href="/#">
                                    <i className="icon_comment_alt" aria-hidden="true"></i>
                                    <span>{comment} Comments</span>
                                </a> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

// class BlogGridItem extends Component{
//     render(){
//         let{date, Title, description, btn, comment, image}=this.props;
//         let blogDate = new Date(date);
//         return(
//             <div className="col-lg-6">
//                 <div className="blog_list_item blog_list_item_two">
//                     <a href="/#" className="post_date">
//                         <h2>{blogDate.getDate()} <span>{blogDate.toLocaleDateString('default', {month:'short'})}</span></h2>
//                     </a>
//                     <a href="blog-single.html"><img className="img-fluid" src={require ("../../img/new/blog/" + image)}alt=""/></a>
//                     <div className="blog_content">
//                         <a href="/#">
//                             <h5 className="blog_title">{Title}</h5>
//                         </a>
//                         <p>{description}</p>
//                         <div className="post-info-bottom">
//                             <a href="/#" className="learn_btn_two">{btn} <i className="arrow_right"></i></a>
//                             {/* <a className="post-info-comments" href="/#">
//                                 <i className="icon_comment_alt" aria-hidden="true"></i>
//                                 <span>{comment} Comments</span>
//                             </a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
export default BlogGridItem;
