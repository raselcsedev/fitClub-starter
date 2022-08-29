import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./Join.css";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c47x69l', 'template_e9s4vwq', form.current, 'li7KGR2ZHBQDTD2xf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
      <div>
        <span className="stroke-text">ready to</span>
        <span> level up</span>
      </div>
      <div>
        <span>your body</span>
        <span className="stroke-text"> with us?</span>
      </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
            <input type="email" name="user_name" placeholder="Enter your email" />
            <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
