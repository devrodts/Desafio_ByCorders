import styles from './Dashboard.module.css';
import { SpanText } from '../../atoms/SpanText/SpanText';

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <SpanText variant="title">Welcome to Dashboard</SpanText>
    </div>
  );
};