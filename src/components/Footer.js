import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <section className='flex-row'>
            <div className='col'></div>
            <div className='col'>
            <FontAwesomeIcon icon="fab fa-github" />
            <FontAwesomeIcon icon="fab fa-linkedin" />
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <div className='col'></div>
            </div>
        </section>
    )
}

export default Footer;