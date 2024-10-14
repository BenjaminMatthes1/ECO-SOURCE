// components/HomePage.js
import React, { useEffect, useState, useRef } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; // Import the Link component
import { FaLeaf, FaLock, FaUsers, FaDollarSign } from 'react-icons/fa'; // Import the icons
import Header from './Header'
import Footer from './Footer';

function HomePage() {
  const [counters, setCounters] = useState({
    members: 0,
    co2Saved: 0,
    transactions: 0,
    productsExchanged: 0,
  });

  const counterSectionRef = useRef(null);
  const hasCounted = useRef(false); // Flag to track if the counting has started

  useEffect(() => {
    const handleCounting = () => {
      const duration = 4000; // Duration of the animation in ms

      // Function to increment the counter values
      const incrementCounters = (start, end, key) => {
        let current = start;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const timer = setInterval(() => {
          current += 1;
          setCounters((prevState) => ({ ...prevState, [key]: current }));
          if (current >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      };

      // Start the counters to their respective values
      incrementCounters(0, 50, 'members');
      incrementCounters(0, 5, 'co2Saved');
      incrementCounters(0, 125, 'transactions');
      incrementCounters(0, 500, 'productsExchanged');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted.current) {
          handleCounting();
          hasCounted.current = true; // Mark as counted to prevent re-triggering
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  

  return (
    <div>
      <Header />
      <main className="homepage">
        <section className="intro-section">
          <h1 className="main-heading">EMPOVER, CONNECT, <br></br>SUSTAIN.</h1>
          <p className="sub-heading">
            Connect with suppliers and buyers of eco-friendly materials to ensure a sustainable future.
          </p>

          <div className="auth-buttons">
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
            <Link to="/login" className="login-link">
              Member Login
            </Link>
          </div>

          <p className="disclaimer">*Cancel or pause for free at any time you want*</p>
        </section>

        {/* Feature blurbs */}
        <section className="feature-blurbs">
          <div className="blurb">
            <FaLeaf className="blurb-icon" />
            <div className="blurb-text">
              {/*<h3>Sustainable Materials</h3>*/}
              <p>Access a wide range of eco-friendly supplies from trusted sellers.</p>
            </div>
          </div>
          <div className="blurb">
            <FaLock className="blurb-icon" />
            <div className="blurb-text">
              {/*<h3>Secure Transactions</h3>*/}
              <p>Explore potential secure payment portals for seamless transactions.</p>
            </div>
          </div>
          <div className="blurb">
            <FaUsers className="blurb-icon" />
            <div className="blurb-text">
              {/*<h3>Buyer-Supplier Network</h3>*/}
              <p>Connect with industry-leading suppliers and buyers.</p>
            </div>
          </div>
          <div className="blurb">
            <FaDollarSign className="blurb-icon" />
            <div className="blurb-text">
              {/*<h3>Cost Transparency</h3>*/}
              <p>Set preferences for cost and quantity with full transparency.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Counter Section */}
      <section className="counter-section">
        <h2>Our Impact</h2>
        <div ref = {counterSectionRef} className="counter-metrics">
          <div>
            <h3>{counters.members}+</h3>
            <p>Members</p>
          </div>
          <div>
            <h3>{counters.co2Saved} Tons</h3>
            <p>CO2 Saved</p>
          </div>
          <div>
            <h3>{counters.transactions}</h3>
            <p>Transactions</p>
          </div>
          <div>
            <h3>{counters.productsExchanged}</h3>
            <p>Products Exchanged</p>
          </div>
        </div>
      </section>

      {/* New Section: The Future of Eco-Friendly Resources */}
      <section className="eco-future-section">
        <div className="eco-content">
          <h2>Eco-Friendly Resources: The Way of the Future</h2>
          <p>As we move forward, it's becoming increasingly clear that sustainable, eco-friendly resources are the key to a greener planet. Our platform connects buyers with suppliers who prioritize sustainability.</p>
          <Link to="/blog" className="blog-link">Learn more on our blog →</Link>
        </div>
        <div className="eco-video-container">
          <video className="eco-video" src="/Main_Video.mov" autoPlay loop muted></video>
        </div>
      </section>

          {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3>What People Are Saying</h3>
        <div className="testimonial-columns">
        {/* Supplier Testimonials */}
          <div className="testimonial-column supplier">
            <div className="testimonial-overlay">
              <p>"This platform has revolutionized the way we source sustainable materials!"</p>
              <p>- Supplier</p>
              <p>"We've connected with many like-minded businesses."</p>
              <p>- Supplier</p>
              <Link to="/signup" className="signup-link">Join as a Supplier</Link>
            </div>
          </div>

        {/* Buyer Testimonials */}
        <div className="testimonial-column buyer">
          <div className="testimonial-overlay">
            <p>"An invaluable tool for connecting with eco-conscious suppliers."</p>
            <p>- Buyer</p>
            <p>"It has simplified sourcing sustainable materials."</p>
            <p>- Buyer</p>
            <Link to="/signup" className="signup-link">Join as a Buyer</Link>
          </div>
        </div>

        {/* Both (Supplier & Buyer) Testimonials */}
        <div className="testimonial-column both">
          <div className="testimonial-overlay">
            <p>"I'm both a supplier and a buyer, and this platform has made it seamless."</p>
            <p>- Supplier & Buyer</p>
            <p>"The network has been a game changer for my business."</p>
            <p>- Supplier & Buyer</p>
            <Link to="/signup" className="signup-link">Join as Both</Link>
          </div>
        </div>
      </div>
    </section>
    <Footer /> 
    </div>
    
  );
}

export default HomePage;
