import React, { Component } from 'react'
import './Gallery.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class dev extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="background-work">
                <div className="bkgrd-left-work"></div>
                    <div className="bkgrd-right-work"></div>
                        <div className="work-heading">
                                <div className="wo"><p>WO</p></div>
                                <div className="rk">
                                    <div><p>RK</p></div>
                                    <div className="dot6"><p>.</p></div>
                                </div>
                            <div>
                                <p className="work-subtitle">a handful of projects I've worked on.</p>
                            </div>
                    
                    <ProjectWrapper >
                    <div className="gallery-info">
                        <div className="column first-column">
                        <div className="first-column">

                            <div className="card">
                                <Link to='/workit'>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/201968738_10110599023668458_5412599662714406027_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=gmvoGBXgSegAX-z92Qs&_nc_ht=scontent-sjc3-1.xx&oh=cdd2fb0534a0e6a739004996d74ae0b5&oe=60D95007"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link to='/workit'>
                                <li className="proj-title">WORKIT</li>
                                <li className="proj-details">ios focused fitness app</li>
                                <li className="proj-date">web development, web design</li>
                                </Link>
                            </ul>
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/201948709_10110599018563688_3793384463003619539_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=BzVx4GUV69AAX9JRlqr&_nc_ht=scontent-sjc3-1.xx&oh=e5a1a6b5b1a7636a67c288e6340e3d40&oe=60D9530F"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">AGNES BORGANI</li>
                                <li className="proj-details">brand development and marketing collateral</li>
                                <li className="proj-date">brand design and strategy</li>
                                </Link>
                            </ul>
                            <Link>
                            <div className="proj-pic">
                                <img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/202588120_10110599023638518_7032954189524664711_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_ohc=DFRNOR8pX8oAX8L8am0&_nc_oc=AQnEXvnxfrNT7d3x77u_MmjHt0uEfZHqIfgnP9athQ0LXvp8lDKbu_eRKacbe-8zmmJ3GkYZrSK0Mp4J7CL7ndA-&tn=jG4jHig4ll3niTGB&_nc_ht=scontent-sjc3-1.xx&oh=4ae2b83d7c34efc6f01bd30fd9e09b6e&oe=60D91926"></img></div>
                                </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">BISOUS ET CACHEMIRE</li>
                                <li className="proj-details">luxury womenswear ecommerce store</li>
                                <li className="proj-date">web development, web design</li>
                                </Link>
                            </ul>
                </div>
                </div>
                </div>


                <div className="column second-column">
                        <div className="second-column">
                            <div className="card">

                            <div className="proj-pic">
                                <Link to='/MarbleOak'>
                                <img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/201997926_10110599022949898_336588881942886561_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=HBvHAPsZUXwAX8z4tLd&_nc_ht=scontent-sjc3-1.xx&oh=a741b5f1337d0a1f6a91bc31237b7ac2&oe=60D9ED9E"></img>
                                </Link>
                                </div>
                            <ul className="proj-deets">
                                <Link to='/marbleoak'>
                                <li className="proj-title">MARBLE OAK</li>
                                <li className="proj-details">responsive luxury furniture ecommerce store</li>
                                <li className="proj-date">web development, web design</li>
                                </Link>
                            </ul>
                            
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204877053_10110599023523748_3208708152469310895_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=W__UYViMS0UAX9N8e3N&tn=jG4jHig4ll3niTGB&_nc_ht=scontent-sjc3-1.xx&oh=4438f56e4cc145a3a4edc7ef785445f5&oe=60D9B8C8"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">WELAX</li>
                                <li className="proj-details">brand development: CBD oral sprays</li>
                                <li className="proj-date">packaging design, logo design</li>
                                </Link>
                            </ul>
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/201958782_10110599020854098_2272215561612173883_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_ohc=rt4GYKukocoAX_OWm_G&_nc_oc=AQk6l66BEcl0qENcse_YoqrzS15c4qGE8iQmJMh785LTEoW_jEPQZiWjX6IePB_2fhl1udzh_917ilSXr6w0QGPW&_nc_ht=scontent-sjc3-1.xx&oh=5405675fd6fe6adebf955b42bc6b5fc8&oe=60D9753D"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">ENTOURAGE STRIPS</li>
                                <li className="proj-details">kickstarter CBD brand development</li>
                                <li className="proj-date">graphic design, packaging design, marketing campaigne strategy</li>
                                </Link>
                            </ul>
                </div>
                </div>
                </div>
                
                <div className="column third-column">
                        <div className="third-column">
                            <div className="card">
                            
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/206868577_10110599274490808_3054205768129723462_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_ohc=-9UrGNBvUJUAX9g3Ute&_nc_ht=scontent-sjc3-1.xx&oh=f2db47ddb9c91dcd2ebfcbc8746bf610&oe=60DABC84"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">STEM&SEED</li>
                                <li className="proj-details">beauty serum line</li>
                                <li className="proj-date">graphic design, web design, print design, packaging design</li>
                                </Link>
                            </ul>
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/202131588_10110599023274248_5035917576920223239_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=6ZZvLvueChUAX9vMDNn&_nc_ht=scontent-sjc3-1.xx&oh=4f319e9bf038b164b71de07ba3099d3e&oe=60DA8F88"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">VULGR</li>
                                <li className="proj-details">contemporary luxury brand development</li>
                                <li className="proj-date">brand concept, logo design, web design</li>
                                </Link>
                            </ul>
                            <Link>
                            <div className="proj-pic"><img className="proj-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/197915709_10110573813474888_3671384057613823914_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=D1MTvD1Gg9wAX8XIffL&_nc_ht=scontent-sjc3-1.xx&oh=c7888acdd49778329bacef45ae0ba482&oe=60CC00DE"></img></div>
                            </Link>
                            <ul className="proj-deets">
                                <Link>
                                <li className="proj-title">title</li>
                                <li className="proj-details">details</li>
                                <li className="proj-date">date</li>
                                </Link>
                            </ul>
                        </div>
                        </div>
                        </div>
                            </div>
                    </ProjectWrapper>
                
                </div>
                </div>
            </div>
             )
            }
        }




        const ProjectWrapper = styled.div`
        .card{
            width: 30vw;
            border-color: transparent;
            background-color: transparent;
            transition: all 0.5s linear;
        }
        .proj-deets{
            background: transparent !important;
            border-top: transparent !important;
        }
        &:hover{
            .card{
                border-color: transparent;
            }
            .proj-deets{
                background-color: #EF6351;
            }
        }
        .proj-pic {
            position: relative;
            overflow: hidden;
            border-color: rgba(247, 247, 247, 247);
        }
        .proj-icon {
            width: 30vw;
            height: 25vh;
            transition: all 0.5s linear;
        }
        .proj-pic:hover{
            transform: scale(1.3);
            border-color: #EF6351 !important;
            transition: all 0.5s linear;
            padding-bottom: 2vh;

        }
        .proj-icon:hover{
            transform: scale(1.3);
            border-color: #EF6351 !important;
            transition: all 0.5s linear;
            padding-bottom: 2vh;
        }
        `