import React from "react";
import { motion } from "framer-motion";
import shop from "../images/shop.png";

const Associates = () => {
  return (
    <div className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-10 justify-center bg-[rgb(3,16,20)] text-white w-full px-6 py-10">
      
      {/* Image with motion */}
      <motion.img
        src={shop}
        alt="Shop Accessories"
        className="object-cover rounded-xl w-full lg:w-[50rem] max-h-[500px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text with motion */}
      <motion.div
        className="w-full lg:w-2/5 flex flex-col text-white items-start justify-center text-2xl lg:text-3xl font-semibold"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <p className="mb-4 leading-relaxed">
          Your complete destination for high-quality phone accessories <br />
          Durable chargers, sleek cases, reliable cables, crystal-clear sound
          systems, power banks/station, and solar devices.
        </p>
      </motion.div>
    </div>
  );
};

export default Associates;
