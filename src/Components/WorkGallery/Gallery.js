import React, { Component } from 'react'
import './Gallery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import welaxthumbnail from './welaxthumbnail.png';
import esthumbnail from './esthumbnail.png';
import marbleoakthumbnail from './marbleoakthumbnail.png';
import workitthumbnail from './workitthumbnail.png';
import abthumbnail from './abthumbnail.png';
import Navbar from '../Navbar/Navbar'

export default class dev extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div >
                <Navbar />
                
                <div className="container-fluid">
                <div className="background-work">
                <div className="bkgrd-left-work"></div>
                    <div className="bkgrd-right-work"></div>
                    
                    <div className="work-heading">
                        <div className="pr"><p>PR</p></div>
                        <div className="oj"><p>OJECTS</p></div>
                            <div className="work-subtitle">
                            <p className="subtitle-1">a handful of my recent work</p>
                            <div className="dot12"><p>.</p></div>
                            </div>
                    
                    <ProjectWrapper >
                    <div className="gallery-info">
                        <div className="column first-column">
                        <div className="first-column">

                            <div className="card">
                                <div className="project">
                                <Link to='/workit'>
                            <div className="proj-pic">
                            <img alt="" className="proj-icon" src={workitthumbnail} />
                                </div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='/workit'>
                                <li className="proj-title">WORKIT</li>
                                <li className="proj-details">ios focused fitness app</li>
                                <li className="proj-date">web development, web design</li>
                                </Link>
                            </ul>
                            </div>

                            <div className="project">
                            <Link to='/abrand'>
                            <div className="proj-pic">
                            <img alt="" className="proj-icon" src={abthumbnail} />
                               
                                </div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='/abrand'>
                                <li className="proj-title">AGNES BORGANI</li>
                                <li className="proj-details">brand development: entrepreneur online marketing</li>
                                <li className="proj-date">graphic design, digital design, template design, logo design</li>
                                </Link>
                            </ul>
                            </div>

                </div>
                </div>
                </div>


                <div className="column second-column">
                        <div className="second-column">
                            <div className="card">

                            <div className="project">
                            <div className="proj-pic">
                                <Link to='/MarbleOak'>
                                <img alt="" className="proj-icon" id = "mo-pic" src={marbleoakthumbnail} />
                                </Link>
                                </div>
                            <ul className="proj-deets">
                                <Link to='/marbleoak'>
                                <li className="proj-title">MARBLE OAK</li>
                                <li className="proj-details">responsive luxury furniture ecommerce store</li>
                                <li className="proj-date">web development, web design</li>
                                </Link>
                            </ul>
                            </div>

                            <div className="project">
                            <Link to='/welax'>
                            <div className="proj-pic">
                            <img alt="" className="proj-icon" src={welaxthumbnail} />
                                </div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='/welax'>
                                <li className="proj-title">WELAX</li>
                                <li className="proj-details">brand development: CBD oral sprays</li>
                                <li className="proj-date">graphic design, packaging design, textile design</li>
                                </Link>
                            </ul>
                            </div>
                </div>
                </div>
                </div>
                
                <div className="column third-column">
                        <div className="third-column">
                            <div className="card">
                            
                            <div className="project">
                            <Link to ='/stemseed'>
                            <div className="proj-pic"><img alt="" className="proj-icon" src="https://images.squarespace-cdn.com/content/v1/5aa71ed1a9e02804b02bd6ae/1522016194576-IQNIWA3XVGRGYQ7NNXNN/serums.03.jpg?format=1500w"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='stemseed'>
                                <li className="proj-title">STEM&SEED</li>
                                <li className="proj-details">beauty serum line</li>
                                <li className="proj-date">graphic design, web design, print design, packaging design</li>
                                </Link>
                            </ul>
                            </div>

                            <div className="project">   
                            <Link to='/estrips'>
                            <div className="proj-pic">
                            <img alt="" className="proj-icon" src={esthumbnail} />
                                </div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='/estrips'>
                                <li className="proj-title">ENTOURAGE STRIPS</li>
                                <li className="proj-details">brand development: kickstarter CBD strip company</li>
                                <li className="proj-date">graphic design, packaging design, textile design</li>
                                </Link>
                            </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                            </div>
                    </ProjectWrapper>
                            
                </div>
                </div>
                <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-details">
                    <p className="proj-para-1"><strong>development tools for this site:</strong> </p>
                    <p className="proj-para">react, html5, javascript, css, vscode, github, digital ocean, figma, indesign, photoshop, illustrator</p>
                    <p className="proj-para-2">...and loads others I'm sure</p>
                    <p className="proj-para-2-body"><strong>and lots of love!</strong></p>
                    <div className="more-photos-btn">
                        <button className="photo-btn">
                        <a href="https://github.com/Sngrenier/Portfolio">
                        <span className="btn-type">my portfolio source code</span>
                        </a>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
        }
    }




        const ProjectWrapper = styled.div`
        .card{
            width: 25.5vw;
            border-color: transparent;
            background-color: transparent;
            transition: all 0.5s linear;
            // display: flex;
            // flex-direction: row;
            // flex-wrap: nowrap;
            // justify-content: center;
            // align-items: stretch;
            // align-content: center;
        }
        .proj-deets{
            background: transparent !important;
            border-top: transparent !important;

        }
        
        .project:hover{
            transform: scale(1.2);
            border-color: #EBECED !important;
           
            transition: all 0.5s linear;
            overflow: hidden;
        }
        .project-pic:hover{
            transform: scale(1.2);
            border-color: #EBECED !important;
           
            transition: all 0.5s linear;
            overflow: hidden;
        }
        `