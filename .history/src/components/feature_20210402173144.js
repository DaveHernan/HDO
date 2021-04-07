import React , {Component}from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"
import  Carousel  from "react-elastic-carousel"


const Feature = ({ title, projects }) => {
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="gallery">
             <Carousel>
            {projects
              .filter(project => project.node.featured === true)
              .map(project => {
                return (
                  <Col lg="4" md="6" sm="12">
                    <ProjCard proj={project.node} />
                  </Col>
                )
              })}
          </Carousel>
         

        </section>
        <section className="text-center mt-5 font-size-s2">
          <p className="">Explore more about our Projects</p>
          <Link to={'/projects/#projects'}>
            <Button outline color="dark">
              All Projects
            </Button>
          </Link>
        </section>
      </Container>
    </div>
  )
}

export default Feature
