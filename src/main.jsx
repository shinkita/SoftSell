import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import HowItWorks from './components/Howitworks';
import WhyChooseUs from "./components/Whychooseus"; a

import Testimonials from './components/testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
<div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <main className="p-4 text-center">
        <Banner />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      </div>
     
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
