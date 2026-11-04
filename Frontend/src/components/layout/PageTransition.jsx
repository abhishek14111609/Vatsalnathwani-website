import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, location }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
