import React, { useState, useEffect } from 'react';
import './Features.css';
import realTimeImage from '../assets/real-time.jpg';
import accessibilityImage from '../assets/accessibility.jpg';
import aiImage from '../assets/ai.jpg';

function Features() {
  const features = [
    {
      image: realTimeImage,
      title: 'Real Time Translation',
      description: 'Our tool instantly converts audio from meetings and events in to American sign language.',
    },
    {
      image: accessibilityImage,
      title: 'We Are Here For You',
      description: 'Bridging communication gaps for the deaf and hard-of-hearing.',
    },
    {
      image: aiImage,
      title: 'The Right Use of AI',
      description: 'We utlize the power of AI to accomodate needs the deaf community.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature-slide ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
        >
          {/* Left side: Text / Title / Description */}
          <div className="feature-text-container">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>

          {/* Right side: Background Image */}
          <div
            className="feature-image"
            style={{ backgroundImage: `url(${feature.image})` }}
          />
        </div>
      ))}
    </section>
  );
}

export default Features;
