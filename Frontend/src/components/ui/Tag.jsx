import { motion } from 'framer-motion';

const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-heading font-medium';

  const variants = {
    default: 'bg-gold/10 text-gold border border-gold/30',
    outline: 'border border-ivory/30 text-ivory/70',
    solid: 'bg-gold text-black',
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  return (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} rounded-full ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
