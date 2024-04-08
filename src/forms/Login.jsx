import { useNavigate } from "react-router-dom";
import NavBar from "../reusableComponents/NavBar/NavBar";
import "./forms.scss";
const Login = () => {
  const navigate = useNavigate();
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
