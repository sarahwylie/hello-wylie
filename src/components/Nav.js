import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Nav() {

    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        const url = "https://api.github.com/users/sarahwylie";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAvatar(json.avatar_url);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    return (
        <header>
            <div className='flex-row'>
                <div className='col-2 photo'>
                    <a href='/'>
                        <span role="img" aria-label="img-name">
                            <img src={avatar}
                                alt='Sarah'
                                className="img-thumbnail mx-1 inline-flex"
                                id='selfie' />
                        </span>
                    </a>
                </div>
                <div className='col-10'>
                    <nav>
                        <ul className="flex-row">
                            <li className='nb'><Link to="/">About</Link></li>
                            <br />
                            <li className='nb'><Link to="/contact">Contact</Link></li>
                            <br />
                            <li className='nb'><Link to="/portfolio">Portfolio</Link></li>
                            <br />
                            <li className='nb'><Link to="/resume">Resume</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav;