import React, { Component } from 'react'
import './Landing.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll } from 'react-scroll'
import About from '../About/About'
// import Education from '../Education/Education';
// import Design from '../Skills/Design';
// import Dev from '../Skills/Dev';
// import Client from '../Skills/Client';
// import Gallery from '../WorkGallery/Gallery'
// import Test from '../Testimonials/Test'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// import styled from "styled-components";
import comingsoon from './comingsoon.gif';
import landingimg from './landingimg.jpeg';
import Navbar from '../Navbar/Navbar'


export default class Landing extends Component {
  state={
    openModal : false
}

onClickButton = e =>{
    e.preventDefault()
    this.setState({openModal : true})
}

onCloseModal = ()=>{
    this.setState({openModal : false})
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
              <Navbar />

              {/* <div className="background-img">
              <img alt="img-2" className="prof-pic" src={landingimg} />
              </div> */}

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
                               
                                  <button className="modal-btn" onClick={this.onClickButton}>
                                    <p className="btn-type">CSS DISCLAIMER</p>
                                    </button>
                                  <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                                      <div className="open-modal">
                                      <img alt="coming-soon" className="coming-soon" width={250} height={150} src={comingsoon} />
                                        <h1 className="modal-message">responsive css disclaimer:</h1>
                                        <p className="modal-message-1">As everything in web development, the responsive css for this site is a work in progress. So if it looks funky on your phone my apologies, but it's coming soon!</p>
                                      </div>
                                  </Modal>  
                           
                                <div className="job"><p>WEB DESIGNER</p></div>
                                <div className="job"><p>WEB DEVELOPER</p></div>
                                <div className="job"><p>GRAPHIC DESIGNER</p></div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <About />
                {/* <Education/>
                <Design/>
                <Dev/>
                <Test/>
                <Client/>
                <Gallery/> */}
            </div>
        )
    }
}



// const ModalContainer = styled.div`
// position: fixed;
//   right: 0;
//   bottom: 0;
//   background-color:transparent !important;
// `

