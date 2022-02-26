import React from "react";
import { useAuth } from "../context/authUserContext";
import { useRouter } from "next/router";
import {
  AppBar,
  CardMedia,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  display: { xs: "block", sm: "none" },
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { authUser, loading, signOut } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();

  //check if mainboard or homepage opened
  const mainboard = router.pathname === "/mainBoard";


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <CardMedia
            component="img"
            alt="app logo"
            src="../images/UTab-logos_white1.png"
            sx={{ width: "auto", height: 60, marginRight: "auto" }}
          />
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon
                sx={{
                  ...style,
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            
              {!loading && authUser ? (
                <div>
                  <Button
                    color="inherit"
                    href={"/"}
                  >
                    {" "}
                    Home{" "}
                  </Button>
                  <Button
                    color="inherit"
                    href={"/mainBoard"}
                  >
                    {" "}
                    Main Board{" "}
                  </Button>
                  <Button
                    color="inherit"
                    href={"/userSearch"}
                  >
                    {" "}
                    Search Users{" "}
                  </Button>
                  <Button
                    color="inherit"
                    onClick={signOut}
                  >
                    {" "}
                    Sign out{" "}
                  </Button>
                </div>
              ) : (
                <Box>
                  <Button
                    color="inherit"
                    href={"/"}
                  >
                    {" "}
                    Home{" "}
                  </Button>
                  <Button
                    color="inherit"
                    href={"/users/login"}
                  >
                    {" "}
                    Login{" "}
                  </Button>
                  <Button
                    color="inherit"
                    href={"/users/join"}
                  >
                    {" "}
                    JoinUs{" "}
                  </Button>
                </Box>
              )}
            </Menu>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {!loading && authUser ? (
              <>
                <Button
                  color="inherit"
                  href={"/"}
                >
                  {" "}
                  Home{" "}
                </Button>
                <Button
                  color="inherit"
                  href={"/mainBoard"}
                >
                  {" "}
                  Main Board {" "}
                </Button>
                <Button
                    color="inherit"
                    href={"/userSearch"}
                  >
                    {" "}
                    Search Users{" "}
                  </Button>
                <Button
                  color="inherit"
                  onClick={signOut}
                >
                  {" "}
                  Sign out{" "}
                </Button>
              </>
            ) : (
              <Box>
                <Button
                  color="inherit"
                  sx={{
                    m: 2,
                  }}
                  href={"/"}
                >
                  {" "}
                  Home{" "}
                </Button>
                <Button
                  color="inherit"
                  href={"/users/login"}
                >
                  {" "}
                  Login{" "}
                </Button>
                <Button
                  color="inherit"
                  href={"/users/join"}
                >
                  {" "}
                  JoinUs{" "}
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
