import React, { useState } from 'react';
import { MenuItem } from '../../molecules/MenuItem/MenuItem';
import styles from './Sidebar.module.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MenuIcon from '@mui/icons-material/Menu';
import ByCoders from "../../../assets/bycorders.svg";
import LogoutButton from '../../atoms/LogoutButton/LogoutButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useAuth } from '../../../context/auth/AuthContext';

type MenyItemsType = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

const menuItems: MenyItemsType[] = [
  { icon: <ReceiptIcon />, label: 'Transactions', path: '/dashboard/transactions' },
  { icon: <UploadFileIcon />, label: 'Upload', path: '/dashboard/upload' },
];

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleToggleSidebar} className={styles.menuToggle}>
        <MenuIcon />
      </button>
      
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Link to="/" style={{ background: "transparent"}}>
            <img 
              onClick={() => {}}
              className={styles.logo}
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
              onClick={() => {
                navigate(item.path);
               
                setIsSidebarOpen(false);
              }}
            /> 
          ))}
          <div className={styles.logoutButton}>
            <LogoutButton />
            </div>
        </nav>
      </div>
    </>
  );
};