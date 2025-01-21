import React from 'react';
import './ProductDemo.css';
import demoVideo from '../assets/demo-video.mp4'; // Update path as needed

function ProductDemo() {
  return (
    <section className="product-demo-section">
      <h2 className="section-title">See Inclusign in Action</h2>
      <div className="demo-wrapper">
        {/* Container that holds both the background shape and the video */}
        <div className="video-container">
          <div className="video-bg"></div>
          <video
            className="demo-video"
            src={demoVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

export default ProductDemo;
