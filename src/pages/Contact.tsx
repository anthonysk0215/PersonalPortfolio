import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:anthonysk0215@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    
    //set as submitted and then open email
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 2000);
  };

  // Confirmation component
  const ConfirmationMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto px-4 pb-20 text-center"
    >
      <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-blue-500 mb-2">Thank You!</h2>
      <p className="text-xl text-gray-600 mb-6">I'll get back to you as soon as possible.</p>
      <p className="text-gray-500">Opening your email client...</p>
    </motion.div>
  );

  if (isSubmitted) {
    return <ConfirmationMessage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl mx-auto px-4 pb-20"
    >
      <h1 className="text-5xl font-bubble mb-8 text-blue-500">
        Get in Touch
      </h1>
      
      <p className="text-gray-600 mb-6">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        {/* Name and Email on one line */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        {/* Subject line */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject line"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        {/* Message body */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-300 text-white font-medium rounded-2xl hover:bg-blue-600 transition-colors flex items-center"
        >
          Send Message
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </motion.div>
  );
}