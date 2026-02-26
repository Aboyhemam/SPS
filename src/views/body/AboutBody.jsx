import React from 'react'
import '../../staticfiles/about.css'
const AboutBody = () => {
  return (
    <div className="about">
        <div className="descript">
            <div className="header-about">
                <h2>Seven Peaks Solutions is a professionally managed staffing and housekeeping service provider committed to delivering dependable manpower solutions.</h2>
            </div>
            <div className="sub-header">
                <h3>Founded with a vision to provide organized and trained workforce solutions, we specialize in supplying housekeeping and support staff to corporate offices, residential complexes, hospitals, retail outlets, and industrial units</h3>
            </div>
        </div>
        <div className="service">
            <div className="service-head">
                <h3>We focus on</h3>
            </div>
            <div className="service-body">
                <div className="body-box">
                    <h4>Quality Service Delivery</h4>
                </div>
                <div className="body-box">
                    <h4>Timely Staff Deployment</h4>
                </div>
                <div className="body-box">
                    <h4>Background Verified Employees</h4>
                </div>
                <div className="body-box">
                    <h4>Professional Suprvision</h4>
                </div>
                <div className="body-box">
                    <h4>Longterm Client Relationship</h4>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default AboutBody