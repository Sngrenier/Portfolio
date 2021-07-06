import React, { Component } from 'react'
import './StemSeed.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ssbanner from './images/ssbanner.png';
import ssdevice01 from './images/ssdevice01.jpg';
import ssdevice02 from './images/ssdevice02.jpg';




export default class StemSeed extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container-fluid">
            <div className="workit-title">
                        <div className="work"><p>ST</p></div>
                        <div className="it"><p>EM&seed</p></div>
                            <div className="workit-title-two"><div><p>skincare brand</p></div>
                            <div className="proj-dot-1"><p>.</p></div>
                        </div>
                    </div>
                    
           <div className="container-fluid">
           <div className='image-wrapper'>
           <img alt="img-2" className="banner-img" src={ssbanner} />
    </div>
    </div>
           

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>Stem&Seed: a prospective skincare brand specializing in facial serums, headquartered out of LES, Manhattan, NY.</strong> </p>
                    <p className="proj-para">I oversaw the art direction, branding, and packaging design for these incredible products. </p>
                    <p className="proj-para">My work also included print ad campaigne mockups and full scope web design for their online presence.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>packaging</strong> </p>
                    <p className="proj-para-body">Complete packaging design for both the serum bottles and serum line box set</p>
                    </div>
                </div>
            </div>
      
                <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="" className="banner-img-body" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522016587458-6P0L2JIXSNWB24OCOF86/serum.01.jpg?format=1500w"></img>
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="" className="banner-img-body" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522016194198-5USTARKE7BYTYULCR99V/serums.02.jpg?format=1500w"></img>
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="" className="banner-img-body" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522016194576-IQNIWA3XVGRGYQ7NNXNN/serums.03.jpg?format=1500w"></img>
                </div>
            </div>
           
                    
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>ui / ux</strong> </p>
                    <p className="proj-para-body">full-scope design rendering and ux shopping analytics for potential online presence</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={ssdevice01} />
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={ssdevice02} />
                </div>
            </div>
            
            
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>print ad campaign mockups</strong> </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="" className="banner-img-body" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522019962188-UG5QY8L3D0ZTXLRM4PJ7/Mag.Duo.01.png?format=1500w"></img>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>logo design</strong> </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="" className="banner-img-body" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522019972349-7IRFAUY7INIZESFRQSRU/SS.Logo.01.png?format=1500w"></img>
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>development tools:</strong> </p>
                    <p className="proj-para">figma, sketch, indesign, photoshop, illustrator</p>
                    <p className="proj-para-2">...and others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of creative juices!</strong></p>
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
