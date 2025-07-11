import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const GlowCard = ({ 
  children, 
  className = '',
  glowColor = 'blue',
  hover = true,
  ...props 
}) => {
  const glowColors = {
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40'
  };

  return (
    <motion.div
      className={clsx(
        'relative bg-white rounded-xl border border-gray-200 shadow-lg transition-all duration-300',
        hover && `hover:shadow-2xl ${glowColors[glowColor]}`,
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;