import React from "react"
import { Container, Row, Col } from "reactstrap"

import PageHeader from "../components/pageHeader"
import emailjs from "emailjs-com";

import "./contact.scss"

import Smartphone from "../assets/svg/smartphone.svg"
import Telephone from "../assets/svg/phone.svg"
import Mail from "../assets/svg/mail.svg"
import Pin from "../assets/svg/map-pin.svg"


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
    <section id="contact">
      <PageHeader title="Contact" />
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
              <form onSubmit={sendEmail} >
            <input type="hidden" name="form-name" value="contact" />
            <Row>
              <Col className="mb-4" md="6">
                <input
                  className="form-control"
                  type="text"
                  name="from_name"
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
            <Col lg="4" className="contact-info pl-5 pr-5">
              <aside className="contact-info">
                
                <section className="telephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Telephone/Fax
                  </p>
                  <Row className="ml-0">
                    <Telephone className="fill-svg fill-color" />{" "}
                    (+63) 915 312 3148
                  </Row>
                </section>
                <section className="mobilephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Mobile Phone
                  </p>
                  <Row className="ml-0">
                    <Smartphone className="stroke-svg stroke-color" />{" "}
                    (+63) 907 032 3711
                  </Row>
                </section>
                <section className="email border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">E-mail</p>
                  <Row className="ml-0">
                    <Mail className="stroke-svg stroke-color" />  info@hdobuilders.com
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Address</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>Zone 7 Bobonan Asingan Pangasinan 2439 </p>
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Satellite</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>Sawalag Dasmarinas, Cavite 4114 </p>
                  </Row>
                </section>
              </aside>
            </Col>
          </Row>
        </main>
      </Container>
      <iframe
        src={'https://maps.google.com/maps?q=16.0343834,120.6328583&t=&z=11&ie=UTF8&iwloc=&output=embed'}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        title={` office map`}
      ></iframe>
    </section>
  )
}



