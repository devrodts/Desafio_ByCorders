import { BubbleIconProps } from "./interfaces/bubble-icon.interface"
import { Link } from "react-router-dom"
import styles from "./BubbleIcon.module.css"

export const BubbleIcon = ({ icon, label, path, onClick }: BubbleIconProps) => {
    return (
       <Link to={path ?? ""} onClick={onClick} className={styles.icon}>
        {icon}
        {label}
       </Link>
    )
}   
