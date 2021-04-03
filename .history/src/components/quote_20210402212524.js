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
            <Container className="flex-sb">
              <Row>
              <h3>Looking for a high quality constructor for your project?</h3>
              </Row>
              
              <section className="text-center mt-5 font-size-s2">
              <Link to="/contact/#contact" className="center">
                <Button>Quote to Us</Button>
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
