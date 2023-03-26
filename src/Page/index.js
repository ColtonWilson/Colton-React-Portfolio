//Layout skeleton code provided in class
import React from 'react';
import PageContent from '../components/pagecontent.js';
import About from '../components/about.js';
import Portfolio from '../components/portfolio.js';
import Contact from '../components/contact.js';
import Resume from '../components/resume.js';
import {capitalizeFirstLetter} from '../utils/helpers.js';

function Page({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name){
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return(
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}
export default Page;