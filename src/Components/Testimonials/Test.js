import React, { Component } from 'react'
import './Test.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import estest from './estest.png';
import wtest from './wtest.png';
import abtest from './abtest.png';

export default class Test extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        const settings =  {
            showArrows: true,
            showStatus: false,
            arrowsBlock: false,
            autoPlay: true,
            infiniteLoop: true,
            interval: 8000,
            transitionTime: 600,
            stopOnHover:false,
            outerSpacing: true,
            dynamicHeight: false,
            showThumbs: false
        }
        return (
            <section className="carousel">
                <div className="container-fluid test-page">
            <div className="test-header">
                <h5 className="test-title">testimonials</h5>
            </div>
        <div className="container-fluid slider">
            <Carousel {...settings}>

            <div className="carousel-slider"> 
                <img alt="img" className="img-slider" src={estest} />
                    <div class="carousel-caption" id="caro-1">
                        <h5 className="cc-1">ENTOURAGE STRIPS</h5>
                        {/* <h6 className="quote">"</h6> */}
                        <p className="cc-2" id="e-1">Stacy went above and beyond my expectations, Wonderful communication and work. I hope to work with her again in the near future. HIGHLY RECOMMENDED!</p>
                        <p className="cc-2" id="e-2">Stacy did outstanding work and made sure every detail was looked after. Was very attentive to my vision and was pivotal in the brainstorming phase. I will be sure to use her many more times in the future for my graphic work.</p>
                        <p className="cc-3">dcs121192</p>
                    </div>
                </div>

                <div className="carousel-slider">
                <img alt="img" className="img-slider" src={wtest} />
                    <div class="carousel-caption" id="caro-2">
                    <h5 className="cc-1">WELAX</h5>
                    {/* <h6 className="quote">"</h6> */}
                        <p className="cc-2" id="w-1">I will go to Stacy for all my design work! </p>
                        <p className="cc-2" id="w-2">She's got a great imagination and I really enjoy working with her! She did more than what I asked. She went above and beyond! So happy with it!</p>
                        <p className="cc-3">tiffanymarti800</p>
                    </div>
                </div>

                <div className="carousel-slider">
                <img alt="img" className="img-slider" src={abtest} />
                    <div class="carousel-caption" id="caro-3">
                        <h5 className="cc-1">AGNES BORGANI</h5>
                        {/* <h6 className="quote">"</h6> */}
                        <p className="cc-2" id="a-1">Over delivered on all aspects of the project!  Stacy was incredibly patient and communicative through our creative process. </p>
                        <p className="cc-2" id="a-2">She's a great collaborator and knows what you're looking to acheive even when you don't. I will certainly reach out to her for my next branding project.</p>
                        <p className="cc-3">agnesbogardi</p>
                    </div>
                </div>

            </Carousel>
        </div>
        </div>
        </section>
        )
    }
}
