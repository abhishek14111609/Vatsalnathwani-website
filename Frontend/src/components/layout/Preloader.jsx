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
              <motion.div
                className="relative mb-10 flex h-32 w-32 items-center justify-center rounded-full border border-gold/30"
                initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  className="absolute inset-2 rounded-full border border-dashed border-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 font-heading text-5xl font-black tracking-[-0.12em] text-gold">VN</span>
                <span className="absolute -right-2 top-1/2 h-2 w-2 rounded-full bg-gold" />
              </motion.div>

              <div className="flex w-64 items-end justify-between border-b border-gold/30 pb-3">
                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-[.22em] text-white">Vatsal Nathwani</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[.28em] text-white/50">Personal portfolio</p>
                </div>
                <motion.span
                  className="font-mono text-3xl font-bold text-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {String(progress).padStart(2, '0')}
                </motion.span>
              </div>

              <div className="mt-4 h-0.5 w-64 overflow-hidden bg-gold/20">
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
