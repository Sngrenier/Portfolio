import React, { Component } from 'react'
import './Design.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class design extends Component {
    render() {
        return (
            <div className="container-fluid">


                <div className="container-fluid background3">
                    <div className="bkgrd-bottom2">
                        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/200202397_10110574125649288_9175946576805029141_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=fjU7QFxt0FIAX8inw3h&_nc_ht=scontent-sjc3-1.xx&oh=3a5f1d723355c0942f91ab2155cb9833&oe=60CCA838"></img>
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
                        <div className="bullets"><p className="bullet-line1">RESPONSIVE CSS</p></div>
                        <div className="bullets"><p className="bullet-line1">WIREFRAMING</p></div>
                        <div className="bullets"><p className="bullet-line1">FLEX, SASS</p></div>
                        <div className="bullets"><p className="bullet-line1">BOOTSTRAP</p></div>
                        <div className="bullets"><p className="bullet-line1">FIGMA, CANVA, SKETCH</p></div>
                        <div className="bullets"><p className="bullet-line1">UI + UX</p></div>
                    </div>
                </div>

                <div className="column">
                    <div className="column-2">
                        <div className="bullets"><p className="title-line2">GRAPHIC DESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">ART DIRECTION</p></div>
                        <div className="bullets"><p className="bullet-line2">LOGO DESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">ADOBE CREATIVE SUITE</p></div>
                        <div className="bullets"><p className="bullet-line2">INDESIGN</p></div>
                        <div className="bullets"><p className="bullet-line2">PHOTOSHOP</p></div>
                        <div className="bullets"><p className="bullet-line2">ILLUSTRATOR</p></div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        )
    }
}