import React from 'react'
import './Footer.css'
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer>
      <a href="" className='footer__logo'>ZAHEER TECH</a>

      <ul className='permalinks'>
        <li><a href="#" onClick={() =>{props.setActiveNav('#')}} >Home</a></li>
        <li><a href="#about" onClick={() =>{props.setActiveNav('#about')}} >About</a></li>
        <li><a href="#experience" onClick={() =>{props.setActiveNav('#experience')}} >Experience</a></li>
        <li><a href="#portfolio" onClick={() =>{props.setActiveNav('#portfolio')}} >Projects</a></li>
        <li><a href="#contact" onClick={() =>{props.setActiveNav('#contact')}} >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Ahmad-Zahradeen-Tahir"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/susboi20/"><BsLinkedin/></a>
        <a href="https://twitter.com/Zahradeeeen"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Zaheer Tech. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
