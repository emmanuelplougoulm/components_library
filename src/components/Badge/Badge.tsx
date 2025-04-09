import React from 'react';
import './Badge.css';

type BadgeProps = {
  status: 'neutral' | 'success' | 'error' | 'warning' | 'brand';
  label: string;
  size: 'small' | 'medium' | 'large';
};

const Badge: React.FC<BadgeProps> = ({ status, label, size }) => {
  return <span className={`grid-item badge ${status} ${size}`}>{label}</span>;
};

export default Badge;
