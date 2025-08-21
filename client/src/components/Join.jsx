import React from "react";
import { motion } from "framer-motion";
import happy from "../images/happy_customers.png";

const Join = () => {
  return (
    <div className="h-[80vh] flex items-center gap-10 justify-center bg-[rgb(41,78,114)] text-white w-[100%]mx-auto">
      <div className="ml-20 w-[40%] flex flex-col items-start justify-center text-3xl font-semibold">
        <h1>
          Join hundreds of thousands of happy customers who enjoy their purchase from a{" "}
          <b>Secure</b> zone — a community that chooses smart.
        </h1>
        <p className="text-xl font-medium">
          Be part of a family that values durability and innovation.
          <br />
          At Secure & J, every purchase is a step into trust.
        </p>
      </div>
      <img
        src={happy}
        alt="Happy customers"
        className="object-cover h-[80%] rounded-xl w-[40%]"
      />
    </div>
  );
};

export default Join;
