import React from 'react';
import emailjs from "emailjs-com";

export default function ContactUs(){

function sendEmail(e) {

}

return (
        <div className="container">
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </div>
            </form> 
        </div>
    )

}
export default contactForm
