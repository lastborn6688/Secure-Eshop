import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpg";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => (
  <footer className="bg-[rgb(3,16,20)] text-white py-12 px-6 border-t border-gray-200">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
      
      {/* Quick Links */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="flex flex-col items-center md:items-start gap-3"
      >
        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
        <Link to="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
        <Link to="/" className="hover:text-blue-600 transition">
          Back to Top
        </Link>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="text-center md:text-left"
      >
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="flex items-center justify-center md:justify-start gap-2 mb-3">
          <FaPhoneAlt className="hover:text-blue-600" /> 
          <span className="font-medium">Tel:</span> +234 803 123 4567
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2 mb-3">
          <FaWhatsapp className="hover:text-green-500" /> 
          <span className="font-medium">WhatsApp:</span> +234 803 123 4567
        </p>
        <a
          href="mailto:Ugochukwudanielmatthew@gmail.com?subject=Inquiry%20from%20Secure%20%26%20J%20Website"
          aria-label="Email"
          className="flex items-center justify-center md:justify-start gap-2 mb-3 hover:text-blue-600 transition"
        >
          <FaEnvelope className="hover:text-blue-500" />
          <span className="font-medium">Email:</span> Ugochukwudanielmatthew@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/2348100000000"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={22} className="hover:text-green-500" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/your_instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={22} className="hover:text-pink-500" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.tiktok.com/@your_tiktok"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok size={22} className="hover:text-gray-100" />
          </motion.a>
        </div>
      </motion.div>

      {/* Logo & Address */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="flex flex-col items-center md:items-end text-center md:text-right"
      >
        <img src={logo} alt="Company Logo" className="h-16 mb-4" />
        <h2 className="text-xl font-bold mb-2">Our Address</h2>
        <p className="text-sm leading-relaxed max-w-xs">
          No 4B, Otigba Street, Computer Village, Ikeja, Lagos, Nigeria.
        </p>
      </motion.div>
    </div>

    {/* Bottom copyright */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-10 text-center text-sm text-gray-500"
    >
      &copy; {new Date().getFullYear()} Secure & J. All rights reserved.
    </motion.div>
  </footer>
);

export default Footer;
