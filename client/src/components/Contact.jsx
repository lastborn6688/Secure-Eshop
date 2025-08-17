
import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[rgb(217,224,231)] py-10 px-4"
    >
      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Contact"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
      {/* Form section */}
      <div className="w-full md:w-1/2 max-w-md bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-[rgb(59,118,174)]">Contact Us</h2>
        <form
          className="w-full flex flex-col gap-4"
          action="https://formsubmit.co/osichukwudi@yahoo.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[rgb(59,118,174)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[rgb(59,118,174)]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[rgb(59,118,174)]"
          />
          <button
            type="submit"
            className="bg-[rgb(59,118,174)] text-white py-2 rounded hover:bg-[rgb(72,117,160)] font-semibold mt-2"
          >
            Submit
          </button>
        </form>
        {/* Socials */}
        <div className="flex gap-6 mt-8 text-2xl text-[rgb(59,118,174)]">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:osichukwudi@yahoo.com.com" target="_blank" rel="noopener noreferrer" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" title="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
