import React, {useState} from "react"
import { Container, Row, Col, Button } from "reactstrap"
import "./Carousel.css";
import {images} from "../images/data/CarouselData"


function Carousel() {

    const [currImg, setCurrImg] = useState(1)
    return (
        <div className="carousel">
            <Container>
            <Row>
            <div className="carouselInner" style={{backgroundImage: 'url ($(images[currImg]))'}}>
                <img src={images[currImg].img}/>
                </div>
                </Row>
                </Container>
       
                
        </div>
    )
}

export default Carousel
