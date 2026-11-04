import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const getInteractiveTarget = (target) =>
      target instanceof Element ? target.closest('a, button') : null;

    const handleMouseOver = (e) => {
      const interactive = getInteractiveTarget(e.target);
      if (!interactive) return;

      // Ignore transitions between children of the same interactive element.
      if (e.relatedTarget instanceof Node && interactive.contains(e.relatedTarget)) {
        return;
      }

      setCursorVariant('hover');
      setIsHovering(true);

      if (interactive.tagName === 'A' || interactive.closest('a')) {
        setHoverText('VIEW');
      } else {
        setHoverText(interactive.textContent?.trim().slice(0, 8) || 'CLICK');
      }
    };

    const handleMouseOut = (e) => {
      const interactive = getInteractiveTarget(e.target);
      if (!interactive) return;

      if (e.relatedTarget instanceof Node && interactive.contains(e.relatedTarget)) {
        return;
      }

      setCursorVariant('default');
      setIsHovering(false);
      setHoverText('');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      opacity: 0.8,
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5,
    },
  };

  // Hide custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-gold pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {isHovering && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-[10px] font-heading font-bold text-gold">
              {hoverText}
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-difference"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;
