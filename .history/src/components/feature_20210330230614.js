import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"

const Feature = ({ title, projects }) => {
  const { img, description, slug } = proj
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="gallery">
          <Row>
          <Link to={`${slug}/#single-project`}>
        <img src={img.src[0]} alt={img.orig} title={img.author} />
        <section className="wrap-dark">
          <main className="proj-content text-center">
            <h4>{title}</h4>
            <p>{description}</p>
          </main>
        </section>
      </Link>
          </Row>
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
