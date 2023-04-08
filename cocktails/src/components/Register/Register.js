import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () =>{

  const navigate = useNavigate();
    const {login}=useContext(AuthContext)

    const onRegisterHandler = (e)=>{
      e.preventDefault();

      let formData = new FormData(e.currentTarget);

      let email = formData.get("email");
      let password = formData.get("password");
      let repeatPassword = formData.get("repeatPassword");

      if(password !== repeatPassword){
        alert('The passwords should match!')
      }else{
        authService
          .register(email, password)
          .then((authData) => {
            login(authData);
            navigate("/");
          })
          .catch((err) => {
            navigate("/Error");
          });
      }      
    } 

    return (
      <div className="container-register">
        <div className="container">
          <div className="registration form">
            <header>Signup</header>
            <form onSubmit={onRegisterHandler}>
              <input name='email' type="text" placeholder="Enter your email" />
              <input name='password'type="password" placeholder="Create a password" />
              <input name='repeatPassword'type="password" placeholder="Confirm your password" />
              <input type="submit" className="button" value="Signup" />
            </form>
            <div className="signup">
              <span className="signup">
                Already have an account?
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}


 
export default Register;