import React, { Component } from 'react'
import './Education.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class Education extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="edu-page">
                <div className="test-header">
                <h5 className="test-title">education & resume</h5>
            </div>
    
                <div className="row">
                    <div className="edu-icons">
                        <img className="graphic-icon" alt="icon-2" src="https://danebliss.com/wp-content/uploads/2016/09/illustration-illustrator-flat-design-icon-portfolio.jpg" ></img>
                        <img className="design-icon" alt="icon-1" src="data:image/jpeg;base64,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" ></img>
                        <img className="webdev-icon" alt="icon-3" src="https://images.squarespace-cdn.com/content/v1/5a988191da02bcc9e82d0148/1520487354432-EZO6KTQV6CINX29DK55N/ke17ZwdGBToddI8pDm48kELCdpLkdPPdIQ3Xe4DumxZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyXc-hkWpKKg4fmXQutg02SR0z-Yc3kHoN4UU1eo5jDm6HJXejF9C-42VRNkAKmSNI/Icon8.png"></img>
                    </div>
                </div>
                <div className="edu-info">
                <div className="column">
                    <div className="edu-categories">
                        <div className="edu-head"><p className="etitle">GRAPHIC DESIGN</p></div>
                        <div className="edu-head"><p className="eschool">PARSONS SCHOOL OF DESIGN, NEW YORK</p></div>
                        <div className="edu-head"><p className="edate">2018</p></div>
                    </div>
                </div>

                <div className="column">
                    <div className="edu-details">
                        <div className="edu-head"><p className="etitle">DIGITAL DESIGN</p></div>
                       
                       <div className="edu-head"><p className="eschool">PARSONS SCHOOL OF DESIGN, NEW YORK</p></div>
                      
                       <div className="edu-head"><p className="edate">2018</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="edu-dates">
                        <div className="edu-head"><p className="etitle">FULL STACK WEB DEVELOPMENT</p></div>
                       
                       <div className="edu-head"><p className="eschool">DEVMOUNTAIN, UT</p></div>
                      
                       <div className="edu-head"><p className="edate">2021</p></div>
                    </div>
                </div>
                </div>

                <div className="cv-qr-code">
                    {/* <img className="qr-img" alt="" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/205618803_10110599020140528_6060753427467060989_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=R53cUZVmxtUAX-hO23u&_nc_ht=scontent-sjc3-1.xx&oh=b0aad9d812210d02c7a0a84e0329a51f&oe=60DBDC74" width={100}></img> */}
                    <iframe className="cv-img" src="https://drive.google.com/file/d/1wX9rN5k1Qlk29uWPGLegWylwVTpfdy4h/preview" width="450" height="200" allow="autoplay"></iframe>
                </div>
                </div>
            </div>
        )
    }
}
