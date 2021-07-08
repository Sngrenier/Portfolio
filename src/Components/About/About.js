import React, { Component } from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import profpic from './profpic.png';
import { Events, animateScroll as scroll } from 'react-scroll'
import githubicon from './githubicon.png';
import linkedicon from './linkedicon.png';


export default class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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

                <div className="background2">
                    <div className="bkgrd-left2"></div>

                    <div className="bkgrd-right2">
                        <div className="about-details">
                            <div className="about-header">
                                <p>The scenic route is always more captivating.</p>
                            </div>
                            <div className="about-para">
                                <p className="inv-para">Hi-ya!  I’m Stacy, and I’m thrilled that you are taking time to learn more about me!  I am a full-stack web developer, web designer and graphic designer with experience in complete brand development & packaging design. </p> 
                                <p className="inv-para">In my former life, I was a luxury retail Store Director.  I have worked on multiple freelance web/graphic/digital design projects, and am currently working on a brand and web development project for Edible Communities online magazine publication; Edible Rio Grande Valley. </p>
                                <p className="inv-para">My journey to get to this point is a road less traveled, and that’s why I am incredibly excited to be here.  I completed my 2-year Graphic & Digital Design certificate from Parsons while being the Assistant Store Director of the MaxMara’s Flagship location in New York. Then I ate, slept, and dreamt coding, proudly graduating from DevMountains grueling 3-month program in March of 2021.  I couldn’t be more excited to pour myself into this next chapter.</p>
                            </div>
                        </div>

                    </div>
                
                        <div className="about">
                            <div className="ab"><p>AB</p></div>
                            <div className="bout"><p>BOUT</p></div>
                                <div className="me"><div><p>me</p></div>
                                <div className="dot2"><p>.</p></div>
                                <div className="profile-pic">
                                <img alt="img-2" className="prof-pic" src={profpic} />
                                </div>
                            </div>
                        </div>

                        <div className="scroll-bar">
                            <button className="scroll" onClick={this.scrollMore}>
                                <p className="scroll-para">keep going</p>
                            <div className="arrow"><div><img alt="" src="https://img.icons8.com/ios/28/ffffff/long-arrow-down.png"/></div>
                        </div>
                            </button>
                    </div>
                </div>  
                <div className="container-fluid">
                <div className="project-overview">
                    <div className="project-overview-about">
                    <p className="proj-para-body-about">Thanks for taking the time to get know me! </p>
                    <p className="proj-para-1-about">I hope you take a few minutes to explore this labor of love, a.k.a my portfolio, to better understand my design aesthetic and web development skills.  I look forward to the opportunity to learn more about you!</p>
                    <p className="proj-para-about">email, call or text anytime! Connect with me on Linkedin and find me on Github.</p>
                    <p className="proj-para-2-about">sngrenier@gmail.com    |    301.793.6024</p>
                    <div className="row contact-row">
                        <div className="contact-icons">
                        <a href="https://github.com/Sngrenier/Portfolio">
                        <img alt="img-2" className="icon-pic" width={25} height={25} src={githubicon} />
                        </a>
                        <a href="https://github.com/Sngrenier/Portfolio">
                        <img alt="img-2" className="icon-pic" width={25} height={25} src={linkedicon} />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
