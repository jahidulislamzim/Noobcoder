/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "./Footer.css";
const Footer = () => {
    return (
      <div  className='footer'>
  
      <div>
          <h1>This is footer</h1>
      </div>
            <div className='footer-link'>
                <nav>
                <a target='_blank' href="https://facebook.com" >Facebook</a>
                <a target='_blank' href="https://www.youtube.com/" >You Tube</a>
                <a target='_blank' href="https://web.programming-hero.com/" >Programming Hero</a>
                </nav>
                
                
                

            </div>
            
            </div>
  );
};

export default Footer;
