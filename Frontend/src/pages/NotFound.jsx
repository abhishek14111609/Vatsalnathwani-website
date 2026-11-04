import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          className="text-hero font-heading font-bold text-transparent"
          style={{ WebkitTextStroke: '2px rgba(245, 194, 107, 0.5)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-ivory/60 font-body text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This page doesn&apos;t exist — but the story continues elsewhere.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <Button variant="primary" size="lg" href="/">
            Back Home
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
