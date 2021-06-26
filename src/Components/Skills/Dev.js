import React, { Component } from 'react'
import './Dev.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class dev extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="background4">
                    <div className="bkgrd-left4">
                        <img className="bkrd-img" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/203655815_10110602246175528_9206530618877533524_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=B4dVvGTusv0AX-tHqML&_nc_ht=scontent-sjc3-1.xx&oh=a81f3e67afbabbeec512db04b1c4c211&oe=60DC306B"></img>
                    </div>

                    <div className="development-skill">
                            <div className="dev"><p>DEV</p></div>
                            <div className="el"><p>EL</p></div>
                            <div className="op"><p>OP</p></div>
                            <div className="ment"><p>MENT</p></div>
                                <div className="skills2"><div><p>skills</p></div>
                                <div className="dot4"><p>.</p></div>
                            </div>
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
                                <li className="dev-bullet">REACT</li>
                                <li className="dev-bullet">REACT HOOKS</li>
                                <li className="dev-bullet">NODE.JS</li>
                                <li className="dev-bullet">EXPRESS</li>
                            </ul>
                            <ul className="platforms">
                                <li className="dev-title">PLATFORMS + HOSTING</li>
                                <li className="dev-bullet">GIT</li>
                                <li className="dev-bullet">GITHUB</li>
                                <li className="dev-bullet">NGINX</li>
                                <li className="dev-bullet">DIGITAL OCEAN</li>
                                <li className="dev-bullet">HEROKU</li>
                                <li className="dev-bullet">ASANA</li>
                            </ul>
                            </div>
                            
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
