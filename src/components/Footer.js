import React from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs'

function Footer() {
    return (
        <section className='flex-row footer'>
                    <div className='col-4'>
                        <a href="https://github.com/sarahwylie"
                            alt="github"
                            target="_blank" 
                            rel="noreferrer"><BsGithub /></a></div>
                    <div className='col-4'>
                        <a href="https://www.linkedin.com/in/sarahamwylie/"
                            alt="linkedin"                             
                            target="_blank" 
                            rel="noreferrer"><BsLinkedin /></a></div>
                    <div className='col-4'>
                        <a href="mailto:sarahannemariawylie@gmail.com"
                            alt="email" 
                            target="_blank" 
                            rel="noreferrer"><BsFillEnvelopeFill /></a></div>
        </section>
    )
}

export default Footer;