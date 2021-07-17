import React, { Component } from 'react'
import './Design.css'
// import Dev from '../Skills/Dev';
import "bootstrap/dist/css/bootstrap.min.css";
import dskills05 from './dskills05.png';
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default class design extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div>
                <Navbar />

                <div className="background">
                
                <div className="background3">
                    <img alt="img-2" className="bkgrd-img-design" src={dskills05} />
                        
                        <div className="design-skill">
                            <div className="design">
                            <div className="de"><p>DE</p></div>
                            <div className="sign"><p>SIGN</p></div>
                            </div>
                                <div className="skills"><div><p>skills</p></div>
                                <div className="dot3"><p>.</p></div>
                            </div>
                            </div>

                <div className="design-info">
                    <div className="column">
                        <div className="category-1">
                            <div className="bullets"><p className="title-line1">WEB DESIGN</p></div>
                            <div className="bullets"><p className="bullet-line1">UI DESIGN</p></div>
                            <div className="bullets"><p className="bullet-line1">UX DESIGN & RESEARCH</p></div>
                            <div className="bullets"><p className="bullet-line1">RESPONSIVE CSS</p></div>
                            <div className="bullets"><p className="bullet-line1">WIREFRAMING</p></div>
                            <div className="bullets"><p className="bullet-line1">FLEX, SASS</p></div>
                            <div className="bullets"><p className="bullet-line1">BOOTSTRAP</p></div>
                            <div className="bullets"><p className="bullet-line1">FIGMA, CANVA</p></div>
                            <div className="bullets"><p className="bullet-line1">SKETCH</p></div>
                        </div>
                    </div>

                <div className="column">
                    <div className="column-2">
                        <div className="bullets"><p className="title-line2">GRAPHIC DESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">ART DIRECTION</p></div>
                        <div className="bullets"><p className="bullet-line2">LOGO DESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">BRAND IDENTITY & DEVELOPMENT</p></div>
                        <div className="bullets"><p className="bullet-line2">MARKETING STRATEGY</p></div>
                        <div className="bullets"><p className="bullet-line2">INDESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">PHOTOSHOP</p></div>
                        <div className="bullets"><p className="bullet-line2">ILLUSTRATOR</p></div>
                        <div className="bullets"><p className="bullet-line2">ADOBE CREATIVE SUITE</p></div>
                    </div>
                </div>
            </div>
           

            <section className="container-fluid">
                <div className="project-overview-dskills">
                    <div className="project-overview-design">
                    <p className="proj-para-body-design">it's kind of a lot right?!</p>
                    <p className="proj-para-1-design">check out my <a><Link to="gallery">PROJECTS</Link></a> page on this site to see some of my recent design work. And if somehow my <a><Link to="gallery">PROJECTS</Link></a> page just isn't enough, you can also view some of my earlier work by clicking below.</p>
                    <div className="design-photos-btn">
                        <button className="design-photo-btn">
                        <a href="https://www.stacynicoledesign.com/">
                        <span className="btn-type">more projects</span>
                        </a>
                        </button>
                        </div>
                </div>
                </div>
                </section>
                </div>
            </div>
        </div>

        )
    }
}