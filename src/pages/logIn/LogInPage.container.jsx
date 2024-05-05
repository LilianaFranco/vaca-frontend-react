import { useEffect, useState } from "react";
import { login } from "src/services/authServices/loginService.js";
import LogInPage from "./LogInPage";

const LogInPageContainer = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [sessionToken, setSessionToken] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Para poder ver mi token
    console.log(sessionToken);
  }, [sessionToken]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
  };

  const handleAuthUser = (user) => {
    const data = {
      email: user.email.trim(),
      password: user.password,
    };
    const authUser = login(data);
    authUser
      .then((res) => {
        setSessionToken(res.data.token);
        console.log(sessionToken);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setErrorMessage("Algoo.");
        }
      });
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
