import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/organism/Sidebar/Sidebar';
import styles from '../components/templates/Dashboard/Dashboard.Template.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 