import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const breakPoints= [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
];

function Carousel() {
    return (
        <>
        <h1 style={{textAlign: "center"}}>Example to setUp your carousel </h1>
        <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <CarouselItem> One </CarouselItem>
                    <CarouselItem> Two </CarouselItem>
                    <CarouselItem> Three </CarouselItem>
                    <CarouselItem> Four </CarouselItem>
                    <CarouselItem> Five </CarouselItem>
                    <CarouselItem> Six </CarouselItem>
                    <CarouselItem> Seven </CarouselItem>
                    <CarouselItem> Eight </CarouselItem>
                </Carousel>
        </div>
        </>
    )
}

export default Carousel
