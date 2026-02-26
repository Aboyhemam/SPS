import React from "react";
import "../../staticfiles/career.css";

const CareerBody = () => {
  return (
    <div className="careers-page">

      {/* Header */}
      <div className="careers-header">
        <h1>💼 CAREERS</h1>
        <p>Join Our Team</p>
      </div>

      {/* Hiring Section */}
      <div className="careers-section">
        <h2>We Are Hiring</h2>

        <div className="careers-container">
          <div className="career-card"><h3>Security Guards</h3></div>
          <div className="career-card"><h3>Security Officers</h3></div>
          <div className="career-card"><h3>Housekeeping Staff</h3></div>
          <div className="career-card"><h3>Supervisors</h3></div>
          <div className="career-card"><h3>Support Staff</h3></div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="careers-section benefits-section">
        <h2>Benefits</h2>

        <div className="careers-container">
          <div className="career-card benefit"><h3>Timely Salary</h3></div>
          <div className="career-card benefit"><h3>Uniform Provided</h3></div>
          <div className="career-card benefit"><h3>Safe Work Environment</h3></div>
          <div className="career-card benefit"><h3>Career Growth</h3></div>
        </div>
      </div>

    </div>
  );
};

export default CareerBody;