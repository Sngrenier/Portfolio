import React, { Component } from 'react'
import './NewAbout.css'
import profilepic from './profilepic.png';

export default class NewAbout extends Component {
    render() {
        return (
            <div className="about-me-page">
                <div>
                <h3>About me.</h3>
                <img alt="img-2" className="prof-pic" src={profilepic} />
            <article>
            <p>At noon they sat down by the roadside, near a little brook, and Dorothy opened her basket and got out some bread.  She offered a piece to the Scarecrow, but he refused.</p>
            <p>&ldquo;I am never hungry,&rdquo; he said, &ldquo;and it is a lucky thing I am not, for my mouth is only painted, and if I should cut a hole in it so I could eat, the straw I am stuffed with would come out, and that would spoil the shape of my head.&rdquo;</p>
            <p>Dorothy saw at once that this was true, so she only nodded and went on eating her bread.</p>
            <p>&ldquo;Tell me something about yourself and the country you came from,&rdquo; said the Scarecrow, when she had finished her dinner.  So she told him all about Kansas, and how gray everything was there, and how the cyclone had carried her to this queer Land of Oz.</p>
            </article>
            </div>
            <div>
            <article>
            <p>At noon they sat down by the roadside, near a little brook, and Dorothy opened her basket and got out some bread.  She offered a piece to the Scarecrow, but he refused.</p>
            <p>&ldquo;I am never hungry,&rdquo; he said, &ldquo;and it is a lucky thing I am not, for my mouth is only painted, and if I should cut a hole in it so I could eat, the straw I am stuffed with would come out, and that would spoil the shape of my head.&rdquo;</p>
            <p>Dorothy saw at once that this was true, so she only nodded and went on eating her bread.</p>
            <p>&ldquo;Tell me something about yourself and the country you came from,&rdquo; said the Scarecrow, when she had finished her dinner.  So she told him all about Kansas, and how gray everything was there, and how the cyclone had carried her to this queer Land of Oz.</p>
            </article>
            </div>
            </div>
        )
    }
}
