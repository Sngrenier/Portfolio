import React, { Component } from 'react'
import './Workit.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'
import workitwf01 from './images/workitwf01.png';
import workitwf02 from './images/workitwf02.png';
import toolsimg from './images/toolsimg.png';
import Navbar from '../Navbar/Navbar'

export default class Workit extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
        <div className="container-fluid">
            <Navbar />
            
            <div className="workit-title">
                        <div className="work"><p>W</p></div>
                        <div className="it"><p>ORKit</p></div>
                            <div className="workit-title-two">
                                <p className="title-two">circuit training app</p>
                            <div className="proj-dot-1"><p>.</p></div>
                        </div>
                    </div>
                    
                    <div className='player-wrapper'>
                      <ReactPlayer
            className='react-player center'
            url= 'https://www.youtube.com/embed/a8Q7ckZexCM'
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
                    <p className="proj-para-1"><strong>WORKit is an ios focused circuit training app.  It was conceptualized and designed by me, and built by myself and one other full-stack developer</strong> </p>
                    <p className="proj-para"><strong>WORKit was developed with the PERN stack.</strong> Although ios focused, the app is fully responsive for all devices. The app utilizes react hooks and react context on the frontend, and the database was built with postgreSQL</p>
                    <p className="proj-para">WORKit features paypal integration for easy payment method, spotify integration for music syncing compatibility, nodemailer integration for welcome and newsletter auto-emails</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="project-overview-body">
                    <div className="project-overview-details-body">
                    <p className="proj-para-1-body"><strong>wireframing</strong> </p>
                    <p className="proj-para-body">WORKit app user flow chart (prior to the inclusion of Spotify), and the correlating wireframe designs</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid img-container">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={workitwf01} />
                </div>
            </div>

            <div className="container-fluid">
                    <div className='image-wrapper-body'>
                    <img alt="img-2" className="banner-img-body" src={workitwf02} />
                </div>
            </div>
                    
            <div className="container-fluid">
            <div className="wireframe-btn">
                <button className="photo-btn">
                <a href="https://www.figma.com/file/HVSqH2CoRqghlKS0WSJGFG/Untitled?node-id=1%3A9">
                <span className="btn-type">view HD wireframes on figma</span>
                </a>
                </button>
            </div>
                <div className="project-overview-workit">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>It was an amazing stressful journey to build this app. We had a great partnership and we truly built the app together as a team.</strong> </p>
                    <p className="proj-para"><strong>The major division of duties:</strong> I oversaw the fully responsive css and overall circuit functionality, and she tackled integrating the Spotify api. <strong>All other aspects of the app were developed jointly.</strong></p>
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
                    <p className="proj-para">react, js, node, html5, css, vscode, github, digital ocean, external apis, sqltabs, postgresql, figma </p>
                    <p className="proj-para-2">...and others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of sweat equity!</strong></p>
                    <div className="more-photos-btn">
                        <button className="photo-btn">
                        <a href="https://github.com/Sngrenier/Workit">
                        <span className="btn-type">view WORKit source code</span>
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
