import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const topCurtainVariants = {
  initial: { y: 0 },
  exit: {
    y: '-100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const bottomCurtainVariants = {
  initial: { y: 0 },
  exit: {
    y: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 1, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return undefined;

    // Start the curtain exit, then release the app once the wipe has finished.
    const startExit = setTimeout(() => setIsComplete(true), 400);
    const finish = setTimeout(() => onCompleteRef.current?.(), 400 + 800);

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] pointer-events-none"
          initial="initial"
          animate="initial"
          exit="exit"
        >
          {/* Top curtain */}
          <motion.div
            variants={topCurtainVariants}
            className="absolute top-0 left-0 right-0 h-1/2 bg-black"
          >
            <div className="h-full flex flex-col items-center justify-center">
              {/* VXR Monogram SVG */}
              <svg width="200" height="100" viewBox="0 0 200 100" className="mb-8">
                <motion.text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="60"
                  fontWeight="bold"
                  fill="none"
                  stroke="#F5C26B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
                  animate={{ strokeDasharray: '1000', strokeDashoffset: isComplete ? '1000' : '0' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  style={{ fontFamily: 'Clash Display, sans-serif' }}
                >
                  VXR
                </motion.text>
              </svg>

              {/* Progress counter */}
              <motion.div
                className="text-6xl font-heading font-bold text-gold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}
              </motion.div>

              {/* Progress bar */}
              <div className="w-64 h-0.5 bg-gold/20 mt-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom curtain */}
          <motion.div
            variants={bottomCurtainVariants}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
