import React, { Component } from 'react'
import './Client.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class client extends Component {
    
    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return (
                <div className="container-fluid">
                
                
                <div className="background2">
                    <div className="bkgrd-left3"></div>
                    <div className="bkgrd-right3">
                        <div className="client-details">
                            <div className="client-header">
                                <p>I consider experience, experience.</p>
                            </div>
                            <div className="client-para">
                                <p className="inv-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <p className="inv-para">ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                                <p className="inv-para">Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <p className="inv-para">Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                            </div>
                        </div>

                    </div>

                    <div className="client-skill">
                                <div className="c"><p>BU</p></div>
                                <div className="lient"><p>SINESS</p></div>
                                    <div className="skills3"><div><p>experience</p></div>
                                    <div className="dot5"><p>.</p></div>
                                </div>
                            </div>

                    </div>
                            <div className="row">
                            <div className="business-bullets">
                                <ul className="client-exp">
                                    <li className="group-title">DESIGN & DEVELOPMENT</li>
                                    <li className="group-bullet">Art direction & brand development</li>
                                    <li className="group-bullet">Sales driven wireframing integration</li>
                                    <li className="group-bullet">User experience driven web development</li>
                                    <li className="group-bullet">Multi-level store design & layout</li>
                                </ul>
                                <ul className="client-exp">
                                    <li className="group-title">OPERATIONAL PROWESS</li>
                                    <li className="group-bullet">Sales growth strategy & implementation</li>
                                    <li className="group-bullet">Critical path project management</li>
                                    <li className="group-bullet">P&L analysis, forecasting, and budgeting</li>
                                    <li className="group-bullet">Large-scale visual merchandising installation</li>
                                </ul>
                                <ul className="client-exp">
                                    <li className="group-title">CLIENT RELATIONS</li>
                                    <li className="group-bullet">Individual style to brand diagnostics</li>
                                    <li className="group-bullet">CRM database management</li>
                                    <li className="group-bullet">Brand experience curation</li>
                                    <li className="group-bullet">Client communication systems management</li>
                                </ul>
                            </div>
                        </div>    

                            
                </div>


        )
    }
}
