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
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="userName"
                      placeholder="Your Name*"
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="tel"
                     
                      name="phone"
                      id="userName"
                      placeholder="Phone"
                      pattern="[+]{1}[0-9]{11,14}" required
                    />
                  </Col>
                  <Col className="mb-1" md="12">
                    <textarea
                      className="form-control"
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Your Message*"
                      rows="7"
                      required
                    ></textarea>
                  </Col>
                  <Col className="mb-4" md="12">
                    <input
                      className="form-control-file"
                      type="file"
                      name="file"
                      id="attachedFile"
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="E-mail*"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <button
                      className="text-light font-weight-bold text-uppercase btn btn-secondary btn-block"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </Col>
                </Row>
                </div>
            </form> 
        </div>
    )

}

