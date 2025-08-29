import React from "react";
import { motion } from "framer-motion";

import blenco from "../images/blenco.jpg";
import ebeano from "../images/ebeano.jpg";
import superstar from "../images/superstar.jpg";
import deprince from "../images/deprince.jpg";
import wisebuyers from "../images/wisebuyers.jpg";
import gabbs from "../images/gabbs.jpg";

const bavinProduct = [
  { name: "Blenco", src: blenco },
  { name: "Prince Ebeano", src: ebeano },
  { name: "Superstar", src: superstar },
  { name: "De Prince", src: deprince },
  { name: "Wise Buyers", src: wisebuyers },
  { name: "Gabbs", src: gabbs },
];

const Client = () => {
  return (
    <section className="bg-gradient-to-b from-[rgb(72,117,160)] to-gray-100 min-h-screen flex flex-col justify-center items-center px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-14 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Trusted by Nigeria’s Leading Supermarkets
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Our products are proudly stocked and trusted nationwide by reputable
          supermarkets and distributors who prioritize quality and reliability.
        </p>
      </motion.div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {bavinProduct.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={product.src}
              alt={product.name}
              className="w-28 h-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Client;
