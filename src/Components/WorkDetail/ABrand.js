import React, { Component } from 'react'
import './ABrand.css'
import "bootstrap/dist/css/bootstrap.min.css";
import abbanner from './images/abbanner.png';
import abpodcast from './images/abpodcast.png';
import abinsta from './images/abinsta.png';
import abtwitter from './images/abtwitter.png';
import abfacebook from './images/abfacebook.png';
import abebook from './images/abebook.png';
import abwebinar from './images/abwebinar.png';
import ablogo from './images/ablogo.png';
import Navbar from '../Navbar/Navbar'

export default class ABrand extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                
            <div className="workit-title">
                        <div className="work"><p>AGNES</p></div>
                        <div className="it"><p>BORGANI</p></div>
                            <div className="workit-title-two"><div><p>online marketing entrepenuer</p></div>
                            <div className="proj-dot-1"><p>.</p></div>
                        </div>
                    </div>
                    
           <div className="container-fluid">
           <div className='image-wrapper'>
           <img alt="img-2" className="banner-img" src={abbanner} />
    </div>
    </div>
           

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>Agnes Borgani: a highly sucessful online marketing entrepeneur who is currently based out of the UK.</strong> </p>
                    <p className="proj-para">I oversaw Agnes's logo design and branding collateral design across all of her digital platforms </p>
                    <p className="proj-para">My work involved creating permentant templates she could reuse by updating their current details </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>podcast</strong> </p>
                    <p className="proj-para-body">a sample of the podcast cover templates created</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abpodcast} />
                </div>
            </div>
            
                    
            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>instagram</strong> </p>
                    <p className="proj-para-body">a sample of the instagram advertising post templates created</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abinsta} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>twitter & facebook</strong> </p>
                    <p className="proj-para-body">a sample of the twitter & facebook banner templates created. the dimensions were modified per their respective platform</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abtwitter} />
                </div>
            </div>
            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abfacebook} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>eBook</strong> </p>
                    <p className="proj-para-body">a sample of the eBook cover templates created</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abebook} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>webinar</strong> </p>
                    <p className="proj-para-body">a sample of the webinar invite templates created</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={abwebinar} />
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
                    <img alt="img-2" className="banner-img-body" src={ablogo} />
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>development tools:</strong> </p>
                    <p className="proj-para">figma, sketch, indesign, photoshop, illustrator</p>
                    <p className="proj-para-2">...and others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of digital scematics!</strong></p>
                    <div className="more-photos-btn">
                        <button className="photo-btn">
                        <a href="https://www.agnesbogardi.com/">
                        <span className="btn-type">view my work on Agnes Bogardi website</span>
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
