import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import "./services.scss"

import Service from "./service"


import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"

import { Link } from "gatsby"

const Services = ({ title }) => {
  const card = [
    {
      title: `Construction`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Remodeling`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Interior Design`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
  ]
  return (
    <div className="services" id="services">

      <Container>
           <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>
        <Row>
          {card.map(service => {
            return (
              <Col md="6" lg="4">
                <Service services={service} />
              </Col>
            )
          })}
        </Row>
       
        <section className="text-center mt-5 font-size-s2">
          <Link to={'/services/#services'}>
            <Button outline color="dark">
              All Projects
            </Button>
          </Link>
        </section>
         
      </Container>
    </div>
  )
}

export default Services
