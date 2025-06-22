import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticHover = ({ children }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 10, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        resetPosition();
      }}
      className="relative inline-block"
    >
      {children}
      {isHovered && (
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-xl pointer-events-none z-10"
        />
      )}
    </div>
  );
};

export default MagneticHover;
