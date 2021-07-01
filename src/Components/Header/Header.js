import React, { Component } from 'react';
// import Slider from 'react-elastic-carousel';
import './Header.css'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
// import styled from 'styled-components'

export default class Header extends Component {

  render () {

    return (
        <section className="container-fluid navbar">

            <div className="navbar header-bar">
                <nav className="title-bar">

                  <div className="nav-item name">
                    <Link to="/">
                    <a className="name-line">STACY N GRENIER</a>
                    </Link>
                    <div className="nav-item links">
                      <div className="two-line-link">
                      <Link to='/about'>
                      <a className="link">ABOUT</a>
                    </Link>
                      </div>
                    <div className="two-line-link">
                    <Link to='/design'>
                    <a className="link">DESIGN & WEB DEV SKILLS</a>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/client'>
                    <a className="link">BUSINESS EXPERIENCE</a>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/test'>
                    <a className="link">CLIENT TESTIMONIALS</a>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/education'>
                    <a className="link">EDUCATION CV</a>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/gallery'>
                    <a className="link">PROJECTS</a>
                    </Link>
                    </div>
                    </div>
                  </div>
              </nav>
          </div>
        </section>
    )
  }
}