import { useState } from "react";
import SignUpPage from "./SignUpPage";
import { create } from "src/services/userServices/UserService";
import { useNavigate } from "react-router-dom";
import { newUserSchemaValidation } from "../../validations/newUser.schema.validation";

const SignUpPageContainer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
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
        navigate("/");
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
    const { error, value } = newUserSchemaValidation.validate(user, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      setErrorMessage(error.details[0].message);
      return;
    } else {
      try {
        handleCreateUser(user);
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setErrorMessage("El correo ya existe. Elige otro correo.");
        } else {
          setErrorMessage(
            "Error al crear usuario. Inténtelo de nuevo más tarde."
          );
        }
      }
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
