import React from 'react';
import { FaUpload, FaChartBar, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload className="text-[#5325B0] text-3xl" />,
    title: "Upload License",
    desc: "Provide details of your unused software."
  },
  {
    icon: <FaChartBar className="text-[#5325B0] text-3xl" />,
    title: "Get Valuation",
    desc: "We analyze and estimate your license value."
  },
  {
    icon: <FaMoneyBillWave className="text-[#5325B0] text-3xl" />,
    title: "Get Paid",
    desc: "Receive your payment directly and securely."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 dark:bg-black" id="how-it-works">
        <h2 className="text-6xl font-medium text-center bg-gradient-to-r from-purple-500 via-[#5325B0] to-blue-500 bg-clip-text text-transparent">
  How It Works?
</h2>

      
      
      <p className="text-md mb-10 dark:text-white"> Turn your unused software into cash. Easy valuation, fast payment.</p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center space-y-4 p-6 transition-all duration-300 ease-in-out transform hover:border-2 hover:border-[rgb(254 254 254)] hover:shadow-xl hover:scale-105"
          >
            <div className="flex justify-center text-[#5325B0] dark:text-white">{step.icon}</div>
            <h3 className="text-xl text-[#5325B0] font-weight-400  transition-colors duration-300 px-6 py-4 inline-block">
              {step.title}
            </h3>
            <p className="text-sm dark:text-white">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
