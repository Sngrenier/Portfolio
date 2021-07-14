import React, { Component } from 'react'
import './Estrips.css'
import "bootstrap/dist/css/bootstrap.min.css";
import esbanner from './images/esbanner.png';
import esmarketing01 from './images/esmarketing01.png';
import esmarketing02 from './images/esmarketing02.png';
import espack01 from './images/espack01.png';
import espack02 from './images/espack02.png';
import Navbar from '../Navbar/Navbar'

export default class Estrips extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                
            <div className="workit-title">
                        <div className="work"><p>ENTOURAGE</p></div>
                        <div className="it"><p>STRIPS</p></div>
                            <div className="workit-title-two"><div><p>cannabis dissolvable strips</p></div>
                            <div className="proj-dot-1"><p>.</p></div>
                        </div>
                    </div>
                    
           <div className="container-fluid">
           <div className='image-wrapper'>
           <img alt="img-2" className="banner-img" src={esbanner} />
    </div>
    </div>
           

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>Entourage Strips: a kickstarter-winner cannabis company focused on a dissolvable strip product launch. </strong> </p>
                    <p className="proj-para">I oversaw the packaging design and marketing campaign collateral for these amazing products </p>
                    <p className="proj-para">My work also included designing full packaging mockups for the marketing campaign as this was pre-production</p>
                    </div>
                </div>
            </div>
                    
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>packaging</strong> </p>
                    <p className="proj-para-body">Complete packaging design for both the strips sleeve and product display container</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={espack01} />
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={espack02} />
                </div>
            </div>


            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>marketing campaign ads</strong> </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={esmarketing01} />
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={esmarketing02} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>development tools:</strong> </p>
                    <p className="proj-para">indesign, photoshop, illustrator</p>
                    <p className="proj-para-2">...and others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of market research!</strong></p>
                    <div className="more-photos-btn">
                        <button className="photo-btn">
                        <a href="https://www.stacynicoledesign.com/">
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
