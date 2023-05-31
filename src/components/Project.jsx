import React from 'react'
import project1 from './images/namefilter.png'
import project2 from './images/counter.png'
import project3 from './images/contact-us.png'
import project4 from './images/calculate.png'
import project5 from './images/googleclone.png'
import project6 from './images/okekitchen.png'

const Project = () => {
  return (
    <div className='project-wrapper text-center'>
        <h4>PROJECTS</h4>
        <div className='card-wrapper'>
            <div className='card'>
                <img src={project1} alt='' className='card-img-top project-img'/>
                <div className='card-body text-start'>
                    <h5 className="card-title">Name Filter</h5>
                    <button className='visit-site'><a href="https://ritaadedolapo.github.io/rita-name-filter/" target='_blank'>visit site</a></button>
                </div>
            </div>
            
            <div className='card'>
                <img src={project6} alt='' className='card-img-top project-img'/>
                <div className='card-body text-start'>
                    <h5 className="card-title">Kitchen</h5>
                    <button className='visit-site'><a href="https://rita-kitch.netlify.app/ " target='_blank'>visit site</a></button>
                </div>
            </div>
            <div className='card'>
                <img src={project3} alt='' className='card-img-top project-img'/>
                <div className='card-body text-start'>
                    <h5 className="card-title">Contact Us</h5>
                    <button className='visit-site'><a href="https://ritaadedolapo.github.io/user_form/" target='_blank'>visit site</a></button>
                </div>
            </div>
        </div>
        <div className='card-wrapper'>
            <div className='card'>
                <img src={project4} alt='' className='card-img-top project-img'/>
                <div className='card-body text-start'>
                    <h5 className="card-title">Calculator</h5>
                    <button className='visit-site'><a href="https://rita-calculator.netlify.app/" target='_blank'>visit site</a></button>
                </div>
            </div>
            
            <div className='card'>
                <img src={project5} alt='' className='card-img-top project-img'/>
                <div className='card-body text-start'>
                    <h5 className="card-title">Google Clone</h5>
                    <button className='visit-site'><a href="https://rita-li.netlify.app/" target='_blank'>visit site</a></button>
                </div>
            </div>
            
            <div className='card'>
                <img src={project2} alt='' className='card-img-top project-img'/>                
                <div className='card-body text-start'>
                    <h5 className="card-title">Counter</h5>
                    <button className='visit-site'><a href="https://rita-counter.netlify.app/" target='_blank'>visit site</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project