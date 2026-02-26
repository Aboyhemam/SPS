import React from "react";
import "../../staticfiles/why.css";

const WhyBody = () => {
  return (
    <div className="security-page">

      <div className="security-header">
        <h1>🔐 Why Choose Our Security Services?</h1>
        <p>
          We provide reliable, professional, and fully monitored security
          personnel to ensure complete peace of mind for your organization.
        </p>
      </div>

      <div className="security-container">

        <div className="security-card">
          <h3>Background-Verified Guards</h3>
        </div>

        <div className="security-card">
          <h3>Uniformed & Well-Trained Staff</h3>
        </div>

        <div className="security-card">
          <h3>24/7 Availability</h3>
        </div>

        <div className="security-card">
          <h3>Attendance Monitoring</h3>
        </div>

        <div className="security-card">
          <h3>Immediate Replacement Policy</h3>
        </div>

        <div className="security-card">
          <h3>Professional Supervision</h3>
        </div>

      </div>

    </div>
  );
};

export default WhyBody;