//Layout skeleton code provided in class
import React from 'react';
import PageContent from '../components/pagecontent';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Resume from '../components/resume';
import {capitalizeFirstLetter} from '../utils/helpers';

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