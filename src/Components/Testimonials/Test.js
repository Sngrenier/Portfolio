import React, { Component } from 'react'
import './Test.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

export default class Test extends Component {
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
        <div className="container-fluid slider">
            <div className="test-header">
                <h5 className="test-title">testimonials</h5>
            </div>
            <Carousel {...settings}>

            <div className="carousel-slider"> 
                    <img 
                    className="img-slider" 
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204646260_10110611271882938_2701829846291960011_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=3entzgiivc8AX-vQY_l&tn=jG4jHig4ll3niTGB&_nc_ht=scontent-sjc3-1.xx&oh=1ae670f80dae20c5b0f546a9442ead41&oe=60E06E90" 
                    alt="img"
                    />
                    <div class="carousel-caption">
                        <h5 className="cc-1">ENTOURAGE STRIPS</h5>
                        <h6 className="quote">"</h6>
                        <p className="cc-2">Stacy went above and beyond my expectations, Wonderful communication and work. I hope to work with her again in the near future. HIGHLY RECOMMENDED!</p>
                        <p className="cc-2">Stacy did outstanding work and made sure every detail was looked after. Was very attentive to my vision and was pivotal in the brainstorming phase. I will be sure to use her many more times in the future for my graphic work.</p>
                        <p className="cc-3">dcs121192</p>
                    </div>
                </div>

                <div className="carousel-slider">
                    <img 
                    className="img-slider" 
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199162599_10110611271029648_5527222984960167194_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=kN5VZx1P_ecAX9GPLld&_nc_ht=scontent-sjc3-1.xx&oh=91520e2b1f98283de17254e00ec6e72b&oe=60E15551" 
                    alt="img"
                    />
                    <div class="carousel-caption" id="caro-2">
                    <h5 className="cc-1">WELAX</h5>
                    <h6 className="quote">"</h6>
                        <p className="cc-2">I will go to Stacy for all my design work! </p>
                        <p className="cc-2">She's got a great imagination and I really enjoy working with her! She did more than what I asked. She went above and beyond! So happy with it!</p>
                        <p className="cc-3">tiffanymarti800</p>
                    </div>
                </div>

                <div className="carousel-slider">
                    <img 
                    className="img-slider carousel-link" 
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/205428757_10110611273250198_1381379977344684136_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=aMQFsaP-HYMAX-V4F2o&_nc_ht=scontent-sjc3-1.xx&oh=21bd1fa4123ec66462bc0d82f68fa06e&oe=60DFFD4F" 
                    alt="img"
                    />
                    <div class="carousel-caption">
                        <h5 className="cc-1">AGNES BORGANI</h5>
                        <h6 className="quote">"</h6>
                        <p className="cc-2">Over delivered on all aspects of the project!  Stacy was incredibly patient and communicative through our creative process. </p>
                        <p className="cc-2">She's a great collaborator and knows what you're looking to acheive even when you don't. I will certainly reach out to her for my next branding project.</p>
                        <p className="cc-3">agnesbogardi</p>
                    </div>
                </div>

            </Carousel>
        </div>
        </section>
        )
    }
}
