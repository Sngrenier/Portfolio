import React, { Component } from 'react'
import './Workit.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'

export default class Workit extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="workit-title">
               WORKIT CIRCUIT TRAINING APP
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
            <div className="workit-subtitle">

            </div>
            <div className="workit-details">

            </div>

        </div>
            </div>
        )
    }
}
