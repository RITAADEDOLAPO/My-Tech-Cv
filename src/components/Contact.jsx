import React from 'react'
import linkedin from './images/linkedin.png'
import facebook from './images/facebook.png'
import whatsapp from './images/whatsapp.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import mail from './images/mail.jpg'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <h4 className='text-center'>CONTACT</h4>
      <p className='in-touch text-center'>GET IN TOUCH WITH ME</p>
      <p className='contact-info text-center'>I AM AVAILABLE TO COLLABORATE AND DEVELOP PROJECTS, <br/>I CAN BE REACHED THROUGH MY SOCIAL MEDIA HANDLES AND MAIL.</p>
      <div className='text-center social-media-icons'>
        <a href='https://www.facebook.com/bamigbola.rita'><img src={facebook} className='socials' alt='facebook icon'/></a>
        <a href='http://linkedin.com/in/rita-adedolapo-59168723a' target='_blank'><img src={linkedin} className='socials' alt='linkedin icon'/></a>
        <a href='https://wa.me/+2348139201780' target='_blank'><img src={whatsapp} className='socials' alt='whatsapp icon'/></a>
        <a href='https://twitter.com/adedolapo_rita' target='_blank'><img src={twitter} className='socials' alt='twitter icon'/></a>
        <a href='https://instagram.com/ara_crinal?igshid=NTc4MTIwNjQ2YQ==' target='_blank'><img src={instagram} className='socials' alt='instagram icon'/></a>
        <a href='ritaadedolapo2@gmail.com' target='_blank'><img src={mail} className='socials' alt='mail icon'/></a>
      </div>
      <p className='text-center the-end'>YOU HAVE COME TO THE END OF MY PORTFOLIO</p>
    </div>
  )
}

export default Contact