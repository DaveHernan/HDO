import React from "react"
import { Container, Button, Row } from "reactstrap"
import { Link } from "gatsby"
import "./quote.scss"

const QuoteUs = () => {
  return (
    <div className="quote" id="quote">
      <section className="parallax-container">
        <div className="theme-wrapper">
          <div className="parallax-content section-lg">
            <Container >
              <Row>
              <h2>Lets build and make into reality your dream.</h2>
              </Row>
              
              <section className="text-center mt-5 font-size-s2">
          <Link to={'/contact/#contact'}>
            <Button outline color="light">
              Contact Us
            </Button>
          </Link>
        </section>
              
            </Container>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuoteUs
