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
                                <p className="indv-para">You’ve made it this far!  I have to assume you’d like to learn a little bit about my past to see how it will intertwine with my future.</p>
                                <p className="indv-para">I have +14 years of luxury and contemporary luxury management experience.  I am also a former Division One soccer player who loves art and textiles as much as a comeback win.</p>
                                <p className="indv-para">The abridged version of a sucessful +14 year career: I have trained and led successful sales teams, managed comprehensive sales figures and budget analysis, and have moved entire store spaces.  I have also designed brand experiences, client journeys, store layouts, and large-scale visual merchandising installations. Of course thats among alllll the other things that go into luxury retail management. </p>
                                <p className="indv-para">I’m so excited to start my new burgeoning career that now includes web development. It allows me to create and build, two of my favorite things, while utilizing my communication, leadership, and experiential skills from my previous career.  My work experience created a unique skillset which allows me to speak the language of multiple stakeholders, and thus to execute on a level not normally done by one person.  </p>
                                <p className="indv-para">My journey to get to this point is a road less traveled, and that’s why I am incredibly excited to be here.  I completed my 2-year Graphic & Digital Design certificate from Parsons while being the Assistant Store Director of the MaxMara’s Flagship location in New York. Then I ate, slept, and dreamt coding, proudly graduating from DevMountains grueling 3-month program in March of 2021.  I couldn’t be more excited to pour myself into this next career chapter.</p>
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
