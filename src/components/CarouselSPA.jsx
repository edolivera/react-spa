import React from "react";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-bootstrap/Carousel";
import Owl1 from "../assets/img/owl1.jpg";
import Owl2 from "../assets/img/owl2.jpg";
import Owl3 from "../assets/img/owl3.jpg";
import Owl4 from "../assets/img/owl4.jpg";

export default function CarouselSPA() {
  return (
    <div className="row">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Owl1}
            alt="First slide"
            width="100"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Owl2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Owl2} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Owl3} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
