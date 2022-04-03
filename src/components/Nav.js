import React from 'react';
import { Link } from "react-router-dom";

function Nav() {


    return (
        <header>
            <div className='flex-row'>
                <div className='col-5 photo'>
                    <a href='/'>
                        <span role="img" aria-label="img-name">
                            <img src={require(`../assets/profile-pic.png`)}
                                alt='Sarah'
                                className="img-thumbnail mx-1 inline-flex"
                                id='selfie'
                            />
                        </span>
                    </a>
                </div>
                <nav>
                    <ul className="flex-row navbar">
                        <li><Link to="/">About</Link></li>
                        <br/>
                        <li><Link to="/contact">Contact</Link></li>
                        <br/>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <br/>
                        <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Nav;