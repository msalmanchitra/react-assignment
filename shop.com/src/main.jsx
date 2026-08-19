import React from 'react';
import ReactDOM from 'react-dom/client';
import AnnouncementBar from './components/AnnouncementBar'; // Components folder se import
import Navbar from './components/Navbar';
import './index.css';
import HeroSection from './components/HeroSection';
                                          
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnnouncementBar />
    <Navbar />
    <HeroSection />
  </React.StrictMode>
);