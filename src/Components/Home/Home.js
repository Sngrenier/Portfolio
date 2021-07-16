import React, { Component } from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="background">
                <div className="background-left-1">
                <header className="home-header">
                    STACY GRENIER
                </header>
                <div className="home-content">
                <div className="home-greeting">
                    <h1 className="hiya">HI YA.</h1>
                </div>
                <div className="home-jobs">
                    <div className="home-job-title">web designer</div>
                    <div className="home-job-divider">|</div>
                    <div className="home-job-title">web developer</div>
                    <div className="home-job-divider">|</div>
                    <div className="home-job-title">graphic designer</div>
                </div>
                <div className="port-button">
                    <Link to="/about">
                    <button className="port-btn">my portfolio</button>
                    </Link>
                </div>
                <div className="icon-links">
                    <div className="home-icon"><img src="https://img.icons8.com/material-outlined/24/ffffff/open-envelope.png"/></div>
                    <div className="home-icon"><img src="https://img.icons8.com/ios-glyphs/24/ffffff/linkedin-2--v1.png"/></div>
                    <div className="home-icon"><img src="https://img.icons8.com/material-outlined/24/ffffff/github.png"/></div>
                </div>
                </div>
                </div>
                <div className="background-right-1">
                </div>

                </div>
            </div>
        )
    }
}
