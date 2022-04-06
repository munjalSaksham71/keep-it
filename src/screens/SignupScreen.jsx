import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router";
import "./Authentication.css";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const clickHandler = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Password Didnt Match. Please Try Again");
    }
  };

  return (
    <div className="wrap">
      <form className="wrap form-height m-auto">
        <div className="heading1 mt-3">SIGN UP</div>
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
        <label className="mt-1" htmlFor="password">
          Re-enter Password:
        </label>
        <input
          className="mt-1 p-1"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          placeholder="Enter your password again"
        />
      </form>
      <button
        onClick={clickHandler}
        className="btn btn btn-primary m-auto mt-2"
      >
        Register Here
      </button>
      <span className="mt-2">
        Already a User?
        <Link to="/login" className="ml-1 bolder grey-text">
          Login here
        </Link>
      </span>
    </div>
  );
};

export default SignupScreen;
