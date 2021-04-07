import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"



const Feature = ({  proj }) => {
  const {  title, description, slug } = proj
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="proj-card">
          <Row>
          <Link to={`${slug}/#single-project`}>
        
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
