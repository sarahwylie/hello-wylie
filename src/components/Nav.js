import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;


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
                        <li className="mx-2">
                            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                                About me
                            </a>
                        </li>
                        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>Contact</span>
                        </li>
                        {<li className={`mx-1 ${!contactSelected && 'navActive'}`}>
                                <span onClick={() => { setContactSelected(false) }}></span>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;