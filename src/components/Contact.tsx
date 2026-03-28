import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Ready to find your dream property? Contact our expert team today!
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Visit Us</h3>
            <div className="space-y-4 text-lg">
              <p><strong>📍 Office:</strong></p>
              <p className="text-xl font-semibold">609, 6th Floor, SVH-83<br/>Metro Street, Sec-83<br/>Gurugram-122004</p>
              <p><strong>📧 Email:</strong> tariq.khan.guy@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.newdreamproperty.com</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
            <div className="space-y-2 mb-8">
              <p className="flex items-center gap-2"><span className="font-bold">Tariq:</span> +91-9870483003</p>
              <p className="flex items-center gap-2"><span className="font-bold">Baljit:</span> +91-8368179667</p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
              <p className="text-sm font-medium text-yellow-800">
                ✅ RERA Registered | Verified Projects | Best Deals Guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-6 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
          />
          <textarea
            name="message"
            placeholder="Your Requirements (Property type, budget, location...)"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full mt-6 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg resize-vertical"
          />
          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-primary-600 to-purple-700 text-white py-6 px-8 rounded-2xl text-xl font-bold hover:from-primary-700 hover:to-purple-800 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {submitted ? '✅ Sent!' : 'Send Enquiry'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

