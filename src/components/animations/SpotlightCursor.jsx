import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const SpotlightCursor = ({color, size, blur, opacity}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-50"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        top: 0,
        left: 0,
        opacity,
      }}
    />
  );
};