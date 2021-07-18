import React, { Component } from 'react'
import './Dev.css'
import "bootstrap/dist/css/bootstrap.min.css";
import webdevbkgrnd from './webdevbkgrnd.png';
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default class dev extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="background4">
                    <div className="bkgrd-left4">

                    <div className="development-skill">
                            <div className="dev"><p>DEV</p></div>
                            <div className="el"><p>EL</p></div>
                            <div className="op"><p>OP</p></div>
                            <div className="ment"><p>MENT</p></div>
                                <div className="skills2"><div><p>skills</p></div>
                                <div className="dot4"><p>.</p></div>
                            </div>
                            </div>
                        <img alt="img-2" className="bkgrd-img-dev" src={webdevbkgrnd} />
                    
                    </div>

                    <div className="row">
                        <div className="dev-bullets">
                            <div className="column-one">
                            <ul className="languages">
                                <li className="dev-title">LANGUAGES</li>
                                <li className="dev-bullet">HTML5 / CSS</li>
                                <li className="dev-bullet">JAVASCRIPT</li>
                            </ul>
                            <ul className="frontend">
                                <li className="dev-title">FRONTEND TOOLS</li>
                                <li className="dev-bullet">REST APIS</li>
                                <li className="dev-bullet">CONTEXT</li>
                                <li className="dev-bullet">REDUX</li>
                                <li className="dev-bullet">AXIOS</li>
                                <li className="dev-bullet">MASSIVE</li>
                                <li className="dev-bullet">BCRYPT</li>
                            </ul>
                            <ul className="databases">
                                <li className="dev-title">DATABASES</li>
                                <li className="dev-bullet">POSTGRESQL</li>
                                <li className="dev-bullet">SQL TABS</li>
                            </ul>
                            </div>

                            <div className="column-two">
                            <ul className="frameworks">
                                <li className="dev-title">FRAMEWORKS</li>
                                <li className="dev-bullet1">REACT</li>
                                <li className="dev-bullet1">REACT HOOKS</li>
                                <li className="dev-bullet1">NODE.JS</li>
                                <li className="dev-bullet1">EXPRESS</li>
                            </ul>
                            <ul className="platforms">
                                <li className="dev-title" id="platforms">PLATFORMS + HOSTING</li>
                                <li className="dev-bullet1">GIT</li>
                                <li className="dev-bullet1">GITHUB</li>
                                <li className="dev-bullet1">NGINX</li>
                                <li className="dev-bullet1">DIGITAL OCEAN</li>
                                <li className="dev-bullet1">HEROKU</li>
                                <li className="dev-bullet1">ASANA</li>
                            </ul>
                            </div>
                            </div>

                            <section className="container-fluid">
                                <div className="project-overview-deskills">
                                    <div className="project-overview-devskills">
                                        <p className="proj-para-body-devskills">it's kind of awesome right?!</p>
                                        <p className="proj-para-1-devskills">check out my <a><Link to="gallery">PROJECTS</Link></a> page on this site to see some of my recent web development work. And if somehow my <a><Link to="gallery">PROJECTS</Link></a> page just isn't enough, you can also view the source code for this site as well as additional projects by clicking below.</p>
                                    <div className="devskills-photos-btn">
                                        <button className="devskills-photo-btn">
                                            <a href="https://github.com/Sngrenier">
                                            <span className="btn-type">source code</span>
                                            </a>
                                            <img alt="" className="git-icon" src="https://img.icons8.com/ios-glyphs/20/000000/github.png"/>
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
