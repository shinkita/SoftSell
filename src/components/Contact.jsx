import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const licenseOptions = ['Select License Type', 'SaaS', 'Enterprise', 'Personal', 'Educational'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.organization.trim()) newErrors.organization = 'Organization name is required';
    if (!form.licenseType || form.licenseType === licenseOptions[0]) newErrors.licenseType = 'Select a license type';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      console.log('Form Submitted:', form);
      alert('Thanks for reaching out!');
      setForm({ fullName: '', email: '', organization: '', licenseType: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-white  dark:bg-black py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-semibold  text-[#5325B0] mb-8">Let’s Connect</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium mb-1 text-left">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-left">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm ">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-left">Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Company or Team Name"
              value={form.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.organization && <p className="text-red-500 text-sm">{errors.organization}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-left">License Type</label>
            <select
              name="licenseType"
              value={form.licenseType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              {licenseOptions.map((type, index) => (
                <option key={index} value={index === 0 ? '' : type}>{type}</option>
              ))}
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-left">Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-[#5325B0] hover:bg-[#6b38cc] text-white font-weight-500 py-2 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
