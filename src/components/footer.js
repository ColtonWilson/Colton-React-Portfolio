import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faGoogle} from '@fortawesome/free-brands-svg-icons';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <div className="footer">
        <a className="github" href="https://github.com/ColtonWilson" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/colton-wilson/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="website" href="https://coltonwilson.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogle} />
        </a>
    </div>

  );
}

export default Footer;