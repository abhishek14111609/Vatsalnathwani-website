import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const descriptionAlignment = align === 'center' ? 'mx-auto' : '';

  return (
    <motion.div
      className={`mb-12 ${alignments[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {subtitle && (
        <motion.span
          className="inline-block text-gold font-mono text-sm tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ivory mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className={`text-ivory/60 font-body text-lg max-w-2xl ${descriptionAlignment}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
