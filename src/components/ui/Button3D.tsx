'use client';

import React from 'react';

export type ButtonVariant = 'green' | 'orange' | 'red' | 'blue' | 'purple' | 'gray' | 'white';

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  green:
    'bg-[#58CC02] text-white border-b-4 border-[#58A700] hover:bg-[#46A302] active:border-b-0 active:translate-y-1',
  orange:
    'bg-[#FF9600] text-white border-b-4 border-[#CC7900] hover:bg-[#E08500] active:border-b-0 active:translate-y-1',
  red:
    'bg-[#FF4B4B] text-white border-b-4 border-[#D92323] hover:bg-[#EA2B2B] active:border-b-0 active:translate-y-1',
  blue:
    'bg-[#1CB0F6] text-white border-b-4 border-[#1482BA] hover:bg-[#1899D6] active:border-b-0 active:translate-y-1',
  purple:
    'bg-[#CE82FF] text-white border-b-4 border-[#9B4BE6] hover:bg-[#B866FF] active:border-b-0 active:translate-y-1',
  gray:
    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-b-4 border-gray-300 dark:border-gray-700 hover:bg-gray-200 active:border-b-0 active:translate-y-1',
  white:
    'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-b-4 border-gray-200 dark:border-gray-700 hover:bg-gray-50 active:border-b-2 active:translate-y-1',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs font-bold rounded-xl',
  md: 'px-5 py-2.5 text-sm font-black tracking-wide rounded-2xl',
  lg: 'px-8 py-3.5 text-base font-black tracking-wider rounded-2xl',
};

export const Button3D: React.FC<Button3DProps> = ({
  variant = 'green',
  fullWidth = false,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`select-none uppercase transition-all duration-75 disabled:opacity-50 disabled:pointer-events-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
