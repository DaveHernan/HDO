import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.png"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias incidunt reprehenderit. 
    Aliquam harum laboriosam reprehenderit delectus nostrum iste in ullam perspiciatis! Doloremque quibusdam quo quas deleniti. 
    Libero tempore nobis autem pariatur, cumque sunt dolor consequuntur sit velit! Voluptates ea sequi vitae distinctio voluptatem. Quis, 
    tenetur necessitatibus? Dicta, perferendis provident?`,
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                Our mission is to provide builder services that
                surpass our Client’s expectations.
                </p>
                <p>
                                We will accomplish this through the selective
                use of responsible sub-contractors, by hiring
                and retaining first class employees, and by
                approaching the building process with
                honesty and integrity.
                </p>
                <br></br>
               
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Vision">
                <p>
                                Our vision is to create and maintain an
                organization of highly skilled construction
                professionals that serve our Client’s needs
                with honesty and integrity.
                </p>
                <p>
                  To provide an environment that promotes
                  personal growth and self-pride.
                </p>
                <p>
                  Ultimately, to differentiate ourselves as the
                  builder of choice to those seeking quality,
                  personal service, and value.
                </p>
              </AboutCard>
            </Col>
           
         
          </Row>
          <Col md="6">
              
            </Col>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
