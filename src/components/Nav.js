import React from 'react';

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
                    <ul className="flex-row">
                        {/* <li className="mx-2"> */}
                        <li><Nav exact to="/">About Me</Nav></li>
                        <li><Nav to="/portfolio">Contact</Nav></li>
                        <li><Nav to="/about">Portfolio</Nav></li>
                        <li><Nav to="/resume">Resume</Nav></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Nav;