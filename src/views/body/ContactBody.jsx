import React from "react";
import "../../staticfiles/contact.css";

const ContactBody = () => {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>📞 CONTACT</h1>
        <p>
          Get in touch for professional security and housekeeping services.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📍 Office Address</h3>
          <p>
            Seven Peaks Solutions <br />
            Tronglaobi, Moirang <br />
            Manipur
          </p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 8866669881</p>
          <p>+91 7051985513</p>
          <p>+91 8619249156</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>SevenpeaksSolutions@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>🕒 Working Hours</h3>
          <p>Mon – Sat</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>

      </div>

    </div>
  );
};

export default ContactBody;