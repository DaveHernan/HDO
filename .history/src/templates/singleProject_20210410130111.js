import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import PhotoViewer from "../components/photoViewer"
import List1 from "../components/list1"


export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      category
      description
      img {
        src
        orig
        author
      }
      completionDate
      amount
      duration
      owner
      address
    }
  }
`

const SingeProject = props => {
  const {
    title,
    category,
    description,
    img,
    completionDate,
    amount,
    duration,
    owner,
    address,
  } = props.data.projectsJson

  return (
    <main className="singe-project section-lg" id="single-project">
      <Container>
        <Row>
          <Col lg="5" className="proj-details">
            <h2 className="header-title text-center text-capitalize">
              {title}
            </h2>
            <p className="description text-secondary">{description}</p>
            <section className="details mt-5 mb-5">
              <List1
                className="font-size-120"
              
                title="Owner"
                value={owner}
              />
              <hr />
              <List1
                className="font-size-120"
               
                title="Location"
                value={address}
              />
              <hr />
              <List1
                className="font-size-120"
                
                title="Scope of Works"
                value={category.map((cat, index, category) =>
                  index === category.length - 1 ? cat : cat + ", "
                )}
              />
              <hr />
              <List1
                className="font-size-120"
             
                title="Total Cost"
                value={amount}
              />
              <hr />
              <List1
                className="font-size-120"
                
                title="Duration Date"
                value={duration}
              />
              <hr />
              <List1
                className="font-size-120"
             
                title="Completion date"
                value={completionDate}
              />
            </section>
          </Col>
          <Col lg="7" className="proj-photos">
            <PhotoViewer list={img} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SingeProject
