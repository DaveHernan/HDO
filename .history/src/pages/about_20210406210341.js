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
    `HDO Builders and Design began in the
    Pangasinan area in February 21, 2017 when
    Engr. Hernan Diego Ochoco, who had worked
    in the residental construction business for
    several years began his own company,
    designing and building many parts of Manila
    and South Luzon. For the next nine months,
    the company grew slowly, working mostly on
    small scale residential projects while gaining a
    reputation for quality services and reliability.`,
  
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
