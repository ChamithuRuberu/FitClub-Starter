import React, {useRef} from 'react';
import './datacollect.css'
import * as emailjs from "@emailjs/browser";
const Datacollect = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3sslrwi', 'template_bh2ifmk', form.current, 'z0UleR0k55ZTeV9e_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
        return(

            <div className="Joins" id="join-us">
                <div className="left-j">

                <span className="stroke-text">READY TO</span>
                <span className="normal-txt"> LEVEL UP</span>
                    <span className="normal-txt"><br/>YOUR BODY</span>
                    <span className="stroke-text">WITH US ?</span>
                <div>

                </div>

            </div>
                <div className="right-j">
                    <form ref={form} className="email-container" onSubmit={sendEmail}>
                        <input type="email"name="user_email"placeholder="Enter the Emai Address"/>
                        <button className="joinbtn">Join </button>
                    </form>
                </div>
            </div>


        )
};

export default Datacollect;