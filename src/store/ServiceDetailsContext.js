import React, { createContext, useState } from "react";
import { defaultProps } from "react-stickynode";
import HRServiceItems from "../components/Service/HRServiceItems";
import Faq from "../Pages/ServiceDetails";

export const ServiceDetailsContext = createContext({
    serviceName: "",
    serviceImage: "",
    addServiceName: () => {},
    addSeriveImage: () => {},
});

export const ServiceDetailsProvider = (props) => {
    const [sName, setSName] = useState("");
    const [sImage, setSImage] = useState("");

    const addServiceNameHandler = (name) => {
        setSName(name);
    };

    const addServiceImageHandler = (image) => {
        setSImage(image);
    };

    let context = {
        serviceName: sName,
        serviceImage: sImage,
        addServiceName: addServiceNameHandler,
        addServiceImage: addServiceImageHandler,
    };

    return (
        <ServiceDetailsContext.Provider value={context}>
            {props.children}
        </ServiceDetailsContext.Provider>
    );
};
