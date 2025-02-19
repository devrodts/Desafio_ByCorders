import { Sidebar } from '../../organism/Sidebar/Sidebar';
import styles from './Dashboard.Template.module.css';
import { DashboardTemplateProps } from './types/dashboard.types';

export const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};