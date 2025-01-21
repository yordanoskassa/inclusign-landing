import React, { useRef, useEffect, useState } from 'react';
import './About.css';

function About() {
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const approachRef = useRef(null);
  const visionRef = useRef(null);

  // A small hook or function to observe multiple targets
  const useFadeInOnScroll = (refs) => {
    useEffect(() => {
      const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the section is visible
      };

      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);

      refs.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }, [refs]);
  };

  // Call our fade-in hook with the refs we want to observe
  useFadeInOnScroll([missionRef, storyRef, approachRef, visionRef]);

  return (
    <section className="about-section container">
      <h2 className="section-title fade-in-section" ref={missionRef}>
        About Inclusign
      </h2>

      {/* Mission Statement */}
      <div className="about-mission fade-in-section" ref={missionRef}>
        <h3>Our Mission</h3>
        <p>
          At Inclusign, we believe that everyone deserves the opportunity to
          communicate and connect—without barriers. We are dedicated to
          developing AI-powered solutions that empower people with disabilities
          and foster a more inclusive world.
        </p>
      </div>

      {/* Company Story */}
      <div className="about-story fade-in-section" ref={storyRef}>
        <h3>Our Story</h3>
        <p>
          Inclusign was founded in 2024 by a team of software engineers, sign
          language interpreters, and accessibility advocates who saw a critical
          need for inclusive technology. Guided by a shared passion for social
          impact, they built a platform to break down communication barriers for
          the deaf and hard-of-hearing communities worldwide. Today, Inclusign
          continues to explore new frontiers in AI to bring cutting-edge
          innovation to people of all abilities.
        </p>
      </div>

      {/* Approach / Values */}
      <div className="about-approach fade-in-section" ref={approachRef}>
        <h3>What We Value</h3>
        <ul>
          <li>
            <strong>Inclusivity:</strong> We strive to build products that
            benefit every individual, regardless of their abilities.
          </li>
          <li>
            <strong>Accessibility First:</strong> Our design process puts user
            accessibility at the forefront, ensuring our solutions are simple,
            intuitive, and effective for everyone.
          </li>
          <li>
            <strong>Innovation:</strong> We harness advanced AI and machine
            learning technologies to deliver real-time sign language
            translations with unparalleled speed and accuracy.
          </li>
          <li>
            <strong>Collaboration:</strong> We partner with leading researchers,
            nonprofits, and community organizations to refine our tech and
            maintain a user-centered approach.
          </li>
        </ul>
      </div>

      {/* Future Vision */}
      <div className="about-vision fade-in-section" ref={visionRef}>
        <h3>Our Vision for Tomorrow</h3>
        <p>
          Inclusign is more than just a product—it’s a movement. As we continue
          to evolve, we envision a future where AI-driven solutions enable
          everyone to participate fully in society. We are committed to
          pioneering new technologies and collaborating with global communities
          to make that vision a reality. Whether you’re an educator, employer,
          or individual, Inclusign is here to help you foster a culture of
          empathy and inclusion.
        </p>
      </div>
    </section>
  );
}

export default About;
