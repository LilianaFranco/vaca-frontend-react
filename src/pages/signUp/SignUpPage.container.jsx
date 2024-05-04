import { useState } from "react";
import SignUpPage from "./SignUpPage";
import { create } from "src/services/userServices/UserService";

const SignUpPageContainer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    createdAt: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
  };
  console.log("set", user);

  const handleCreateUser = (user) => {
    const data = {
      name: user.name.trim(),
      email: user.email,
      password: user.password,
    };
    const createUser = create(data);
    createUser
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setErrorMessage("El correo ya existe. Elige otro correo.");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.length === 0) {
      setErrorMessage("Elige un nombre para continuar");
    } else if (user.email.length === 0) {
      setErrorMessage("El un correo para continuar");
    } else {
      handleCreateUser(user);
      setErrorMessage("");
    }
  };

  return (
    <SignUpPage
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

export default SignUpPageContainer;
