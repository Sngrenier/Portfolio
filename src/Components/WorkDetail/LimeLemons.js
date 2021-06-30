import React, { Component } from 'react'
import './LimeLemons.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class dev extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="background-work">
                <div className="bkgrd-left-work"></div>
                    <div className="bkgrd-right-work"></div>
                        <div className="work-heading">
                                <div className="wo"><p>PR</p></div>
                                <div className="rk">
                                    <div><p>OJECTS</p></div>
                                    {/* <div className="dot6"><p>.</p></div> */}
                                </div>
                            <div className="rk">
                                <p className="work-subtitle">a handful of my recent work</p>
                                <div className="dot6"><p>.</p></div>
                            </div>

               <div className="section">
                   <div className="w-container">
                       <div className="w-row">
                           <div className="w-col w-col-4">
                               <div className="thumbnil-block">
                                   <div className="text-wrapper">
                                       <h3>Heading</h3>
                                       <h5>ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolor.</h5>
                                   </div>
                               </div>
                           </div>
                           <div className="w-col w-col-4"></div>
                           <div className="w-col w-col-4"></div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        </div>
        )
    }
}
