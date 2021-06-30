import React, { Component } from 'react'
import './Workit.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'

export default class Workit extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="workit-title">
               <p>WORKit</p>
               </div>
               <div className="workit-title-two">
               <p>circuit training app</p>
               </div>
               <div className="git-hub-btn">
                   <button className="code-btn">
                   <a href="https://github.com/Sngrenier/Workit">
                       <span className="source-type">Source Code</span>
                   <img className="git-icon" src="https://img.icons8.com/ios-glyphs/20/000000/github.png"/>
                   </a>
                   </button>
               </div>
               
               <div className='player-wrapper'>
                <ReactPlayer
            className='react-player center'
            url= 'https://youtu.be/a8Q7ckZexCM'
            width='100vw'
            height='70vh'
            controls = {true}
            volume='1'
            playing={false}
          />
        </div>

            <div className="container-fluid">
                    <div className="workit-proj-ov">
                <div className="workit-proj-details">
                    <div className="workit-subtitle">
                        <p>WHAT IT IS:</p>
                    </div>
                    <div className="workit-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <p>ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                        <p>Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <p>Sit amet dolor sit.ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</p>
                    </div>
                    </div>
            <div className="workit-img">
                    <img className="workit-wireframe" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/209530873_10110611765598528_4888703273573898934_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Z0cwnKkug_AAX-YT87z&_nc_ht=scontent-sjc3-1.xx&oh=726a96e78e10ef0588a956876985998b&oe=60E175EE"></img>
            </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="proj-process">
            <div className="workit-img">
                    <img className="workit-wireframe" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/209530873_10110611765598528_4888703273573898934_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=0debeb&_nc_ohc=Z0cwnKkug_AAX-YT87z&_nc_ht=scontent-sjc3-1.xx&oh=726a96e78e10ef0588a956876985998b&oe=60E175EE"></img>
            </div>
                <div className="proj-process-details">
                    <div className="process-subtitle">
                        <p>HOW IT WAS BUILT:</p>
                    </div>
                    <div className="process-bullets">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <ul className="pro-bullets">
                            <li>cool tool / process number one</li>
                            <li>cool tool / process number two</li>
                            <li>ucool tool / process number three</li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
        </div>
        )
    }
}
