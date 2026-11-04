import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={`font-heading font-bold ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default Counter;
