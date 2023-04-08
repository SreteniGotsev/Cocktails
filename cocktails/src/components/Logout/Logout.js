import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';


const Login = () =>{
  
    const navigate = useNavigate();
    const {user, logout}=useContext(AuthContext)

    useEffect(()=>{

        authService.logout(user.accessToken)
            .then(()=>{
              logout();
              navigate("/");

            })
            .catch(err=>{
              navigate("/Error");
            })
    },[])



    return 
}

export default Login;