import React from 'react';

function Resume() {
    return (
        <section className='my-5 resume'>
            <div>View and download my full resume <a href="https://docs.google.com/document/d/1RY9CEHp8J_PWvqzqpSSrwOLPwCCbZZeufPXDC49qqzg/edit?usp=sharing" alt="resume" target="_blank" rel="noreferrer">here</a>. In the meantime, see if my skills fit your needs below!</div>
            <br/>
            <br/>
            <div id='technical'>
                <div id='techTitle'>
                <h2 className='strong'>Technical Skills</h2>
                <br />
                </div>
                <div id='techSkills'>
                Faker.js | HTML | JavaScript | CSS | GitHub | FontAwesome | Node.js | Front-End | Back-End | REACT | SEO(SearchEngineOptimization) | GraphQL | Iconic | ES6 | Markdown | Python | Bootstrap | Sequelize | MongoDB | Mongoose | SQL | NoSQL | Jest | Express.js | JQuery | Webpack | API(RESTful,server-side) | Apollo | AJAX | MVC(ModelViewController) | State | Agile | MERN | Bulma | Mobile-Responsiveness | PWA(ProgressiveWebApp) | DOM(DocumentObjectModel) | Redux | JWT(JSONWebTokens) | Context | Stripe
                </div>
            </div>
        </section>
    )
}

export default Resume;