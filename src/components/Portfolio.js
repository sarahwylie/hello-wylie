import React from 'react';
import { BsGithub } from 'react-icons/bs'
import TalkTech from '../assets/Talk-Tech.png'
import Note from '../assets/Note.png'
import BeersBands from '../assets/BeersBands.png'
import Cacheching from '../assets/Cacheching.png'
import Password from '../assets/Password.png'
import READ from '../assets/READ.jpg'
import hawker from '../assets/hawker.png'

function Portfolio() {
  return (
    <section className="my-3" id="portfolio">
      <h2 className="p-2 display-inline-block strong">Portfolio</h2>
      <div className="flex-row justify-space-between">

      <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://texas-hawker.herokuapp.com/"
                alt="Hawker website"
                target="_blank"
                rel="noreferrer">Hawker</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, ES6, Node, NPM, Express, Cookies, Heroku, React, Sass, GraphQL, HTML, Faker.js, dotenv, bcrypt, Faker.js, Jest, React Router, JWT, Stripe, YAML, Webpack
              </h5>
              <p>Do you have a spectacular item that you just don't need anymore? Are you in search of something specific but don't want to spend an inordinate amount of money or search every thrift store in the greater metropolitan area? Come check out Hawker!</p>
              <BsGithub /><a href="https://github.com/nicnolen/Hawker" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
            <div className='col-4'>
              <img src={hawker} alt="Hawker" className='snaps' />
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-4'>
              <img src={TalkTech} alt="Talk Tech" className='snaps' />
            </div>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://talk-tech.herokuapp.com"
                alt="Talk Tech website"
                target="_blank"
                rel="noreferrer">Talk Tech</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, HTML, CSS, ES6, jQuery, Bootstrap, Heroku, Jest, Node, Insomnia, Sequelize, NPM, Express
              </h5>
              <p>Are you about to drop the next big breakthrough in tech? Did you just learn how to turn on a computer? No matter your level of experience, join us to Talk Tech on the hippest tech blog out there! Interact with the next Stephen Hawking or your grandpa on databases, dev ops, algorithms, and more!</p>
              <BsGithub /><a href="https://github.com/sarahwylie/Talk-Tech" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://still-reaches-43183.herokuapp.com"
                alt="Note website"
                target="_blank"
                rel="noreferrer">Thought Another Note</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, ES6, Node, NPM, Express, Cookies, Heroku
              </h5>
              <p>Ever get stuck with too much information in your brain? Need a brain dump? Organize your thoughts with Thought Another Note! Just enter your note title and text, hit save, and the note will populate on your screen. Sign off, handle the employee peeing in the plant, and come back to set your reminder to send out a memo about when the bathrooms will be functional again - your notes will still be there! Never drop a meeting or leave a client out in the rain again. Organize yourself with Thought Another Note.</p>
              <BsGithub /><a href="https://github.com/sarahwylie/thought-another-note" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
            <div className='col-4'>
              <img src={Note} alt="Note" className='snaps' />
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-4'>
              <img src={BeersBands} alt="Beers and Bands" className='snaps' />
            </div>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://sarahwylie.github.io/BeersandBands"
                alt="Beers and Bands website"
                target="_blank"
                rel="noreferrer">Beers and Bands</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, HTML, CSS, jQuery, Bulma, API
              </h5>
              <p>A one-stop site for your night out! Find a local brewpub and your favorite band or concert venue. Search by city and date to plan one or several nights of drunken moshing, chill jamming, or groovy grinding.</p>
              <BsGithub /><a href="https://github.com/sarahwylie/BeersandBands" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://sarahwylie.github.io/Weather-Dashboard"
                alt="Weather Dashboard website"
                target="_blank"
                rel="noreferrer">Weather Dashboard</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, HTML, CSS, API
              </h5>
              <p>An interactive weather website for travelers and those interested in weather around the world. Provides real-time weather forecasts and updates for searched-for cities, and allows users to save search history to maintain a database of the most searched-for cities.</p>
              <BsGithub /><a href="https://github.com/sarahwylie/Weather-Dashboard" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
            <div className='col-4'>
              <img src={Note} alt="Note" className='snaps' />
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-4'>
              <img src={READ} alt="READ All About It" className='snaps' />
            </div>
            <div className='col-8'>
              <h3 className="portfolio-item-title">READ All About It!</h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, Node, Markdown
              </h5>
              <p>Tired of getting to the end of your project and then realizing you still need a great README.md file? Want your project to stand out, but tired of putting in the effort? You've come to the right place! Use this installer to generate a README.md file that is concise and well-rounded! You'll be able to insert everything you need by prompt rather than thinking through what you might be missing. Never second-guess the opening to your project's GitHub page again!</p>
              <BsGithub /><a href="https://github.com/sarahwylie/READ-all-about-it" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://sarahwylie.github.io/Password-Generator"
                alt="Password Generator website"
                target="_blank"
                rel="noreferrer">Password Generator</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, HTML, CSS
              </h5>
              <p>Create a randomly generated password between 8-128 characters containing options for numbers, special characters, and upper or lower-case letters.</p>
              <BsGithub /><a href="https://github.com/sarahwylie/Password-Generator" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
            <div className='col-4'>
              <img src={Password} alt="Password Generator" className='snaps' />
            </div>
          </div>
        </div>

        <div className="col-12 mb-2 p-3 flex-column card">
          <div className='flex-row'>
            <div className='col-4'>
              <img src={Cacheching} alt="Cache-ching" className='snaps' />
            </div>
            <div className='col-8'>
              <h3 className="portfolio-item-title"><a href="https://sarahwylie.github.io/Cache-ching"
                alt="Cache-ching website"
                target="_blank"
                rel="noreferrer">Cache-ching</a></h3>
              <h5 className="portfolio-languages">
                Built With:
                JavaScript, HTML, CSS, Node.js, NPM, Express
              </h5>
              <p>Do you often forget how much money you've spent as you're traveling, but your bank app requires internet that you don't have at that crucial moment because, well, you're traveling? Take a load off by tracking your own budget so you can see a running balance as money flows in and out. The offline capabilities allow you to get accurate, up-to-moment budget snapshots which are then stored at your next web access point. Traveling is stressful, your money shouldn't be.</p>
              <BsGithub /><a href="https://github.com/sarahwylie/Cache-ching" className="btn mt-auto"><i className="mr-2"></i>View Project on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;