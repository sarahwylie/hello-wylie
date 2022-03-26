import React from 'react';

function Nav() {

    return (
        <header>
            <div className='flex-row'>
                <div className='col-sm'>
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
            <nav className='col'>
                <ul className='flex-row'>
                    <li className='col mx-2 navi'>
                        <a href='#about'>
                            Bio
                        </a>
                    </li>
                    <li className='col mx-2 navi'>
                        <span>Contact</span>
                    </li>
                    <li className='col mx-2 navi'>
                        <span>Portfolio</span>
                    </li>
                    <li className='col mx-2 navi'>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Nav;