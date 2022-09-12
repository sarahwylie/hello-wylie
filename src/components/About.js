import React from 'react'
import Rainbosplosion from '../assets/Rainbosplosion.jpg'
import 'animate.css';

function About() {
    return (
        <section className='my-5 me'>
            <div id='blurb'>
                Sarah Wylie is a skilled software developer whose natural leadership skills and collaborative tendencies make her an excellent addition to any team. Sarah spent a decade managing several multi-million dollar businesses while simultaneously incorporating new technologies and advancements to help spur growth. Sarah strives to fulfill the greater good on any team and her lifelong commitment to learning is second only to her drive to help others.
            </div>
            <img src={Rainbosplosion} className="fade-in-image" alt="rainbowsplosion" />
        </section>
    )
}

export default About; 