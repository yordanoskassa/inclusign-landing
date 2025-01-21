import React from 'react';
import './Logos.css';

// Replace these with your actual image paths or imports
import zoomLogo from '../assets/zoom.png';
import meetLogo from '../assets/google-meet.png';
import teamsLogo from '../assets/microsoft-teams.png';
import webexLogo from '../assets/cisco-webex.png';
import skypeLogo from '../assets/skype.png';
import gotoLogo from '../assets/gotomeeting.png';

function LogosCarousel() {
  // Array of logos
  const logos = [
    { src: zoomLogo, alt: 'Zoom' },
    { src: meetLogo, alt: 'Google Meet' },
    { src: teamsLogo, alt: 'Microsoft Teams' },
    { src: webexLogo, alt: 'Cisco Webex' },
    { src: skypeLogo, alt: 'Skype' },
    { src: gotoLogo, alt: 'GoToMeeting' },
  ];

  // We’ll duplicate the array so the animation can cycle seamlessly
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="logos-carousel">
    <h2>Our Intergrations</h2>

      <div className="logos-slide">
        {repeatedLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogosCarousel;
