import { SpanTextProps } from "./types/span-text.types";
import styles from './SpanText.module.css'

export const SpanText = ({ children, variant = 'body', className }: SpanTextProps) => {
    return (
      <span className={`${styles.text} ${styles[variant]} ${className}`}>
        {children}
      </span>
    );
  };