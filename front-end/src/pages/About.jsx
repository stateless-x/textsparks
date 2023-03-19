import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About TextSparks</h1>
      <p>
        TextSparks is a digital content creation business focused on providing high-quality articles, blog posts, and social media content for small businesses, entrepreneurs, and content marketers. Our mission is to help our clients grow their online presence and engage their target audience with compelling content.
      </p>

      <h2>What We Offer</h2>
      <ul className="services-list">
        <li>
          <strong>Articles and Blog Posts:</strong> Well-researched, informative, and engaging content tailored to your target audience.
        </li>
        <li>
          <strong>Social Media Content:</strong> Creative and share-worthy content that captures your brand's voice and connects with your audience.
        </li>
        <li>
          <strong>Search Engine Optimization (SEO):</strong> Content optimized for search engines to help your website rank higher in search results.
        </li>
        <li>
          <strong>Custom Content Creation:</strong> Unique content solutions designed to meet your specific business needs and goals.
        </li>
      </ul>

      <h2>Why Choose TextSparks</h2>
      <p>
        Our team of experienced writers and content creators are dedicated to producing high-quality content that resonates with your audience and drives results. We take the time to understand your brand, audience, and goals, ensuring that every piece of content we create aligns with your objectives and helps you grow your online presence.
      </p>
    </div>
  );
}

export default About;
