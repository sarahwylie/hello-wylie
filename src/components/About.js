import React from 'react';
import backgroundImage from '../assets/Rainbosplosion.jpg'

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">Sarah Wylie</h1>
            <div id='blurb'>
                Sarah is a full-stack developer living in Austin, TX. She is an avid coder, hiker, reader, and chef, and she enjoys spending time with her family and pets.
            </div>
            <img src={backgroundImage} className='my-5' style={{ width: '100%' }} alt='background'/>
        </section>
    )
}

export default About;