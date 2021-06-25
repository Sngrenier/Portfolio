import React, { Component } from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Education from '../Education/Education'
import * as Scroll from 'react-scroll';
import {Events, animateScroll as scroll} from 'react-scroll'


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
        scroll.scrollTo(100);
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
                                    <img className="prof-pic" alt="img-1" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/198921581_10110575767029948_4819573013890435741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=5-soznjnrvwAX8F5RNm&_nc_ht=scontent-sjc3-1.xx&oh=aa8cf3b6e9a794a16b19cc53d158125c&oe=60D8E72A"></img>
                                </div>
                            </div>
                        </div>

                <div className="about-scroll-bar">
                            <button className="about-scroll" onClick={this.scrollMore}>
                                <p className="scroll-para">scroll</p>
                            <div className="about-arrow"><div><img src="https://img.icons8.com/ios/28/000000/long-arrow-down.png"/></div>
                        </div>
                            </button>
                    </div>
                </div>  
                <Education/>
        </div>
        )
    }
}
