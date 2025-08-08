import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Carousel styles
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Core components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pages
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

// Category Pages
import Medicine from './Medicine';
import LabTests from './LabTests';
import DoctorConsult from './DoctorConsult';
import Healthcare from './Healthcare';
import HealthBlogs from './HealthBlogs';
import Plus from './Plus';
import Offers from './Offers';
import ValueStore from './ValueStore';
import BookAppointment from './BookAppointment'; //  Import the new page

// Global styles
import './App.css';

function App() {

  // Function to speak text
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar speak={speak} />
        <main className="main-content">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Category Pages */}
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/doctor-consult" element={<DoctorConsult />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/health-blogs" element={<HealthBlogs />} />
            <Route path="/plus" element={<Plus />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/value-store" element={<ValueStore />} />
            <Route path="/book-appointment" element={<BookAppointment />} /> {/* 🆕 New route */}
          </Routes>
        </main>
        <Footer speak={speak} />
      </div>
    </Router>
  );
}

export default App;
