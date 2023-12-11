import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";
import DigitalMarketing from "./Pages/Digital-marketing";
import PaymentProcessing from "./Pages/Payment-processing";
import HRManagement from "./Pages/HR-Management";
import Startup from "./Pages/Startup";
import HomeCRM from "./Pages/Home-CRM";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Process from "./Pages/Process";
import Team from "./Pages/Team";
import Portfolio2col from "./Pages/Portfolio-2col";
import Portfolio3col from "./Pages/Portfolio-3col";
import Portfoliofull4col from "./Pages/Portfolio-fullwidth-4col";
import PortfolioSingle from "./Pages/PortfolioSingle";
import Bloglist from "./Pages/Bloglist";
import BlogSingle from "./Pages/BlogSingle";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Landing from "./Pages/Landing";
import homesupport from "./Pages/home-support";
import homeERP from "./Pages/Home-ERP";
import homeHosting from "./Pages/HomeHosting";
import homeSecurity from "./Pages/HomeSecurity";
import homeSoftwareDark from "./Pages/Home-software-dark";
import HomeAppShowcase from "./Pages/Home-app-showcase";
import HomeCloud from "./Pages/Home-cloud";
import HomeTracking from "./Pages/Home-tracking";
import HomeEvent from "./Pages/Home-event";
import HomeChat from "./Pages/Home-chat";
import Price from "./Pages/Price";
import Faq from "./Pages/Faq";
import ServiceDetails from "./Pages/ServiceDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BlogGridPage from "./Pages/BlogGridPage";
import BlogGridPage2 from "./Pages/BlogGridPage2";
import BlogGridPage3 from "./Pages/BlogGridPage3";
import BlogGridPage4 from "./Pages/BlogGridPage4";
import NotFound from "./Pages/404";
import { HomeAcacia } from "./Pages/HomeAcacia";
import { Helmet } from "react-helmet"
import BlogGridPage5 from "./Pages/BlogGridPage5";
import BlogGridPage6 from "./Pages/BlogGridPage6";
import BlogGridPage7 from "./Pages/BlogGridPage7";
import BlogGridPage8 from "./Pages/BlogGridPage8"


class App extends Component {
    componentDidMount() {
        this.props.hideLoader();
    }
    render() {
        return (
            <Router>
                <Switch>
                    
                    <ScrollToTopRoute
                        exact={true}
                        path={"/"}
                        component={Home}
                    />
                    
                    <ScrollToTopRoute
                        path={"/Acacia-Ridge"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Brisbane"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Beenleigh"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Coopers-Plains"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Gold-Coast"}
                        component={HomeAcacia}
                    />
                    
                    <ScrollToTopRoute
                        path={"/Ipswich"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Rocklea"}
                        component={HomeAcacia}
                        
                    />
                    
                    <ScrollToTopRoute
                        path={"/Sunnybank"}
                        component={HomeAcacia}
                        rel="canonical"
                    />
                    
                    <ScrollToTopRoute
                        path={"/Toowoomba"}
                        component={HomeAcacia}
                        
                    />
                    <ScrollToTopRoute
                        path={"/Underwood"}
                        component={HomeAcacia}
                        
                    />
                    <ScrollToTopRoute
                        path={"/Woodridge"}
                        component={HomeAcacia}
                        
                    />
                    <ScrollToTopRoute
                        path="/Digital-marketing"
                        component={DigitalMarketing}
                        
                    />
                    <ScrollToTopRoute
                        path="/Payment-processing"
                        component={PaymentProcessing}
                    />
                    {/* <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute path="/Home-CRM" component={HomeCRM} /> */}
                    <ScrollToTopRoute path="/About" component={About} />
                    <ScrollToTopRoute
                        path="/Service"
                        exact
                        component={Service}
                        
                    />
                    <ScrollToTopRoute path="/Process" component={Process} />
                    <ScrollToTopRoute path="/Team" component={Team}  />
                    {/* <ScrollToTopRoute
                        path="/Portfolio-2col"
                        component={Portfolio2col}
                    />
                    <ScrollToTopRoute
                        path="/Portfolio-3col"
                        component={Portfolio3col}
                    /> */}
                    <ScrollToTopRoute
                        path="/Portfolio-fullwidth-4col"
                        component={Portfoliofull4col}
                        
                    />
                    {/* <ScrollToTopRoute
                        path="/PortfolioSingle"
                        component={PortfolioSingle}
                    /> */}
                    <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
                    <ScrollToTopRoute
                        path="/Blog/:blogTitle"
                        component={BlogSingle}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/1"
                        component={BlogGridPage}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/2"
                        component={BlogGridPage2}
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/3"
                        component={BlogGridPage3}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/4"
                        component={BlogGridPage4}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/5"
                        component={BlogGridPage5}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/6"
                        component={BlogGridPage6}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/7"
                        component={BlogGridPage7}
                        
                    />
                    <ScrollToTopRoute
                        path="/blog-posts/8"
                        component={BlogGridPage8}
                        
                    />
                    <ScrollToTopRoute path="/Contact" component={Contact} />
                    {/* <ScrollToTopRoute path="/Landing" component={Landing} />
                    <ScrollToTopRoute
                        path="/home-support"
                        component={homesupport}
                    />
                    <ScrollToTopRoute
                        path="/HomeHosting"
                        component={homeHosting}
                    />
                    <ScrollToTopRoute path="/Home-ERP" component={homeERP} />
                    <ScrollToTopRoute
                        path="/HomeSecurity"
                        component={homeSecurity}
                    />
                    <ScrollToTopRoute
                        path="/HomeAppShowcase"
                        component={HomeAppShowcase}
                    />
                    <ScrollToTopRoute
                        path="/Home-software-dark"
                        component={homeSoftwareDark}
                    />
                    <ScrollToTopRoute
                        path="/Home-cloud"
                        component={HomeCloud}
                    />
                    <ScrollToTopRoute
                        path="/Home-Tracking"
                        component={HomeTracking}
                    />
                    <ScrollToTopRoute
                        path="/Home-event"
                        component={HomeEvent}
                    />
                    <ScrollToTopRoute path="/Home-chat" component={HomeChat} /> */}
                    <ScrollToTopRoute path="/Price" component={Price} />
                    <ScrollToTopRoute path="/Faq" component={Faq} />
                    {/* <ScrollToTopRoute
                        path="/ServiceDetails"
                        component={ServiceDetails}
                    /> */}
                    <ScrollToTopRoute
                        path="/service/:serviceName/:serviceImage"
                        component={ServiceDetails}
                        
                    />
                    {/* <ScrollToTopRoute path="/SignIn" component={SignIn} />
                    <ScrollToTopRoute path="/SignUp" component={SignUp} /> */}
                    <ScrollToTopRoute component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
