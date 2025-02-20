import styles from './Dashboard.module.css';
import { SpanText } from '../../atoms/SpanText/SpanText';


export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <SpanText variant="title">Welcome to Dashboard</SpanText>
      <br />  
      <SpanText variant="subtitle">
        This is the dashboard for the user.
      </SpanText>
    </div>
  );
};