import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "src/assets/Logo.svg";
import useAuth from "src/hooks/useAuth";

import { Link } from "react-router-dom";

function MenuLinks() {
  return (
    <React.Fragment>
      <Link to="/friends">
        <Button sx={{ m: "8px 4px", color: "white" }}>Amigos</Button>
      </Link>
      <Link to="/expenses">
        <Button sx={{ m: "8px 4px", color: "white" }}>Gastos</Button>
      </Link>
      <Link to="/groups">
        <Button sx={{ m: "8px 4px", color: "white" }}>Grupos</Button>
      </Link>
    </React.Fragment>
  );
}

function NavBar() {
  const isAuthenticated = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    sessionStorage.removeItem("token");
    window.dispatchEvent(new Event("storage")); //para hacerle un triger al storage y poder ver el navbar. El hook se ejecuta antes de nuestra protección.
    navigate("/", { replace: true });
    handleCloseUserMenu();
  };

  if (!isAuthenticated) {
    return null;
  }
  return (
    <AppBar position="static" sx={{ padding: { xs: "20px", md: "10px 60px" } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="logo" src={Logo} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 2,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Vaca
          </Typography>

          <React.Fragment>
            {/* Menu in Web */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuLinks />
            </Box>

            {/* Profile menu for settings in Mobile and Web*/}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="logout">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={onLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </React.Fragment>
        </Toolbar>

        {/* Mobile menu */}

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <MenuLinks />
        </Box>
      </Container>
    </AppBar>
  );
}
export default NavBar;
