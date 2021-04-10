import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../components/pageHeader"

import "./contact.scss"

import Smartphone from "../assets/svg/smartphone.svg"
import Telephone from "../assets/svg/phone.svg"
import Mail from "../assets/svg/mail.svg"
import Pin from "../assets/svg/map-pin.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"


const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactdataQuery {
      site {
        siteMetadata {
          title
          email
          social {
            facebook
            twitter
            instagram
            linkedin
          }
          contact {
            mobile
            telephone
          }
          address
          satellite
          map
        }
      }
    }
  `)

  const { title, email, social, contact, address, satellite, map } = data.site.siteMetadata
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
              <h3 className="header-title text-center font-weight-bold">
                How can we help?
              </h3>
              <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'hernankhristiandave@yahoo.com'}
            >
              Let's Talk
            </a>
            </Col>
            <Col lg="4" className="contact-info pl-5 pr-5">
              <aside className="contact-info">
                <section className="get-social border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Get Social</p>
                  <Row className="ml-0">
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSVG className="stroke-svg" />
                    </a>
                  
                  </Row>
                </section>
                <section className="telephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Telephone/Fax
                  </p>
                  <Row className="ml-0">
                    <Telephone className="fill-svg fill-color" />{" "}
                    {contact.telephone}
                  </Row>
                </section>
                <section className="mobilephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Mobile Phone
                  </p>
                  <Row className="ml-0">
                    <Smartphone className="stroke-svg stroke-color" />{" "}
                    {contact.mobile}
                  </Row>
                </section>
                <section className="email border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">E-mail</p>
                  <Row className="ml-0">
                    <Mail className="stroke-svg stroke-color" /> {email}
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Address</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>{address}</p>
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Satellite</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>{satellite}</p>
                  </Row>
                </section>
              </aside>
            </Col>
          </Row>
        </main>
      </Container>
      <iframe
        src={map}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        title={`${title} office map`}
      ></iframe>
    </section>
  )
}

export default ContactPage
