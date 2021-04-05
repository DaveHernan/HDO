import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"
import Fade from 'Fade';



const Feature = ({ title, projects }) => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="gallery">
                
             <Row>
            {projects
              .filter(project => project.node.featured === true)
              .map(project => {
                return (
                  <Col lg="4" md="6" sm="12">
                    <Fade
                right={isDesktop}
                bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <ProjCard proj={project.node} />
                    </Fade>
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
