import React, { Component } from 'react'
import './MarbleOak.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'

export default class MarbleOak extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="marbleoak-title">
               MARBLE OAK LIVING
               </div>
               <div className='player-wrapper'>
                <ReactPlayer
            className='react-player center'
            url= 'https://youtu.be/N6tywPqODnc'
            width='100vw'
            height='70vh'
            controls = {true}
            volume='1'
            playing={false}
          />
        </div>
        <div className="container-fluid">
            <div className="marbleoak-subtitle">

            </div>
            <div className="marbleoak-details">

            </div>

        </div>
            </div>
        )
    }
}
