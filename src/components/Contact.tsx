import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

const Contact = () => {
  const [isQAOpen, setIsQAOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="relative backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 p-8 rounded-xl shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl" />
            <div className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-600/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-150"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>

        {/* Floating Q&A Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={() => setIsQAOpen(!isQAOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
          >
            {isQAOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </button>
        </motion.div>

        {/* Q&A Chat Window */}
        {isQAOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 w-80 backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl z-50"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {['What services do you offer?', 'What are your rates?', 'How can we collaborate?'].map((question) => (
                  <button
                    key={question}
                    className="w-full text-left p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;