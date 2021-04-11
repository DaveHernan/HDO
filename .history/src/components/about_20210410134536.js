import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"

import companyThumbnail from "../images/company.png"

import "./about.scss"

const About = ({ about }) => {
  return (
    <div className="about section-lg">
      <Container>
        <Row>
          <Col md="6">
            <section className="about-content mx-5">
              <h2 className="header-title font-weight-bold text-uppercase text-decoration:none">
                About Us
              </h2>
              <p className="about-description font-size-90 text-secondary my-2">
                {about}
              </p>
              
              <Link to="/about/#about" className="about-btn-lnk">
                <Button>Read More</Button>
              </Link>
            </section>
          </Col>
          <Col md="6">
            <section className="about-thumbnail">
              <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-thumbnail"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
