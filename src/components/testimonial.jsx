import React from 'react';

const testimonials = [
  {
    name: "Emily tonn",
    role: "IT Manager",
    company: "Prasha Lifestyle",
    feedback: "Selling our unused software licenses was seamless. We received a fair valuation and quick payment. Highly recommend!"
  },
  {
    name: "Raj Patel",
    role: "Marketing Head",
    company: "BrightLand Solutions",
    feedback: "SoftSell made the entire process effortless. The platform is transparent and incredibly user-friendly."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-black"  id="testimonials">
      <h2 className="text-6xl font-semibold text-center mb-12 text-[#5325B0]">
        Customer Testimonials
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">{testimonial.name}</p>
              <p>{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
