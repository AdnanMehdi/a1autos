// import React, {Component} from 'react';

// class Contacts extends Component {
//     state = {
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     }

//     // handle the value
//     handleChange = input => e => {
//         this.setState({[input]: e.target.value});
//     }

//     when submit btn is clicked
//     submitForm = (e) => {
//         const {name, email, message} = this.state;

//         // create a new XMLHttpRequest
//         var xhr = new XMLHttpRequest();

//         // get a callback when the server responds
//         xhr.addEventListener('load', () => {
//             // update the response state and the step

//             this.setState ({
//                 emailStatus: xhr.responseText
//             });
//         });
//         // open the request with the verb and the url
//         xhr.open('GET', 'https://droitthemes.com/sendemail/index.php?sendto=' + email +
//                                 '&name=' + name +
//                                 '&message=' + message);
//         // send the request
//         xhr.send();

//         // reset the fields
//         this.setState({
//             name: '',
//             email: '',
//             message: '',
//             emailStatus: ''
//         });
//         e.preventDefault();
//     }

//     render(){
//         const {name, email, subject, message, emailStatus} = this.state;
//         return(
//             <section className="contact_info_area sec_pad bg_color">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
//                                 <p className="f_400 f_size_15">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia</p>
//                             </div>
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+096) 302 443 7488</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:3024437488">(+096) 204 353 6684</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:saasland@gmail.com">saasland@gmail.com</a></p>
//                             </div>
//                         </div>
//                         <div className="contact_form col-lg-9">
//                             <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
//                             <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={name} id="name" name="name" placeholder="Your Name" onChange={this.handleChange('name')}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={email} name="email" id="email" placeholder="Your Email" onChange={this.handleChange('email')}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={subject} id="subject" name="subject" placeholder="Subject" onChange={this.handleChange('subject')}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <textarea value={message} onChange={this.handleChange('message')} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn_three">Send Message</button>
//                             </form>
//                             {emailStatus ? emailStatus : null}
//                             <div id="success">Your message succesfully sent!</div>
//                             <div id="error">Opps! There is something wrong. Please try again</div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         )
//     }
// }

// export default Contacts;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
    // const {name, email, subject, message, emailStatus} = this.state;
    const [status, setStatus] = useState();
    const form = useRef();
    const name = useRef(null);
    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_iaz8dda",
                "template_7qcu53j",
                form.current,
                "3nu8MipAR5Bt-cYMp"
            )
            .then(
                (result) => {
                    setStatus({ type: "success" });
                    name.current.value = "";
                    email.current.value = "";
                    subject.current.value = "";
                    message.current.value = "";
                },
                (error) => {
                    setStatus({ type: "error" });
                }
            );
    };

    return (
        <section className="contact_info_area sec_pad bg_color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                                Office Address
                            </h6>
                            <p className="f_400 f_size_15">
                                31B Randolph Street, Rocklea 4106 Australia.
                            </p>
                        </div>
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                                Contact Info
                            </h6>
                            <p className="f_400 f_size_15">
                                <span className="f_400 t_color3">Phone:</span>
                                <a href="tel:0448434141">0448 434 141</a>
                            </p>
                            {/* <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:3024437488">(+096) 204 353 6684</a></p> */}
                            <p className="f_400 f_size_15">
                                <span className="f_400 t_color3">Email:</span>{" "}
                                <a href="mailto:aa1autorecycling@gmail.com">
                                    aa1autorecycling@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="contact_form col-lg-8">
                        <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                            Leave a Message
                        </h2>
                        {status?.type === "success" && (
                            <p className="alert alert-success">
                                Message Send Succesfully
                            </p>
                        )}
                        {status?.type === "error" && (
                            <p className="alert alert-danger">
                                Message Not Sent
                            </p>
                        )}
                        <form
                            onSubmit={sendEmail}
                            className="contact_form_box"
                            method="post"
                            id="contactForm"
                            ref={form}
                        >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            ref={name}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            ref={email}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="Subject"
                                            ref={subject}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="10"
                                            placeholder="Enter Your Message . . ."
                                            ref={message}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn_three">
                                Send Message
                            </button>
                        </form>
                        {/* {emailStatus ? emailStatus : null} */}
                        <div id="success">Your message succesfully sent!</div>
                        <div id="error">
                            Opps! There is something wrong. Please try again
                        </div>

                        <div className="mt-5 embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.035519900801!2d152.99613961505898!3d-27.561408082852555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5a1673c07aff4d9!2sA1%20Auto%20Recycling%20-%20Cash%20For%20Cars!5e0!3m2!1sen!2s!4v1574077538011!5m2!1sen!2s"
                                frameborder="0"
                                width="850"
                                height="450"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

// import React, {Component, useState} from 'react';
// import axios from "axios";

//         const handleClick = (e) => {
//             e.preventDefault();

//             if(e.target.id === 'name'){
//                 setName(e.target.value)
//             }else{
//                 setEmail(e.target.value)
//             }
//         }

//         const handleSubmit = (e) => {
//             e.preventDefault();

//             const dataToSubmit = {
//                 name,
//                 email
//             }

//             axios.post("api/sedMail",dataToSubmit )

//         }

// class Contacts extends Component {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     render(){

//         return(
//             <section className="contact_info_area sec_pad bg_color">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
//                                 <p className="f_400 f_size_15">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia</p>
//                             </div>
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+096) 302 443 7488</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:3024437488">(+096) 204 353 6684</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:saasland@gmail.com">saasland@gmail.com</a></p>
//                             </div>
//                         </div>
//                         <div className="contact_form col-lg-9">
//                             <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
//                             <form onSubmit={handleSubmit} className="contact_form_box" method="post" id="contactForm">
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={name} id="name" name="name" placeholder="Your Name" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={email} name="email" id="email" placeholder="Your Email" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <input type="text"  id="subject" name="subject" placeholder="Subject" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <textarea onClick={handleClick} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn_three" onClick={handleSubmit}>Send Message</button>
//                             </form>
//                             {/* {emailStatus ? emailStatus : null} */}
//                             <div id="success">Your message succesfully sent!</div>
//                             <div id="error">Opps! There is something wrong. Please try again</div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         )
//     }
// }

// export default Contacts;
