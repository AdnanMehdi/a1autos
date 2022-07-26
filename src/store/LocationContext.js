import React, { createContext, useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import { Home } from "../Pages/Home";

export const LocationContext = createContext({
    location: "",
    addLocation: (location) => {},
});

export const LocationProvider = (props) => {
    const [currentLocation, setLocation] = useState("");

    function addLocationHandler(location) {
        setLocation(location);
    }

    const context = {
        location: currentLocation,
        addLocation: addLocationHandler,
    };

    return (
        <LocationContext.Provider value={context}>
            {props.children}
        </LocationContext.Provider>
    );
};
