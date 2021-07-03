import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll } from 'react-scroll'


export default class Header extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
}
  
  scrollToTop() {
    scroll.scrollToTop();
  };
  scrollToBottom() {
    scroll.scrollToBottom();
  };
  scrollTo() {
    scroll.scrollTo(100);
  };
  scrollMore() {
    scroll.scrollMore(700);
  };

  handleSetActive(to){
    console.log(to);
  };

  render () {

    return (
        <section className="container-fluid navbar">

            <div className="navbar header-bar">
                <nav className="title-bar">
                  <div className="nav-item name">
                    <Link to='/'>
                    <p className="name-line" onClick={this.scrollToTop}>STACY N GRENIER</p>
                    </Link>
                    <div className="nav-item links">
                      <div className="two-line-link">
                      <Link to='/about'>
                      <p className="link">ABOUT</p>
                    </Link>
                      </div>
                    <div className="two-line-link">
                    <Link to='/design'>
                    <p className="link">DESIGN & WEB DEV SKILLS</p>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/client'>
                    <p className="link">BUSINESS EXPERIENCE</p>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/test'>
                    <p className="link" href="">CLIENT TESTIMONIALS</p>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/education'>
                    <p className="link" href="">EDUCATION CV</p>
                    </Link>
                    </div>
                    <div className="two-line-link">
                    <Link to='/gallery'>
                    <p className="link" href="">PROJECTS</p>
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