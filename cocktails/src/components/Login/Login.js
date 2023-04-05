import './Login.css'

const Login = () =>{
    return (
      <div className="container-register">
        <div className="container">
          <div className="form">
            <header>Login</header>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot password?</a>
              <input type="button" className="button" value="Login" />
            </form>
            <div className="signup">
              <span className="signup">
                Don't have an account?
                <label for="check">Signup</label>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}


 
export default Login;