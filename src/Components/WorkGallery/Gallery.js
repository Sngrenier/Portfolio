import React, { Component } from 'react'
import './Gallery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import welaxthumbnail from './welaxthumbnail.png';
import esthumbnail from './esthumbnail.png';

export default class dev extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className="container-fluid">

                <div className="background-work">
                <div className="bkgrd-left-work"></div>
                    <div className="bkgrd-right-work"></div>
                        <div className="work-heading">
                                <div className="wo"><p>PR</p></div>
                                <div className="rk">
                                    <div><p>OJECTS</p></div>
                                </div>
                            <div className="rk">
                                <p className="work-subtitle">a handful of my recent work</p>
                                <div className="dot6"><p>.</p></div>
                            </div>
                    
                    <ProjectWrapper >
                    <div className="gallery-info">
                        <div className="column first-column">
                        <div className="first-column">

                            <div className="card">
                                <div className="project">
                                <Link to='/workit'>
                            <div className="proj-pic"><img alt="" className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/201968738_10110599023668458_5412599662714406027_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=7aGVArCExWEAX_JpQzL&_nc_ht=scontent-sjc3-1.xx&oh=cac347b29e47c28f9bfd525dde93b5db&oe=60DF3EC7"></img></div>
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
                            <div className="proj-pic"><img alt="" className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/203123822_10110599018548718_2265136663967000969_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_ohc=ZMfZ691SfK0AX-jRq5T&_nc_ht=scontent-sjc3-1.xx&oh=3400d66f6568d7fdca0d5eb0d57bbd0d&oe=60DAC839"></img></div>
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
                                <img alt="" className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204769655_10110599023034728_4955541260072384791_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=8DCop62r9_gAX_TsiIc&tn=jG4jHig4ll3niTGB&_nc_ht=scontent-sjc3-1.xx&oh=7d32bfe95fb15ff13c2c196974182080&oe=60E7603B"></img>
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
                                {/* <img alt="" className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/210359790_10110611647290618_6166945052080279767_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=2NmJCMvzIR0AX-TLlET&_nc_oc=AQnIjoSR1IlRPs7gRL7sfb6vbHtNDnnJv1Uio-OKXDuw_hYvZgIqghCykweVsxwHwqxX49bHIvZa1Su22eGKIdcv&_nc_ht=scontent-sjc3-1.xx&oh=a991dd5ffc988ad9dd5b8e98866cc453&oe=60E75481"></img> */}
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
                                {/* <img alt="" className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/203019162_10110611700663658_6356625520592917966_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=T_eGvkfb-E8AX9lkV25&_nc_ht=scontent-sjc3-1.xx&oh=3c26023020a5e4776c27f8fdbf33688d&oe=60E19FD9"></img> */}
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