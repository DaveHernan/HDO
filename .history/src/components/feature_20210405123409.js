import { default as React, Component } from 'react'
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"



const Feature = ({ title, projects }) => {
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="gallery">
                
             <Row className="justify-content-center">
            
            {projects
              .filter(project => project.node.featured === true)
              .map(project => {
            
                return (
                  <Col lg="5" md="6" sm="12">
                    <ProjCard proj={project.node} />
                  </Col>
                )
              })}
           
          </Row>
         

        </section>
        <section className="text-center mt-5 font-size-s2">
          <div className="featured-btn">
          <h3>Explore more about our Projects</h3>
          <Link to={'/projects/#projects'}>
            <Button outline color="dark">
              All Projects
            </Button>
          </Link>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Feature
