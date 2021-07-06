import React, { Component } from 'react'
import './MarbleOak.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'
import marbleoakwf01 from './images/marbleoakwf01.png';
import marbleoakwf02 from './images/marbleoakwf02.png';
import toolsimg from './images/toolsimg.png';

export default class MarbleOak extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
    <div className="container-fluid">
    <div className="workit-title">
                <div className="work"><p>MAR</p></div>
                <div className="it"><p>BLEOAK</p></div>
                    <div className="workit-title-two"><div><p>luxury retail site</p></div>
                    <div className="proj-dot-1"><p>.</p></div>
                </div>
            </div>
            
            <div className='player-wrapper'>
                <ReactPlayer
            className='react-player center'
            url= 'https://www.youtube.com/embed/N6tywPqODnc'
            width='100vw'
            height='90vh'
            color='white'
            controls = {true}
            volume='1'
            playing={false}
            />
        </div>
   

    <div className="container-fluid">
        <div className="project-overview-workit">
            <div className="project-overview-details">
            <p className="proj-para-1"><strong>MARBLE OAK is a luxury furniture retail site. It was conceptualized, designed, and built by yours truly.</strong> </p>
            <p className="proj-para">Although laptop and tablet focused, the app is fully responsive for all devices. The app utilizes react context for frontend management, and the database was built with postgreSQL.</p>
            <p className="proj-para">MABLE OAK features paypal integration for easy payment method, nodemailer integration for welcome and order reciept auto-emails.</p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="project-overview-body">
            <div className="project-overview-details-body">
            <p className="proj-para-1-body"><strong>wireframing</strong> </p>
            <p className="proj-para-body">a sampling of the MARBLE OAK wireframe designs</p>
            </div>
        </div>
    </div>
    <div className="container-fluid img-container">
            <div className='image-wrapper-body'>
            <img alt="img-2" className="banner-img-body" src={marbleoakwf01} />
        </div>
    </div>

    <div className="container-fluid">
            <div className='image-wrapper-body'>
            <img alt="img-2" className="banner-img-body" src={marbleoakwf01} />
        </div>
    </div>
            
    <div className="container-fluid">
            <div className="wireframe-btn">
                <button className="photo-btn">
                <a href="https://www.figma.com/files/project/24856657/Full-Stack-Website?fuid=937082673684177897">
                <span className="btn-type">view HD wireframes on figma</span>
                </a>
                </button>
            </div>
        <div className="project-overview-workit">
            <div className="project-overview-details">
            <p className="proj-para-1"><strong>This was my first solo mission site build, and in proper form it was without a doubt just as stressful as it was gratifying. </strong> </p>
            <p className="proj-para">I learned so much throughout the process, most of all that I really enjoy creating amazing experiences through building amazing apps.  <strong>Winner of 'Best Design' award from DevMountain for this project.</strong></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="project-overview-body">
            <div className="project-overview-details-body">
            <p className="proj-para-1-body"><strong>just some of the tools used for this project</strong> </p>
            </div>
        </div>
    </div>
    <div className="container-fluid img-container">
            <div className='image-wrapper-body'>
            <img alt="img-2" className="banner-img-body" src={toolsimg} />
        </div>
    </div>

    <div className="container-fluid">
        <div className="project-overview">
            <div className="project-overview-details">
            <p className="proj-para-1"><strong>development tools:</strong> </p>
            <p className="proj-para">react,js, node, html5, css, vscode, github, digital ocean, external apis, sqltabs, postgresql, figma </p>
            <p className="proj-para-2">...and others I'm sure</p>
            <p className="proj-para-2-body"><strong>and lots of retail experience!</strong></p>
            <div className="more-photos-btn">
                <button className="photo-btn">
                <a href="https://github.com/Sngrenier/fs-personal-project">
                <span className="btn-type">view MARBLE OAK source code</span>
                </a>
                <img alt="" className="git-icon" src="https://img.icons8.com/ios-glyphs/20/000000/github.png"/>
                </button>
            </div>
            </div>
        </div>
    </div>
  
</div>
        )
    }
}
