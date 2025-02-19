import { MenuItem } from '../../molecules/MenuItem/MenuItem';
import styles from './Sidebar.module.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';

// import LogoutIcon from '@mui/icons-material/Logout';
import UploadFileIcon from '@mui/icons-material/UploadFile';
  import ReceiptIcon from '@mui/icons-material/Receipt';
  import ByCoders from "../../../assets/bycorders.svg"
  // import { useAuth } from '../../../context/auth/AuthContext';

type MenyItemsType = {
  icon: React.ReactNode;
  label: string;
  path: string;
}
// const { logout } = useAuth();
const menuItems: MenyItemsType[] = [
  { icon: <ReceiptIcon />, label: 'Transactions', path: '/dashboard/transactions' },
  { icon: <UploadFileIcon />, label: 'Upload', path: '/dashboard/upload' },
  // { icon: <LogoutIcon  onClick={() => logout()}/>, label: 'Logout', path: '/logout' },
];

export const Sidebar = () => {
    
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/">
          <img 
            width={150}
            height={50}
            src={ByCoders} 
            alt="ByCoders" 
          />
        </Link>
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