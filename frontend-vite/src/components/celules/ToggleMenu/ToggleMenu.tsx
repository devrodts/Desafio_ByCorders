import { BubbleIcon } from '../../atoms/BubbleICon/BubbleIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styles from './ToggleMenu.module.css';

export const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={styles.toggleMenu}>
        
        <BubbleIcon icon={<MenuIcon />} onClick={() => setIsOpen(!isOpen)} path="" />
      </div>
    );
  }