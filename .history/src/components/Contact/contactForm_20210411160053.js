import React from 'react';
import emailjs from "emailjs-com";

import { Container, Row, Col } from "reactstrap"

export default function ContactForm(){

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_fw8i047', e.target, 'user_n9buWKLfHikoV8N5zNT5E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

return (
    <Container>
    <main className="contact-page section-lg">
      <Row>
        <Col lg="8" className="contact-form border-right pl-5 pr-5">
          <h2 className="header-title text-center font-weight-bold">
            Get in Touch
          </h2>
          <p className="contact-description font-size-90 text-center text-muted mb-4">
            We are available by e-mail or by phone. 
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
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
          </form>
        </Col>
      </Row>
    </main>
  </Container>
    )

}

