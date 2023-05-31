import React from 'react'

const Home = () => {
  return (
    <>
    <div className='text-center' style={{marginTop:'100px'}}>
      <h2 className='myName'>BAMIGBOLA RITA ADEDOLAPO</h2>
      <p><span className='skill'>FRONT-END </span> AND <span className='skill'>WORDPRESS DEVELOPER</span></p>
      <p>I CAN DEVELOP <br/>INTERACTIVE, FUNCTIONAL AND RESPONSIVE WEB APPLICATIONS  <br/>INDEPENDENTLY.</p>
      <button className='contact-me mt-3'><a href='/contact'>contact me</a></button>
      <blockquote class="blockquote mt-5">
        <p>If you want to be successful, you have to jump, there’s no way around it. When you jump, I can 
          assure you that your parachute will not open right away. But if you do not jump, your 
          parachute will never open. If you’re safe, you’ll never soar!”</p>
          <footer class="blockquote-footer nav justify-content-end">Steve Harvey</footer>
      </blockquote>
    </div>
    </>
  )
}

export default Home