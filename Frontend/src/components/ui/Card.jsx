import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  ...props
}) => {
  const baseStyles = 'relative overflow-hidden rounded-2xl p-6';
  
  const glassStyles = glass
    ? 'bg-black/40 backdrop-blur-xl border border-gold/20'
    : 'bg-black-light border border-gold/10';

  const hoverStyles = hover
    ? 'hover:border-gold/40 hover:shadow-card transition-all duration-500'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
