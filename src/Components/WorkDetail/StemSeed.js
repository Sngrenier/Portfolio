import React, { Component } from 'react'
import './StemSeed.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ssbanner from './images/ssbanner.png';
// import ssmag01 from './images/ssmag01.png'
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
               {/* <img alt="" className="banner-img" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204310153_10110599273782228_3667188175771294853_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=YP3YsfBJeAIAX-9JYED&_nc_ht=scontent-sjc3-1.xx&oh=4b75af6d395a3353cfe32e03c967ac94&oe=60E23D16"></img> */}
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
                    {/* <img alt="" className="banner-img-body" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/203902753_10110599276107568_3786693509070259524_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=lCewewnsKsYAX_wqyEq&_nc_ht=scontent-sjc3-1.xx&oh=dcf3936c4d67c0ff69794413e2a93d8b&oe=60E22B7C"></img> */}
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={ssdevice02} />
                    {/* <img alt="" className="banner-img-body" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/206894861_10110599276057668_1957744613423692022_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=SMiU1GL4nhEAX-GXT7d&tn=jG4jHig4ll3niTGB&_nc_ht=scontent-sjc3-1.xx&oh=a23d332c45fe5c0842b996f75b894bfb&oe=60E2A6E1"></img> */}
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
                    {/* <img alt="img-2" className="banner-img-body" src={ssmag01} /> */}
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
