import React, { createContext, useState } from "react";

export const BlogContext = createContext({
    title: "",
    // description: "",
    // date: "",
    // body: "",
    setBlogPost: (title) => {},
    // setDescription: (desc) => {},
    // setDate: (date) => {},
    // setBody: (body) => {},
});

export const BlogContextProvider = (props) => {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [blogDate, setBlogDate] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [blogImage, setBlogImage] = useState("");

    const blogHandler = (title, desc, date, body, imgPath) => {
        // console.log("Handle Title");
        setBlogTitle(title);
        setBlogDescription(desc);
        setBlogDate(date);
        setBlogBody(body);
        setBlogImage(imgPath);
    };

    // const blogDateHandler = (date) => {
    //     console.log("Handle Date");
    //     setBlogDate(date);
    // };

    // const blogDescriptionHandler = (desc) => {
    //     console.log("Handle Description");
    //     setBlogDescription(desc);
    // };

    // const blogBodyHandler = (desc) => {
    //     console.log("Handle Body");
    //     setBlogBody(desc);
    // };

    let context = {
        title: blogTitle,
        description: blogDescription,
        date: blogDate,
        body: blogBody,
        image: blogImage,
        setBlogPost: blogHandler,
        // setDescription: blogDescriptionHandler,
        // setDate: blogDateHandler,
        // setBody: blogBodyHandler,
    };

    return (
        <BlogContext.Provider value={context}>
            {props.children}
        </BlogContext.Provider>
    );
};
