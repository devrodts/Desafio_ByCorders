
import { useNavigate } from 'react-router-dom';

const useRedirect = (isAuthenticated: boolean) => {
    
  const navigate = useNavigate();
  
  return isAuthenticated ? navigate('/dashboard') : navigate('/auth');
};

export default useRedirect;
