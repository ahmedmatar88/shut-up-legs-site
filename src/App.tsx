import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Logistics from './components/Logistics';
import Donate from './components/Donate';
import About from './components/About';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import CookiePolicy from './components/legal/CookiePolicy';
import TermsOfUse from './components/legal/TermsOfUse';
import MobileNavbar from './components/MobileNavbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/on-the-day" element={<Logistics />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default App;