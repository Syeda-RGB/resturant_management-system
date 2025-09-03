import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fontsource/poppins"; // Defaults to weight 400 (normal)
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Medium weight
import "@fontsource/poppins/700.css"; // Bold weight
import "@fortawesome/fontawesome-free/css/all.min.css";

import './App.css'
import HeroSection from './components/nav_section';
import Footer from './components/Footer';
import WhoWeAre from './components/WhoWeAre';
import Offers from './components/Offers';
import HowItWorks from './components/HowItWorks';
import BurgerSlider from './components/BurgerSlider';

function App() {
 

  return (
    <div className='Main_App'>
     <HeroSection/>
 
    
     <BurgerSlider/>
     <Offers/>
      <WhoWeAre/>
     
    
     <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default App
