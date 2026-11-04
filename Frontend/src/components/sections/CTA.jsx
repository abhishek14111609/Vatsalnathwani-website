import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ivory mb-6">
            Ready to Build Something
            <span className="text-gold"> Iconic?</span>
          </h2>
          
          <p className="text-xl text-ivory/70 font-body mb-12 max-w-2xl mx-auto">
            Let's collaborate and create experiences that leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href="/contact">
              Get In Touch
            </Button>
            <Button variant="secondary" size="lg" href="/ventures">
              Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
