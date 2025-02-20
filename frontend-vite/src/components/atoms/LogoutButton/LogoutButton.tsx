import Button from "../Button/Button";

import styles from './LogoutButton.module.css';
import { useNavigate } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import { useAuth } from "../../../context/auth/AuthContext";

const LogoutButton = () => {

    const {logout} = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        e.preventDefault()
        
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
