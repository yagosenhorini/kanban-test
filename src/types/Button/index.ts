import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
  isPrimary?: boolean;
}
