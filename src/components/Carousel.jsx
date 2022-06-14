import React from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
//import Owl from '../assets/img/logo.png';
//import Owl2 from '../assets/img/owl2.jpg';
//import Owl3 from '../assets/img/owl3.jpg';
//import Owl4 from '../assets/img/owl4.jpg';
import logo from '../assets/img/logo.png'

export default function Carousel () {
    return (
        <div className='row'>
            
            <img src={logo} alt="Logo" />

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

