import React from 'react';
import bgImage from '../assets/BG-purple.png'
import sideImage from '../assets/whyus.jpg';

const WhyChooseUs = () => {
  return (
    <section 
  className="py-16 px-6 bg-cover bg-center bg-no-repeat dark:bg-gray-900 dark:text-white"
  id="why-us"
  style={{ backgroundImage: `url(${bgImage})` }}
>
   
      <div className="rounded-2xl p-10">
        <div className="max-w-7xl  flex flex-col md:flex-row gap-10 text-white">
          
       
          <div className="md:w-1/2 space-y-6 text-left">
            <h2
              className="text-6xl font-bold"
              style={{
                background: 'linear-gradient(90deg, rgb(112, 39, 211) 0%, rgb(242, 172, 97) 42%, rgb(178, 228, 255) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Choose Us
            </h2>
            <p className='text-left'>
  Join thousands of users who've turned their unused software licenses into instant cash. <br />
  Our platform is trusted, transparent, and user-friendly.Experience a hassle-free way to sell and get paid fast.
            </p>
            <ul className="list-disc list-inside space-y-4">
  <li className="leading-relaxed">Instant & secure payments</li>
  <li className="leading-relaxed">Transparent valuation process</li>
  <li className="leading-relaxed">24/7 customer support</li>
  <li className="leading-relaxed">Trusted by global users</li>
  <li className="leading-relaxed">Zero hidden fees</li>
</ul>

          </div>

       
          <div className="md:w-1/2">
            { <img src={sideImage} alt="Why Choose Us" className="w-full rounded-xl shadow-md" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
