import React, { createContext, useState } from "react";
import HRServiceItems from "../components/Service/HRServiceItems";
import Faq from "../Pages/ServiceDetails";

export const ServiceDetailsContext = createContext({
    serviceName: "",
    serviceImage: "",
    addServiceName: () => {},
    addSeriveImage: () => {},
});

export const ServiceDetailsProvider = () => {
    const [sName, setSName] = useState("");
    const [sImage, setSImage] = useState("");

    const addServiceNameHandler = (name) => {
        setSName(name);
    };

    const addServiceImageHandler = (image) => {
        setSImage(image);
    };

    let context = {
        name: sName,
        image: sImage,
        addServiceName: addServiceNameHandler,
        addServiceImage: addServiceImageHandler,
    };

    return (
        <ServiceDetailsContext.Provider value={context}>
            <HRServiceItems />
            <Faq />
        </ServiceDetailsContext.Provider>
    );
};
