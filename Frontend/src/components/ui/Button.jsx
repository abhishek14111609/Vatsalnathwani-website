import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-gradient-gold text-black hover:shadow-gold hover:scale-105',
    secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
    outline: 'border border-ivory/30 text-ivory hover:border-gold hover:text-gold',
    ghost: 'text-ivory hover:text-gold hover:bg-gold/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  const motionProps = {
    onClick: disabled ? undefined : onClick,
    className: classes,
    whileHover: disabled ? undefined : { scale: 1.05 },
    whileTap: disabled ? undefined : { scale: 0.95 },
    ...props,
  };

  // Internal routes -> React Router <Link> so navigation stays client-side.
  const isInternalLink =
    typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');

  if (isInternalLink) {
    if (disabled) {
      return (
        <motion.span className={classes} aria-disabled="true" {...props}>
          {children}
        </motion.span>
      );
    }

    return (
      <MotionLink to={href} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  );
};

export const MagneticButton = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
