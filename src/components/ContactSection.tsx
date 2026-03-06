'use client';

import { contactInfo } from '@/data/social';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          I'm open to freelance opportunities and collaboration. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-400 text-2xl mr-4">📧</div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white font-semibold hover:text-blue-400 transition duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-400 text-2xl mr-4">📱</div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white font-semibold hover:text-blue-400 transition duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-400 text-2xl mr-4">📍</div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 border border-blue-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Availability
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Currently available for:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Freelance Projects
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Contract Work
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Consulting
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Full-time Roles
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-500 focus:outline-none transition duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-500 focus:outline-none transition duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-500 focus:outline-none transition duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-900 border border-green-700 rounded-lg">
                  <p className="text-green-200 text-sm font-semibold">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
