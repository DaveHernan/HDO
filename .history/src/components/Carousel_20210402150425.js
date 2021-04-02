import React from "react"

import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"

import "./Carousel.css";

const Carousel = ({projects}) =>{
    return (
        <div >
    {projects
              .filter(project => project.node.featured === true)
              .map(project => {
                return (
                  <Col lg="4" md="6" sm="12">
                    <ProjCard proj={project.node} />
                  </Col>
                )
              })}
        </div>
    )
}

export default Carousel
