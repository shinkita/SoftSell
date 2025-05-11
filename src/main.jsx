import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import HowItWorks from './components/Howitworks';
import WhyChooseUs from './components/Whychooseus';
import Testimonials from './components/testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header />
      <main className="p-4 text-center">
        <Banner />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
     
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
