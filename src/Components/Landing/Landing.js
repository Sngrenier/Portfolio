import React, { Component } from 'react'
import './Landing.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll } from 'react-scroll'
// import About from '../About/About'
// import Education from '../Education/Education';
// import Design from '../Skills/Design';
// import Client from '../Skills/Client';
// import Gallery from '../WorkGallery/Gallery'
// import Test from '../Testimonials/Test'

export default class Landing extends Component {

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
    

    render() {
        return (
            <div className="container-fluid">

                <div className="background">
                    <div className="bkgrd-left"></div>
                    <div className="bkgrd-right"></div>
                <div className="greeting">
                            <div className="hi"><p>HI</p></div>
                            <div className="ya">
                                <div><p>YA</p></div>
                                <div className="dot"><p>.</p></div>
                            </div>
                        </div>
                        <div className="scroll-bar">
                            <button className="scroll" onClick={this.scrollMore}>
                                <p className="scroll-para">scroll</p>
                            <div className="arrow-icon"><div><img className="arrow" alt="" src="https://img.icons8.com/ios/28/ffffff/long-arrow-down.png"/></div>
                        </div>
                            </button>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="landing-footer">
                        <div classname="footer-bar">
                            <div className="job-titles">
                                <div className="job"><p>WEB DESIGNER</p></div>
                                <div className="job"><p>WEB DEVELOPER</p></div>
                                <div className="job"><p>GRAPHIC DESIGNER</p></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* <About />
                <Education/>
                <Design/>
                <Test/>
                <Client/>
                <Gallery/> */}
            </div>
        )
    }
}
