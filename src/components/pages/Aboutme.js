import React from 'react';
import '../../styles/Aboutme.css';

export default function AboutMe() {
  return (
    <div class='aboutme'>
      <div class='image'>
        <img src='/assets/profilepic.png'></img>
      </div>
      <div class='meat'>
        <h1>ABOUT ME</h1>
        <p>
          I am a fullstack engineer based in Seattle, Washington. Most of my related experiences started in 2022 at a bootcamp at the University of Washington. Otherwise, I have been independently learning code for about 5 years. Although I don't have too many projects under my belt, each of my projects including this portfolio has been carefully designed and coded in order to express my skillsets. Please enjoy and contact me if you would like my work!
        </p>
      </div>
    </div>
  );
}
