import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../context/auth-context'
import { useNavigate } from "react-router";
import "./Authentication.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  
  
  const clickHandler = async (e) => {
    e.preventDefault();  
    try {
        await login(email, password);
        navigate('/');
    } catch (err) {
        setError(err.message);
    }
  };

  return (
    <div className="wrap">
      <form className="wrap form-height m-auto">
        <div className="heading1 mt-3">SIGN IN</div>
        {error && <div className="mb-2 mt-5 error-alert">{error}</div>}
        <label className="mt-5" htmlFor="email">
          Email Address: 
        </label>
        <input
          className="mt-1 p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label className="mt-1" htmlFor="password">
          Password:
        </label>
        <input
          className="mt-1 p-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </form>
      <button onClick={clickHandler} className="btn btn btn-primary m-auto mt-2">
        Sign In
      </button>
      <span className="wrap mt-2">
        New User?
        <Link to="/signup" className="ml-1 bolder grey-text">
          Register here
        </Link>
      </span>
    </div>
  );
};

export default LoginScreen;
