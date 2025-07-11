import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const ProgressBar = ({ 
  value, 
  max = 100, 
  className = '',
  color = 'blue',
  showLabel = false,
  label = '',
  animated = true
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  };

  return (
    <div className={clsx('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-500">{value}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        {animated ? (
          <motion.div
            className={clsx('h-2 rounded-full', colorClasses[color])}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        ) : (
          <div
            className={clsx('h-2 rounded-full', colorClasses[color])}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressBar;