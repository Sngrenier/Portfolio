import React, { Component } from 'react'
import './Dev.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class dev extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="background4">
                    <div className="bkgrd-left4">
                        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199762784_10110574225179828_1308896881890025680_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=-EJbW7L3BIEAX-rkgMW&_nc_ht=scontent-sjc3-1.xx&oh=0393274941e86a1fdd79b8d4ebad1236&oe=60CD9D17"></img>
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
