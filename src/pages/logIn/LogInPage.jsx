import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import Theme from "src/Theme";

const LogInPage = ({
  user,
  errorMessage,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <img
          src="src/assets/Logo_login.svg"
          alt=""
          style={{ height: "150px", marginBottom: "20px" }}
        />
        <h3 style={{ color: Theme.palette.primary.main, fontWeight: "bold" }}>
          Iniciar sesión
        </h3>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                required
                label="Correo electrónico"
                value={user.email}
                onChange={(e) => handleChange(e, "email")}
                style={{ marginBottom: "20px" }}
              />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  label="Password"
                  value={user.password}
                  onChange={(e) => handleChange(e, "password")}
                  style={{ marginBottom: "20px" }}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {!!errorMessage && (
                  <Alert severity="error" sx={{ marginTop: "20px" }}>
                    {errorMessage}
                  </Alert>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  style={{ margin: "10px" }}
                >
                  Ingresar
                </Button>
                <Button
                  variant="outlined"
                  type="link"
                  style={{ margin: "10px" }}
                >
                  Registrarme
                </Button>
              </FormControl>
            </FormControl>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default LogInPage;
