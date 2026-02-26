import React from "react";
import "../../staticfiles/footer.css";
import { NavLink } from 'react-router-dom'
import logo from "../../img/logo.PNG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <img src={logo} alt="Seven Peaks Logo" className="footer-logo" />
          <p>
            Seven Peaks Solutions provides skilled housekeeping and manpower
            services with professionalism, reliability, and discipline.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to='/' className='foot-link'>Home</NavLink></li>
            <li><NavLink to='/about' className='foot-link'>About Us</NavLink></li>
            <li><NavLink to='/service' className='foot-link'>Services</NavLink></li>
            <li><NavLink to='/client' className='foot-link'>Client</NavLink></li>
            <li><NavLink to='/contact' className='foot-link'>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Seven Peaks Solutions, Tronglaobi, Moirang , Manipur</p>
          <p>📞 +91 88666 69881</p>
          <p>📩 SevenpeaksSolutions@gmail.com</p>
          <p>🕒 Working Hours: Mon–Sat (9 AM – 6 PM)</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Seven Peaks Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;