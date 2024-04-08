import { useNavigate } from "react-router-dom";
import NavBar from "../reusableComponents/NavBar/NavBar";
import "./forms.scss";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../utils/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const { loginStatus, theToken } = useContext(LoginContext);
  const [isLoggedIn, setIsLoggedIn] = loginStatus;
  const [token, setToken] = theToken;

  return (
    <>
      <NavBar />
      <div className="login-container">
        <form
          className="login"
          onSubmit={(e) => {
            e.preventDefault();
            // form data logic goes here
            const formData = new FormData(e.target);
            const data = {
              username: formData.get("username"),
              password: formData.get("password"),
            };

            // api fetching logic goes here.
            const baseUrl = "https://raghu-clubs.onrender.com";
            axios.post(baseUrl + "/admin/login", data).then((res) => {
              setToken(res.data.token);
              setIsLoggedIn(true);
            });
          }}
        >
          <p>Welcome Back Admin!</p>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
          />

          <input
            type="password"
            name="password"
            id="pswd"
            placeholder="password"
            required
          />

          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
