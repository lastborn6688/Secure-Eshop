import React from "react";
import { motion } from "framer-motion";
import happy from "../images/happy_customers.png";

const Join = () => {
  return (
    <div className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-10 justify-center bg-gradient-to-b from-[rgb(3,16,20)] to-[rgb(41,78,114)] text-white w-full px-6 py-10">
      
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-2/5 flex flex-col items-start justify-center text-2xl lg:text-3xl font-semibold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>
          Join hundreds of thousands of happy customers who enjoy their purchase from a{" "}
          <b>Secure</b> zone — a community that chooses smart.
        </h1>
        <p className="text-lg lg:text-xl font-medium mt-4">
          Be part of a family that values durability and innovation.
          <br />
          At Secure & J, every purchase is a step into trust.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.img
        src={happy}
        alt="Happy customers"
        className="object-cover rounded-xl w-full lg:w-2/5 max-h-[400px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
};

export default Join;
