import React, { Component } from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll} from 'react-scroll';


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
                                <p>The scenic route is always more captivating.</p>
                            </div>
                            <div className="about-para">
                                <p className="inv-para">My path to web development has not been a straight one that's for sure. </p>
                                <p className="inv-para">I have over 15 years in luxury retail management and operations. During this time I went back to school and completed a 2 year Graphic and Digital Design certificate program from Parsons in NY, which I thoroughly enjoyed. </p>
                                <p className="inv-para">Then once covid collapsed the world, I was laid off, which gave me time to reevaluate my career path. I thought back to my graphic design certificate and the spark it had for me, so I decided to pivot my career and pursued web development. I recently graduated from DevMountain 3-month bootcamp, as I can officially now add full-stack-developer to my CV.</p>
                                <p className="inv-para">I truly enjoy client facing time as well as building something and being creative, and this new career path has the potential to offer all of those things, which is very exciting to me. </p>
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
                            <div className="arrow"><div><img alt="" src="https://img.icons8.com/ios/28/ffffff/long-arrow-down.png"/></div>
                        </div>
                            </button>
                    </div>
                </div>  
        </div>
        )
    }
}
