import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import visit_0 from "../images/visit_0.jpg";
import visit_1 from "../images/visit_1.jpg";
import visit_2 from "../images/visit_2.jpg";
import visit_3 from "../images/visit_3.jpg";
import visit_4 from "../images/visit_4.jpg";

const Vists = () => {
  const visitImages = [visit_0, visit_1, visit_2, visit_3, visit_4];
  const controls = useAnimation();

  const startScroll = () => {
    controls.start({
      x: ["0%", "-50%"], // shift only half, because we duplicated images
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startScroll();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white text-[rgb(72,117,160)] py-10">
      {/* Text section */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-xl lg:text-2xl font-semibold mb-2">
          When you buy from us, you are sure to be buying the original —
          not a copy.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Beyond partnerships, we verified our suppliers to
          guarantee authenticity, trust, and a reputable market presence.
        </p>
      </div>

      {/* Infinite Scroll Section */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          onDragStart={() => controls.stop()}
          onDragEnd={startScroll}
          onHoverStart={() => controls.stop()}
          onHoverEnd={startScroll}
        >
          {/* Images duplicated back-to-back for seamless loop */}
          {[...visitImages, ...visitImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`visit-${index}`}
              className="h-56 w-auto rounded-xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Vists;
