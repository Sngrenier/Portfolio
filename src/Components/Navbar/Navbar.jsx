import React, { Component } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Events, animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {


    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
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

    handleSetActive(to) {
        console.log(to);
    };
    render() {

        return (
            <Nav>
                <div className="logo" onClick={this.scrollToTop}>
                    <Link to='/'>
                        <p className="logo-name">STACY GRENIER</p>
                    </Link>
                </div>
                <Burger />
            </Nav>
        )
    }
}


const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  margin-top: 0 !important;
  margin-left: 0 !important;
  padding: 0 2% 2% 2%;
  margin-bottom: 2%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-content:center;
  position: fixed;
  z-index: 7;
  text-decoration: none !important;
  background-color: white;

  .logo-name {
    padding: 2.5vh 0 2vh 1vw;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    letter-spacing: 2.5px;
    font-weight: 700;
    text-decoration: none !important;
  }
  .logo-name:hover{
        color: #ffe0d7;
  }
`
