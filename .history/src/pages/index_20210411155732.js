import React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// ---------- Themes colors ----------
import "../themes/green.scss"
import "../themes/orange.scss"

// ---------- Components ----------
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import QuoteUs from "../components/quote"
import Feature from "../components/feature"
import News from "../components/news"
import ContactForm from "../components/contact/contactForm"


const IndexPage = ({ data }) => {
  const { fullTitle, description, about } = data.site.siteMetadata

  return (
    <div>
   <Hero title={fullTitle} description={description} />
      
      <Feature
        title="Featured Projects"
        projects={data.allProjectsJson.edges}
      />
      
      <Services />
    
     
      <About about={about} />
      <News /> 
       <QuoteUs />
      <ContactForm/>


    </div>
  )
}

export const projectsQuery = graphql`
  query FeaturedProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          slug
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
          featured
        }
      }
    }
    site {
      siteMetadata {
        fullTitle
        description
        about
      }
    }
  }
`

export default IndexPage
