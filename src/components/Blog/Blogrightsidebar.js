import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../store/BlogContext";

function Blogrightsidebar({ BlogData }) {
    const blogCtx = useContext(BlogContext);
    return (
        <div className="blog-sidebar">
            <div className="widget sidebar_widget widget_recent_post mt_60">
                <div className="widget_title">
                    <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
                    <div className="border_bottom"></div>
                </div>
                {BlogData.Blogs.slice(0, 5).map((post) => {
                    return (
                        <div className="media post_item" key={post.id}>
                            <img
                                src={require("../../img/new/blog/" +
                                    post.image +
                                    ".jpg")}
                                alt=""
                                width="100"
                                height="80"
                            />
                            <div className="media-body">
                                <Link
                                    to={`/Blog/${post.slug}`}
                                    onClick={() => {
                                        blogCtx.setBlogPost(
                                            post.title,
                                            post.description,
                                            post.date,
                                            post.body,
                                            post.image
                                        );
                                    }}
                                >
                                    <h3 className="f_size_16 f_p f_400">
                                        {post.title}
                                    </h3>
                                </Link>
                                <div className="entry_post_info">
                                    By: <span> Admin | </span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

{
    /* class Blogrightsidebar extends Component {
    render() {
        let BlogData = this.props.BlogData;
        return (
            <div className="blog-sidebar"> */
}
{
    /* <div className="widget sidebar_widget widget_search">
                    <form action="#" className="search-form input-group">
                        <input type="search" className="form-control widget_input" placeholder="Search"/>
                        <button type="submit"><i className="ti-search"></i></button>
                    </form>
                </div> */
}
{
    /* // <div className="widget sidebar_widget widget_recent_post mt_60">
                //     <div className="widget_title">
                //         <h3 className="f_p f_size_20 t_color3">Recent posts</h3>
                //         <div className="border_bottom"></div>
                //     </div>
                //     {BlogData.Blogs.slice(0, 5).map((post) => {
                //         return (
                //             <div className="media post_item" key={post.id}>
                //                 <img
                //                     src={require("../../img/new/blog/" +
                //                         post.image +
                //                         ".jpg")}
                //                     alt=""
                //                     width="100"
                //                     height="80"
                //                 />
                //                 <div className="media-body">
                //                     <Link
                //                         to={`/Blog/${post.slug}`}
                //                         onClick={() => {
                //                             alert("hello World");
                //                         }}
                //                     >
                //                         <h3 className="f_size_16 f_p f_400">
                //                             {post.title}
                //                         </h3>
                //                     </Link>
                //                     <div className="entry_post_info">
                //                         By: <span> Admin | </span>
                //                         <span>{post.date}</span>
                //                     </div>
                //                 </div>
                //             </div>
                //         );
                //     })}
                // </div> */
}
{
    /* <div className="widget sidebar_widget widget_categorie mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Categories</h3>
                        <div className="border_bottom"></div>
                    </div>
                    <ul className="list-unstyled">
                        <li> <a href=".#"><span>Fashion</span><em>(54)</em></a> </li>
                        <li> <a href=".#"><span>Food for thought</span><em>(83)</em></a> </li>
                        <li> <a href=".#"><span>Gaming</span><em>(96)</em></a> </li>
                        <li> <a href=".#"><span>Music</span><em>(38)</em></a> </li>
                        <li> <a href=".#"><span>Uncategorized</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>SaasLand</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>Project Management</span><em>(44)</em></a> </li>
                        <li> <a href=".#"><span>Wireframing</span><em>(44)</em></a> </li>
                    </ul>
                </div>
                <div className="widget sidebar_widget widget_tag_cloud mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Tags</h3>
                        <div className="border_bottom"></div>
                    </div>
                    <div className="post-tags">
                        <a href=".#">SaasLand</a>
                        <a href=".#">Web Design</a>
                        <a href=".#">Saas</a>
                        <a href=".#">Cooling System</a>
                        <a href=".#">Corporate</a>
                        <a href=".#">Software</a>
                        <a href=".#">Landing</a>
                        <a href=".#">Wheels</a>
                    </div>
                </div> */
}
{
    /* //             </div>
//         );
//     }
// } */
}
export default Blogrightsidebar;
