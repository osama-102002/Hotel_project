import React from 'react';
import './aboutus.css'; 

// Main Section Component
const AboutUsSection = () => (
  <section className="main-section">
    <div className="content">
      <h1>ABOUT US</h1>
      <a href="#" className="mainbtn">Home // About Us</a>
    </div>
  </section>
);

// About Us Section Component
const AboutUsSection = () => (
  <section className="about-us-section">
    <div className="image-grid">
      <img src="assets/img/blog-1.jpg" alt="Travel Image 1" />
      <img src="assets/img/blog-1.jpg" alt="Travel Image 2" />
      <img src="assets/img/blog-1.jpg" alt="Travel Image 3" />
    </div>
    <div className="text-content">
      <span className="section-subtitle">About Us</span>
      <h2>Sollicitudin Vestibulum Vulputate Ipsum.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      <div className="stats">
        <div className="stat-item">
          <h3>25 +</h3>
          <p>Our Explorers</p>
        </div>
        <div className="stat-item">
          <h3>300 +</h3>
          <p>Destinations</p>
        </div>
        <div className="stat-item">
          <h3>25 +</h3>
          <p>Years Experience</p>
        </div>
      </div>
      <a href="#" className="discover-more-btn">Discover More</a>
    </div>
  </section>
);

// Booking Section Component
const BookingSection = () => (
  <section className="booking">
    <div className="main"></div>
    <div className="booking-content">
      <div className="text-content">
        <h1>Ready to travel with real adventure and enjoy natural</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <a href="#" className="mainbtn">Start Booking</a>
      </div>
      <div className="play-button">
        <a href="#"><span>&#9658;</span></a>
      </div>
    </div>
  </section>
);

// Main App Component
const App = () => (
  <div>
    <MainSection />
    <AboutUsSection />
    <BookingSection />
  </div>
);

export default App;