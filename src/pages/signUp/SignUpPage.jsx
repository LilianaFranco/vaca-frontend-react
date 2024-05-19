import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Theme from "src/Theme";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({
  user,
  errorMessage,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleChange,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            height: "100vh",
            padding: "20px",
            backgroundColor: Theme.palette.primary.main,
          }}
        >
          {isMobile && (
            <>
              <img
                src="src/assets/logo-deco.svg"
                alt=""
                style={{ height: "200px", margin: "20px" }}
              />
            </>
          )}
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom: "40px",
            }}
          >
            Registrarme
          </h2>
          <form onSubmit={handleSubmit}>
            <Box>
              <FormControl
                variant="outlined"
                sx={{ width: { xs: "100%", md: "400px" } }}
              >
                <TextField
                  required
                  label="Nombre"
                  value={user.name}
                  onChange={(e) => handleChange(e, "name")}
                  style={{ marginBottom: "20px" }}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white", // Change the outline color to white when focused
                      },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />
                <TextField
                  required
                  label="Correo electrónico"
                  value={user.email}
                  onChange={(e) => handleChange(e, "email")}
                  style={{ marginBottom: "20px" }}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white", // Change the outline color to white when focused
                      },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />
                <TextField
                  required
                  label="Contraseña"
                  value={user.password}
                  onChange={(e) => handleChange(e, "password")}
                  style={{ marginBottom: "20px" }}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          sx={{
                            color: "white",
                          }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white", // Change the outline color to white when focused
                      },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                  }}
                />
                {!!errorMessage && (
                  <Alert severity="error" sx={{ marginTop: "20px" }}>
                    {errorMessage}
                  </Alert>
                )}
                <Button variant="contained" type="submit" color="secondary">
                  Registrarme
                </Button>
              </FormControl>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            width: { xs: "0", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src="src/assets/Logo_login.svg"
            alt=""
            style={{ height: "200px", margin: "20px" }}
          />
          <h2
            style={{
              color: Theme.palette.primary.main,
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Si ya tienes una cuenta, te esperamos.
          </h2>

          <Button
            variant="contained"
            sx={{ margin: "20px", width: { xs: "100%", md: "400px" } }}
            onClick={() => navigate("/login")}
          >
            Ingresar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SignUpPage;
