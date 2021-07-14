import React, { Component } from 'react'
import './Welax.css'
import "bootstrap/dist/css/bootstrap.min.css";
import welaxbanner from './images/welaxbanner.png';
import welaxpackage01 from './images/welaxpackage01.png';
import welaxpackage02 from './images/welaxpackage02.png';
import welaxmockup from './images/welaxmockup.png';
import Navbar from '../Navbar/Navbar'

export default class Welax extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                
            <div className="workit-title">
                        <div className="work"><p>W</p></div>
                        <div className="it"><p>ELAX</p></div>
                            <div className="workit-title-two"><div><p>cannabis oral sprays</p></div>
                            <div className="proj-dot-1"><p>.</p></div>
                        </div>
                    </div>
                    
           <div className="container-fluid">
           <div className='image-wrapper'>
           <img alt="img-2" className="banner-img" src={welaxbanner} />
    </div>
    </div>
           

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>WELAX: a cannabis company expanding their brand with a line of oral sprays</strong> </p>
                    <p className="proj-para">I oversaw the art direction, print design, and packaging design for these amazing products </p>
                    <p className="proj-para">My work also included extensive research regarding saftey regulations mandates for packaging cannabis products in order to be in federal compliance </p>
                    </div>
                </div>
            </div>
                    
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>packaging</strong> </p>
                    <p className="proj-para-body">packaging design for complete line of oral sprays </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={welaxpackage01} />
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={welaxpackage02} />
                </div>
            </div>


            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>package mockup and created textile </strong> </p>
                    <p className="proj-para-body">I created a custom textile to serve as a graphic overlay for this project</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={welaxmockup} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>development tools:</strong> </p>
                    <p className="proj-para">indesign, photoshop, illustrator</p>
                    <p className="proj-para-2">...and others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of chill vibes!</strong></p>
                    <div className="more-photos-btn">
                        <button className="photo-btn">
                        <a href="https://www.stacynicoledesign.com/stem-and-seed">
                        <span className="btn-type">view more project photos</span>
                        </a>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
          
        </div>
        )
    }
}
