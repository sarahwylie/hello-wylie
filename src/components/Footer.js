import React from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs'

function Footer() {
    return (
        <section className='flex-row footer'>
            {/* <div className='col'></div>
            <div className='col'>
                <div className='flex-row'> */}
                    <div className='col'>
                        <BsGithub
                            href="github.com/sarahwylie"
                            alt="github" /></div>
                    <div className='col'>
                        <BsLinkedin
                            href="https://www.linkedin.com/in/sarahamwylie/"
                            alt="linkedin" /></div>
                    <div className='col'>
                        <BsFillEnvelopeFill
                            href="mailto:sarahannemariawylie@gmail.com"
                            alt="email" /></div>
                {/* </div>
                <div className='col'></div>
            </div> */}
        </section>
    )
}

export default Footer;