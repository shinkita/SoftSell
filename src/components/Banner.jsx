import React from 'react';
import bannerImage from '../assets/bg.jpg';
import rightImage from '../assets/rightSide.png';

const Banner = () => {
  return (
    <section
    className="relative w-full bg-cover bg-center py-8 px-6 rounded-2xl overflow-hidden bg-white text-gray-800 dark:text-gray-200 dark:before:content-[''] dark:before:absolute dark:before:inset-0 dark:before:bg-gray-900 dark:before:opacity-70"
    style={{ backgroundImage: `url(${bannerImage})` }}
  >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-left text-white px-4">
        
  
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span>SELL </span>
            <span className="font-light">YOUR UNUSED SOFTWARE LICENSES</span>
          </h1>
          <p className="text-lg md:text-xl">
            Turn your unused software into cash. Easy valuation, fast payment.
          </p>
          <a
            href="#contact"
            className="inline-block text-white px-6 py-3 rounded-[25px] border border-white hover:bg-white hover:text-[#5325B0] transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
        
     
        <div className="mt-1 md:mt-0 md:ml-8">

          { <img src={rightImage} alt="Software Illustration" className="w-full max-w-md rounded-2xl" /> }
        </div>
      </div>
    </section>
  );
};

export default Banner;
