import React, {useState} from "react"

import "./Carousel.css";
import {images} from "../images/data/CarouselData"


function Carousel() {

    const [currImg, setCurrImg] = useState(2)
    return (
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage: 'url ($(images[currImg]))'}}>
                <img src={images[currImg].img}/>
            </div>      
        </div>
    )
}

export default Carousel
