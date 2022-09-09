import React, { Component, useContext } from "react";
import Reveal from "react-reveal/Reveal/";
import { ServiceDetailsContext as ServiceContext } from "../store/ServiceDetailsContext";

function Breadcrumb({
    Pdescription,
    breadcrumbClass,
    imgName,
    padding,
    Ptitle,
    icon,
}) {
    const serviceCtx = useContext(ServiceContext);

    return (
        <section
            className={`${breadcrumbClass}`}
            style={padding && { paddingBottom: padding }}
        >
            <img
                className="breadcrumb_shap"
                src={require("../img/" + imgName)}
                alt=""
            />
            <div className="container">
                <div className="breadcrumb_content text-center">
                    <Reveal effect="fadeInUp">
                        <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
                            {Ptitle.split("-").join(" ")}
                        </h1>
                    </Reveal>
                    {/* <p className="f_400 w_color f_size_16 l_height26">
                        {Pdescription}
                    </p> */}
                    {icon && (
                        <img
                            className="mb-3"
                            src={require("../img/home/" + icon + "2" + ".png")}
                            alt=""
                            width="320"
                            height="280"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

// class Breadcrumb extends Component {
//     static contextType = ServiceContext;
//     render() {
//         var { Pdescription, breadcrumbClass, imgName, padding } =
//             this.props;
//         return (
//             <section className={`${breadcrumbClass}`} style={ padding && { paddingBottom:padding}}>
//                 <img
//                     className="breadcrumb_shap"
//                     src={require("../img/" + imgName)}
//                     alt=""
//                 />
//                 <button onClick="">Hello World!</button>
//                 <div className="container">
//                     <div className="breadcrumb_content text-center">
//                         <Reveal effect="fadeInUp">
//                             <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
//                                 {}
//                             </h1>
//                         </Reveal>
//                         {/* <p className="f_400 w_color f_size_16 l_height26">
//                             {Pdescription}
//                         </p> */}
//                         {this.contextType.serviceName  && (
//                             <img
//                                 className="mb-3"
//                                 src={require("../img/home/" +  + '2' + ".png")}
//                                 alt=""
//                                 width="320"
//                                 height="280"
//                             />
//                         )}
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }
export default Breadcrumb;
