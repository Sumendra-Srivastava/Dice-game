import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="containr-contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
       data-aos="zoom-in-up"
    data-aos-duration="1000"
      
      >
        <a href="https://www.instagram.com/sumendra_srivastava?igsh=MXMwMGw3djZmMzUzOA=="  target="_blank"className="items">
          <FaInstagramSquare className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/sumendra-srivastava-92b196230" target="_blank"className="items">
        <FaLinkedin className='icon'/>
        </a> 
        <a href="https://github.com/Sumendra-Srivastava" target="_blank" className="items">
        <FaGithub className='icon'/>
        </a>
        <a href="mailto:somusrivastav871@gmail.com" target="_blank" className="items">
          <CgMail className='icon'/>
        </a>
        <a href="https://leetcode.com/u/Srivastava17/" target="_blank" className="items">
          <SiLeetcode className='icon'/>
        </a>
        
        
      </div>
    </div>
    </>
  )
}

export default Contact
