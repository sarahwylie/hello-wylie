import React from 'react';

function Resume() {
    return (
        <section className='my-5 resume'>
            <div className='animate__animated animate__slideInLeft'>View and download my full resume <a href="https://docs.google.com/document/d/1x7IzF1DsYyyJLu4peldoApCDoo_3_Cy9N64Qpob8UJM/edit?usp=sharing" alt="resume" target="_blank" rel="noopener noreferrer">here</a>. In the meantime, see if my skills fit your needs below!</div>
            <br/>
            <br/>
            <div id='technical'>
                <div id='techTitle'>
                <h2 className='strong animate__animated animate__slideInRight'>Technical Skills</h2>
                <br />
                </div>
                <div id='techSkills' className='animate__animated animate__slideInUp'>
                Faker.js | HTML5 | JavaScript | CSS3 | GitHub | FontAwesome | Node.js | Front-End | Back-End | REACT | SEO(SearchEngineOptimization) | GraphQL | Iconic | ES6 | Markdown | Python | Bootstrap | Sequelize | MongoDB | Mongoose | SQL | NoSQL | Jest | Express.js | JQuery | Webpack | API(RESTful,server-side) | Apollo | AJAX | MVC(ModelViewController) | State | Agile | MERN | Bulma | Mobile-Responsiveness | PWA(ProgressiveWebApp) | DOM(DocumentObjectModel) | Redux | JWT(JSONWebTokens) | Context | Stripe | Java | Spring | SpringBoot | JDBC | Jackson | JPA | Cmder | Eclipse | VSCode | PGAdmin | PostgreSQL | Insomnia | IntelliJ IDEA | Babel | Maven
                </div>
            </div>
        </section>
    )
}

export default Resume;