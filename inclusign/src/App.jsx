import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import About from './components/About';
import ProductDemo from './components/ProductDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LogosCarousel from './components/Logos';

function App() {
  return (
    <div>
      <Header />

      <HeroSection />
      
      <LogosCarousel />
      <Features /> 
      <ProductDemo />
      {/* <About /> */}
     
      {/* Insert Pricing Section Here */}
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
