import React from "react"
import { Container } from "reactstrap"
import { Button } from "reactstrap"

import "./hero.scss"

import Typed from "react-typed";

const Hero = ({ description }) => {
  return (
    <div className="hero" id="hero">
      <section className="h-100 d-flex align-items-center text-left bg-dark-40">
        <Container>
          <main className="hero-content">
            <div className="heroh1">
            <h1 className="title">Building Trust</h1>
            <h1 className="title">with Quality Work</h1>
            </div>

            <Typed
          className="typed-text"
          strings={["Construction", "Remodeling", "Interior Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

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
