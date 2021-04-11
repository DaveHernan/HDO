import React from 'react';
import emailjs from "emailjs-com";

export default function ContactForm(){

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_iyx2as6', e.target, 'user_n9buWKLfHikoV8N5zNT5E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

return (
        <div className="container">
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <input type="hidden" name="number" />
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </div>
            </form> 
        </div>
    )

}

