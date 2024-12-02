'use client';

import styles from './CustomButton.module.css';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function CustomButton({ onClick, children }: CustomButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}