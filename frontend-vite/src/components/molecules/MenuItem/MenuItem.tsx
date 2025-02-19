import { Icon } from "../../atoms/Icon/Icon";
import { MenuItemProps } from "./types/menu-item.types";
import styles from './MenuItem.module.css'
import { SpanText } from "../../atoms/SpanText/SpanText";

export const MenuItem = ({ icon, label, active, onClick }: MenuItemProps) => {
    return (
      <div 
        className={`${styles.menuItem} ${active ? styles.active : ''}`}
        onClick={onClick}
      >
        <Icon name={icon} />
        <SpanText>{label}</SpanText>
      </div>
    );
  };