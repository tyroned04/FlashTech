import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./css/App.css";
// assets
import caro1 from "./assets/carousel_img_1.png";
import caro2 from "./assets/carousel_img_2.png";
import caro3 from "./assets/carousel_img_3.png";


class CarouselHero extends React.Component {
    render() {
        return(
            <Carousel showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                <div className="heroDiv">
                    <img className="hero" src={caro1} alt="Banner" />
                </div>
                <div className="heroDiv">
                    <img className="hero" src={caro2} alt="Banner" />
                </div>
                <div className="heroDiv">
                    <img className="hero" src={caro3} alt="Banner" />
                </div>
            </Carousel>
        );
    }
}

export default CarouselHero;