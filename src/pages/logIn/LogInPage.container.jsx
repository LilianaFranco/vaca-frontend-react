import { useEffect, useState } from "react";
import { login } from "src/services/authServices/loginService.js";
import LogInPage from "./LogInPage";
import { useNavigate } from "react-router-dom";

const LogInPageContainer = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
  };

  const handleAuthUser = async (user) => {
    const data = {
      email: user.email.trim(),
      password: user.password,
    };

    try {
      const res = await login(data);
      sessionStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("storage")); //para hacerle un triger al storage y poder ver el navbar. El hook se ejecuta antes de nuestra protección.
      navigate("/groups", { replace: true });
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 409) {
        setErrorMessage("Algoo.");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.email.length === 0) {
      setErrorMessage("Please enter your email.");
      return;
    } else if (user.password.length === 0) {
      setErrorMessage("Please enter your password.");
      return;
    }

    try {
      await handleAuthUser(user);
      setErrorMessage("");
    } catch (err) {
      console.log("Error during login:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <LogInPage
      user={user}
      errorMessage={errorMessage}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LogInPageContainer;
