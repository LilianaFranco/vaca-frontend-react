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

import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Logout"];

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isAuthorized = true;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ padding: { xs: "20px", md: "10px 60px" } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="logo" src={Logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          {isAuthorized && (
            <React.Fragment>
              {/* Menu in Web */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MenuLinks />
              </Box>

              {/* Profile menu for settings in Mobile and Web*/}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </React.Fragment>
          )}
        </Toolbar>

        {/* Mobile menu */}
        {isAuthorized && (
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <MenuLinks />
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
export default NavBar;
