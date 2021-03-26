import React from "react"
import { Container } from "reactstrap"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import "./hero.scss"

const Hero = ({ title, description }) => {
  return (
    <div className="hero" id="hero">
      <section className="h-100 d-flex align-items-center text-left bg-dark-40">
        <Container>
          <main className="hero-content">
            <div className="heroh1">
            <h1 className="title">Building Trust</h1>
            <h1 className="title">with Quality work</h1>
            </div>
            <p className="hero-description">{description}</p>
            <section className="hero-buttons">
              <Button href="contact">Contact Us</Button>
            
            </section>
          </main>
        </Container>
      </section>
    </div>
  )
}

export default Hero
