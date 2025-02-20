import Button from "../Button/Button";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from './LogoutButton.module.css';
import { useNavigate } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";

const LogoutButton = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/auth/login');
    }


    return(
        <>
            <Button 
            variant="outline" 
            size="medium" 
            fullWidth 
            className={styles.logoutButton}
            onClick={handleLogout}
            >
                <ExitToApp />
            </Button>   
        </>
    )
}

export default LogoutButton;
