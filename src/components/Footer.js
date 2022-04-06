import React from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <section className='flex-row footer'>
                    <div className='foot col-3'>
                        <a href="https://github.com/sarahwylie"
                            alt="github"
                            target="_blank" 
                            rel="noreferrer"><BsGithub /></a></div>
                    <div className='foot col-3'>
                        <a href="https://www.linkedin.com/in/sarahamwylie/"
                            alt="linkedin"                             
                            target="_blank" 
                            rel="noreferrer"><BsLinkedin /></a></div>
                    <div className='foot col-3'>
                        <a href="mailto:sarahannemariawylie@gmail.com"
                            alt="email" 
                            target="_blank" 
                            rel="noreferrer"><BsFillEnvelopeFill /></a></div>
                    <div className='foot col-3'>
                        <a href="https://www.instagram.com/moolovesdonuts/"
                            alt="instagram" 
                            target="_blank" 
                            rel="noreferrer"><BsInstagram /></a></div>
        </section>
    )
}

export default Footer;