import React from 'react'

const About = () => {
  return (
    <div className='about-wrapper text-center'>
      <h4>ABOUT ME</h4>
      <div  className='about-info'>
        <p>I am a self-taught front-end developer. I have passion for designing websites that are
          both visually appealing and easy to navigate. I am excited to explore new ideas and
          opportunities that will allow me to expand my skills while contributing to the growth of
          the industry. I am a dedicated young developer always ready to learn and grow. I love to be 
          amidst experienced and renowned developers and sip from their ocean of knowledge.
        </p> 
        <p>I have intermediate knowledge of HTML, CSS, JavaScript, React, Bootstrap and Wordpress</p>
      </div>
      
        <button className='view-resume'><a href='https://docs.google.com/document/d/1f9-j-L5Zqyii8UhaGjIIvGM7cJ9rs-qRHZyJxrUpzuw/edit?usp=sharing' target='_blank'>view my resume</a></button>
      
        <div className='progress-bar-wrapper mt-4'>
          <h5 className='text-center my-skills'>MY SKILLS</h5>
          <div className="progress">
            <div className='progress-bar barhtml progress-bar-striped progress-bar-animated bg-dark'>HTML - 90%</div>
          </div>
          <br/>
          <div className="progress">
            <div className='progress-bar barcss progress-bar-striped progress-bar-animated bg-dark'>CSS - 90%</div>
          </div>
          <br/>
          <div className="progress">
            <div className='progress-bar barjs progress-bar-striped progress-bar-animated bg-dark'>JavaScript - 60%</div>
          </div>
          <br/>
          <div className="progress">
            <div className='progress-bar barbootstrap progress-bar-striped progress-bar-animated bg-dark'>Bootstrap - 85%</div>
          </div>
          <br/>
          <div className="progress">
            <div className='progress-bar barwordpress progress-bar-striped progress-bar-animated bg-dark'>Wordpress - 75%</div>
          </div>
          <br/>
          <div className="progress">
            <div className='progress-bar barreact progress-bar-striped progress-bar-animated bg-dark'>React - 60%</div>
          </div>
        </div>
      </div>
  )
}

export default About