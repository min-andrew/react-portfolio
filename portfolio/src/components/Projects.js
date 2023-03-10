import React from 'react';
import '../styles/Projects.css';

function Projects() {
    return (
        <ul class='projects'>
            <h2>Heroku Deployed Apps</h2>
            <ul class='projects'></ul>
            <li>
                <h3>Dog Social Media App</h3>
                <a
                    href="https://fast-atoll-54795.herokuapp.com/"
                    target="_blank">
                    <img src='/assets/dogparkfinder.png'></img>
                </a>
            </li>
            <li>
                <h3>Blog</h3>
                <a
                    href="https://calm-depths-51350.herokuapp.com/"
                    target="_blank">
                    <img src='/assets/bloggerapp.png'></img>
                </a>
            </li>
            <li>
                <h3>Downloadable Text Editor</h3>
                <a
                    href="https://stark-depths-71577.herokuapp.com/"
                    target="_blank">
                    <img src='/assets/textediterapp.png'></img>
                </a>
            </li>
            <h2>Github Pages Deployed Apps</h2>
            <li>
                <h3>Dog Park Finder</h3>
                <a
                    href="https://min-andrew.github.io/Dog-park-finder/"
                    target="_blank">
                    <img src='/assets/dogtown.png'></img>
                </a>
            </li>
            <li>
                <h3>Weather Dashboard</h3>
                <a
                    href="https://min-andrew.github.io/weather-dashboard/"
                    target="_blank">
                    <img src='/assets/weatherdashboard.png'></img>
                </a>
            </li>
            <li>
                <h3>Work Day Scheduler</h3>
                <a
                    href="https://min-andrew.github.io/Work-Day-Scheduler/"
                    target="_blank">
                    <img src='/assets/workdayscheduler.png'></img>
                </a>
            </li>
            <li>
                <h3>Password Generator</h3>
                <a
                    href="https://min-andrew.github.io/Password-Generator/"
                    target="_blank">
                    <img src='/assets/pwgen.png'></img>
                </a>
            </li>
            <li>
                <h3>Code Quiz</h3>
                <a
                    href="https://min-andrew.github.io/code-quiz/"
                    target="_blank">
                    <img src='/assets/codequiz.png'></img>
                </a>
            </li>
        </ul>
    );
}

export default Projects;