import { MenuItem } from '../../molecules/MenuItem/MenuItem';
import styles from './Sidebar.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { SpanText } from '../../atoms/SpanText/SpanText';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

type MenyItemsType = {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const menuItems: MenyItemsType[] = [
  { icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard' },
  { icon: <SettingsIcon />, label: 'Settings', path: '/dashboard/settings' },
  { icon: <UploadFileIcon />, label: 'Upload', path: '/dashboard/upload' },
  { icon: <LogoutIcon />, label: 'Logout', path: '/logout' },
];

export const Sidebar = () => {
    
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <SpanText variant="title">Your Logo</SpanText>
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </nav>
    </div>
  );
};