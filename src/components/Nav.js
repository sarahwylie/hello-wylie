import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const selfie = "https://avatars.githubusercontent.com/u/90208612?v=4";

function Nav() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/sarahwylie`)
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    return (
        <header>
            <div className='flex-row'>
                <div className='col-2 photo'>
                    <a href='/'>
                        <span role="img" aria-label="img-name">
                            <img src={selfie()}
                                alt='Sarah'
                                className="img-thumbnail mx-1 inline-flex"
                                id='selfie'
                            />
                        </span>
                    </a>
                </div>
                <div>
                    {loading && <div>Excellence may take time...</div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    <ul>
                        {data &&
                            data.map(({ id, bio }) => (
                                <li key={id}>
                                    <h3>{bio}</h3>
                                </li>
                            ))}
                    </ul>
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