import React from 'react'
import backgroundImage from './assets/Rainbosplosion.jpg'

function About() {
    return (
        <section className='my-5 me'>
            <div id='blurb'>
                Sarah is a full-stack developer living in Austin, TX. She is an avid coder, hiker, reader, and chef, and she enjoys spending time with her family and pets.
            </div>
            <img url={backgroundImage} className="content"/>
        </section>
    )
}

export default About;