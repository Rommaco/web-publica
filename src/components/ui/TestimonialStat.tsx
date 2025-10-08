'use client';

import React from 'react';
import Counter from './Counter';

interface TestimonialStatProps {
  value: string;
  label: string;
  color: string;
  delay?: number;
}

const TestimonialStat: React.FC<TestimonialStatProps> = ({ 
  value, 
  label, 
  color, 
  delay = 0 
}) => {
  // Extract number and suffix from value string
  const parseValue = (val: string) => {
    const match = val.match(/(\+?)(\d+)([%Lh]*)/);
    if (match) {
      const prefix = match[1] || '';
      const number = parseInt(match[2]);
      const suffix = match[3] || '';
      return { prefix, number, suffix };
    }
    return { prefix: '', number: 0, suffix: val };
  };

  const { prefix, number, suffix } = parseValue(value);
  
  const colorClasses = {
    green: 'text-green-600 border-green-200',
    blue: 'text-blue-600 border-blue-200',
    purple: 'text-purple-600 border-purple-200'
  };

  return (
    <div className={`bg-white rounded-lg p-3 border ${colorClasses[color as keyof typeof colorClasses] || colorClasses.green}`}>
      {number > 0 ? (
        <Counter 
          end={number} 
          prefix={prefix}
          suffix={suffix}
          className={`text-xl font-bold ${colorClasses[color as keyof typeof colorClasses] || colorClasses.green}`}
          startDelay={delay}
        />
      ) : (
        <div className={`text-xl font-bold ${colorClasses[color as keyof typeof colorClasses] || colorClasses.green}`}>
          {value}
        </div>
      )}
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
};

export default TestimonialStat;
