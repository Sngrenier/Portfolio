import React, { Component } from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import Education from '../Education/Education';
// import Design from '../Skills/Design';
// import Dev from '../Skills/Dev';
// import Client from '../Skills/Client';
// import Gallery from '../WorkGallery/Gallery'



export default class About extends Component {

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
    scroll.scrollTo(500);
  };
  scrollMore() {
    scroll.scrollMore(900);
  };

  handleSetActive(to){
    console.log(to);
  };


    render() {
        return (
            <div className="container-fluid">

                <div className="background2">
                    <div className="bkgrd-left2"></div>

                    <div className="bkgrd-right2">
                        <div className="about-details">
                            <div className="about-header">
                                <p>Lorem ipsum dolor sit amet dolor sit.</p>
                            </div>
                            <div className="about-para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <p>ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                                <p>Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <p>Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                            </div>
                        </div>

                    </div>
                
                        <div className="about">
                            <div className="ab"><p>AB</p></div>
                            <div className="bout"><p>BOUT</p></div>
                                <div className="me"><div><p>me</p></div>
                                <div className="dot2"><p>.</p></div>
                                <div className="profile-pic">
                                    <img className="prof-pic" alt="img-1" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/198921581_10110575767029948_4819573013890435741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=5sZx2Y2ljvsAX_8ykHL&_nc_ht=scontent-sjc3-1.xx&oh=41b1f62e4538162fa66c952c4d1a4d5e&oe=60DED5EA"></img>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-bar">
                            <button className="scroll" onClick={this.scrollTo}>
                                <p className="scroll-para">scroll</p>
                            <div className="arrow"><div><img src="https://img.icons8.com/ios/28/ffffff/long-arrow-down.png"/></div>
                        </div>
                            </button>
                    </div>
                </div>  
                {/* <Education/>
                <Design/>
                <Dev/>
                <Client/>
                <Gallery/> */}
        </div>
        )
    }
}
