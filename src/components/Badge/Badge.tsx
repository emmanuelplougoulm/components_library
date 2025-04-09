import React from 'react';
import './Badge.css';

type BadgeProps = {
  color: 'neutral' | 'success' | 'error' | 'warning' | 'brand';
  label: string;
  size: 'sm' | 'md' | 'lg';
};

const Badge: React.FC<BadgeProps> = ({
  color = 'neutral',
  label = 'label',
  size = 'medium'
}) => {
  return (
    <span
      role="status"
      aria-label={label}
      className={`badge badge_color_${color} badge_size_${size}`}
    >
      {label}
    </span>
  );
};

export default Badge;
