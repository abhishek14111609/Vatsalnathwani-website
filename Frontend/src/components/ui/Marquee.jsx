import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

const Marquee = ({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) => {
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  // Measure a single copy of the content so the duplicated copy can loop seamlessly.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return undefined;

    const measure = () => setContentWidth(el.scrollWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || !contentWidth) return;

    const step = (speed * delta) / 1000;
    const move = direction === 'left' ? -step : step;
    const next = x.get() + move;

    // Keep the offset inside [-contentWidth, 0) so the loop never jumps.
    const wrapped =
      ((next % contentWidth) + contentWidth) % contentWidth - contentWidth;

    x.set(wrapped);
  });

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div style={{ x }} className="inline-flex">
        <div ref={contentRef} className="inline-flex shrink-0">
          {children}
        </div>
        <div className="inline-flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
