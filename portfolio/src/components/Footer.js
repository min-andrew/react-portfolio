import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <ul class='footer'>
            <li>
                <a
                    href="https://www.linkedin.com/in/andrew-min-8a957ba7/"
                    target="_blank">
                    <img src='/assets/linkedin.png'></img>
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/min-andrew"
                    target="_blank">
                    <img src='/assets/github.png'></img>
                </a>
            </li>
            <li>
                <a
                    href="https://calm-depths-51350.herokuapp.com/"
                    target="_blank">
                    <img src='/assets/blogger.png'></img>
                </a>
            </li>
        </ul>
    );
}

export default Footer;
