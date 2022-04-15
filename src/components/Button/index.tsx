import React from 'react';

import { ButtonProps } from '@Types/Button';

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="button">{text}</button>
);

export default Button;