import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to TextSparks</h1>
      <p>
        At TextSparks, we create high-quality digital content to help businesses and individuals grow their online presence and engage their target audience. Our team of experienced writers and content creators specialize in crafting articles, blog posts, and social media content that resonates with your audience and drives results.
      </p>

      <h2>Our Services</h2>
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
        We understand the importance of creating content that not only informs but also engages and inspires. Our team takes the time to understand your brand, audience, and goals, ensuring that every piece of content we create aligns with your objectives and helps you grow your online presence.
      </p>

      <h2>Contact Us</h2>
      <p>
        Ready to take your content strategy to the next level? <Link to="/contact"> Get in touch</Link> with our team today to discuss your needs and learn how TextSparks can help your business thrive.
      </p>
    </div>
  );
}

export default Home;
