import React from "react";
import "../../staticfiles/clients.css";

const ClientBody = () => {
  return (
    <div className="clients-page">

      <div className="clients-header">
        <h1>🤝 CLIENTS</h1>
        <p>
          We focus on long-term partnerships built on trust and service quality.
        </p>
      </div>

      <div className="clients-container">

        <div className="client-card">
          <h3>Corporate Offices</h3>
        </div>

        <div className="client-card">
          <h3>Residential Societies</h3>
        </div>

        <div className="client-card">
          <h3>Industrial Units</h3>
        </div>

        <div className="client-card">
          <h3>Retail Stores</h3>
        </div>

        <div className="client-card">
          <h3>Healthcare Facilities</h3>
        </div>

        <div className="client-card">
          <h3>Warehouses</h3>
        </div>

      </div>

    </div>
  );
};

export default ClientBody;