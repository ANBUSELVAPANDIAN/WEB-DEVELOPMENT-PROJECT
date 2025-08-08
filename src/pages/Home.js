import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import bannerVideo from "../assets/medico-banner.mp4";

// Category Icons
import medicineIcon from "../assets/medicine.png";
import labTestsIcon from "../assets/lab-tests.png";
import doctorConsultIcon from "../assets/doctor-consult.png";
import healthcareIcon from "../assets/healthcare.png";
import healthBlogsIcon from "../assets/health-blogs.png";
import plusIcon from "../assets/plus.png";
import offersIcon from "../assets/offers.png";
import valueStoreIcon from "../assets/value-store.png";

import "./Home.css";

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const categories = [
    { name: "Medicine", icon: medicineIcon, path: "/medicine" },
    { name: "Lab Tests", icon: labTestsIcon, path: "/lab-tests" },
    { name: "Doctor Consult", icon: doctorConsultIcon, path: "/doctor-consult" },
    { name: "Healthcare", icon: healthcareIcon, path: "/healthcare" },
    { name: "Health Blogs", icon: healthBlogsIcon, path: "/health-blogs" },
    { name: "PLUS", icon: plusIcon, path: "/plus" },
    { name: "Offers", icon: offersIcon, path: "/offers" },
    { name: "Value Store", icon: valueStoreIcon, path: "/value-store" },
  ];

  const handleSpeakHomePage = () => {
    // Read out the hero banner content
    const bannerContent = "Welcome to MEDICO PLUS. One-Stop Destination for Medicine, Labs, Health & More.";
    
    // Read out the categories
    const categoryContent = categories.map(cat => `${cat.name}`).join(', ');
    
    // Read out the features section
    const featureContent = "Extensive Medicine Range, Certified & Trusted Brands, Fast & Reliable Delivery.";

    // Combine all content and speak it
    speak(`${bannerContent} Categories: ${categoryContent}. Features: ${featureContent}`);
  };

  return (
    <div className="home-container">
      {/* 🎥 Video Banner */}
      <section className="video-banner">
        <video autoPlay loop muted className="video-bg">
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <h1>Welcome to MEDICO PLUS +</h1>
          <p>One-Stop Destination for Medicine, Labs, Health & More</p>
        </div>
      </section>

      {/* 🖼️ Image Slider */}
      <section className="slider-container">
        <Slider {...settings}>
          <div><img src={banner1} alt="Banner 1" className="slide-image" /></div>
          <div><img src={banner2} alt="Banner 2" className="slide-image" /></div>
          <div><img src={banner3} alt="Banner 3" className="slide-image" /></div>
        </Slider>
      </section>

      {/* 🔘 Categories as Buttons */}
      <section className="category-section">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-item category-clickable"
            onClick={() => navigate(cat.path)}
          >
            <img src={cat.icon} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </section>

      {/* 💡 Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Extensive Medicine Range</h3>
          <p>Access all essential and prescription medications in one place.</p>
        </div>
        <div className="feature-card">
          <h3>Certified & Trusted Brands</h3>
          <p>We collaborate only with licensed pharma manufacturers & suppliers.</p>
        </div>
        <div className="feature-card">
          <h3>Fast & Reliable Delivery</h3>
          <p>Safe doorstep delivery of all your health essentials, every day.</p>
        </div>
      </section>

      {/* Speak Home Page Button */}
      <button
        onClick={handleSpeakHomePage}
        className="speak-home-btn"
      >
        Speak Home Page Content
      </button>
    </div>
  );
}

export default Home;
