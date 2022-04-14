import { ButtonProps } from '@/types/Button';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="button">{text}</button>
);

export default Button;