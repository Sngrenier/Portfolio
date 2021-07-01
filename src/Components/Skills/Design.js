import React, { Component } from 'react'
import './Design.css'
import Dev from '../Skills/Dev';
import "bootstrap/dist/css/bootstrap.min.css";

export default class design extends Component {
    render() {
        return (
            <div className="container-fluid">


                <div className="container-fluid background3">
                    <div className="bkgrd-bottom2">
                        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204213916_10110602263246318_1853923624796599331_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=vY3LTDdDMRgAX82Zrhb&_nc_ht=scontent-sjc3-1.xx&oh=1581bb029e81804f59daf3d59ac9b401&oe=60DC4911"></img>
                    </div>
                        
                         <div className="design-skill">
                             <div className="design-under"><p>DESIGN</p></div>
                            <div className="de"><p>DE</p></div>
                            <div className="sign"><p>SIGN</p></div>
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
            </div>
            <Dev/>
        </div>

        )
    }
}