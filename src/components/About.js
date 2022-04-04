import React from 'react'
import Rainbosplosion from '../assets/Rainbosplosion.jpg'
import 'animate.css';

function About() {
    return (
        <section className='my-5 me'>
            <div id='blurb'>
                Sarah is a full-stack developer living in Austin, TX. She is an avid coder, hiker, reader, and chef, and she enjoys spending time with her family and pets.
            </div>
            <img src={Rainbosplosion} className="bgimg animate__animated animate__fadeIn" alt="rainbowsplosion"/>
        </section>
    )
}

export default About; 