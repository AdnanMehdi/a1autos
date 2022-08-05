import React, { useContext } from "react";
import Reveal from "react-reveal";
import { Link } from "react-router-dom";
import { ServiceDetailsContext as ServiceContext} from "../../store/ServiceDetailsContext";

function HRServiceItems({
    HRtitle,
    HRdescription,
    Hicon,
    rclass,
    iclass,
    slug,
}) {
    const serviceCtx = useContext(ServiceContext);

    return (
        <div className="col-lg-4 col-sm-6">
            <Link
                to={`/service/${HRtitle}/${Hicon}`}
                // onClick={() => {
                //     serviceCtx.addServiceName('Irfan khan jan');
                //     alert(serviceCtx.serviceName);
                // }}
            >
                {/* <Link to={`/ServiceDetails`}> */}
                <Reveal bottom cascade>
                    <div className={`p_service_item ${rclass}`}>
                        {/* <div className={`icon ${iclass}`}><i className={`ti-${Hicon}`}></i></div> */}
                        <img
                            className="mb-3"
                            src={require("../../img/home/" + Hicon + ".png")}
                            alt=""
                            width="150"
                            height="150"
                        />
                        <h5 className="f_600 f_p t_color3 f_size_24">
                            {HRtitle}
                        </h5>
                        <p className="f_400">{HRdescription}</p>
                        {/* <button onClick={() => {
                            serviceCtx.addServiceName('Irfan khan jan');
                            alert(serviceCtx.serviceName);
                        }}>Click me</button> */}
                    </div>
                </Reveal>
            </Link>
        </div>
    );
}

// class HRServiceItems extends Component {
//     render() {
//         var { HRtitle, HRdescription, Hicon, rclass, iclass, slug } =
//             this.props;
//         return (
//             <div className="col-lg-4 col-sm-6">
//                 <Link to={`Service/${HRtitle}/${Hicon}`} onClick=>
//                 {/* <Link to={`/ServiceDetails`}> */}
//                     <Reveal bottom cascade>
//                         <div className={`p_service_item ${rclass}`}>
//                             {/* <div className={`icon ${iclass}`}><i className={`ti-${Hicon}`}></i></div> */}
//                             <img
//                                 className="mb-3"
//                                 src={require("../../img/home/" +
//                                     Hicon +
//                                     ".png")}
//                                 alt=""
//                                 width="150"
//                                 height="150"
//                             />
//                             <h5 className="f_600 f_p t_color3 f_size_24">{HRtitle}</h5>
//                             <p className="f_400">{HRdescription}</p>
//                         </div>
//                     </Reveal>
//                 </Link>
//             </div>
//         );
//     }
// }
export default HRServiceItems;
