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
      <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
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
              sx={{ mr: 2 }}
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
                    sx={{
                      "&:hover": {
                        color: "black",
                        backgroundColor: "white",
                      },
                      color: "white",
                      backgroundColor: "black",
                      m: 2,
                    }}
                    href={mainboard ? "/" : "/mainBoard"}
                  >
                    {mainboard ? "Home" : "Main Board"}
                  </Button>
          
                <Button
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    color: "white",
                    backgroundColor: "black",
                    m: 2,
                  }}
                  onClick={signOut}
                >
                  {" "}
                  Sign out{" "}
                </Button>
              </div>
            ) : (
              <Box>
                <Button
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    color: "white",
                    backgroundColor: "black",
                    m: 2,
                  }}
                  href={"/"}
                >
                  {" "}
                  Home{" "}
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    color: "white",
                    backgroundColor: "black",
                    m: 2,
                  }}
                  href={"/users/login"}
                >
                  {" "}
                  Login{" "}
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    color: "white",
                    backgroundColor: "black",
                    m: 2,
                  }}
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
                  sx={{ backgroundColor: "black", m: 2 }}
                  href={mainboard ? "/" : "/mainBoard"}
                >
                  {mainboard ? "Home" : "Main Board"}
                </Button>
                <Button
                  color="inherit"
                  sx={{ backgroundColor: "black", m: 2 }}
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
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    backgroundColor: "black",
                    m: 2,
                  }}
                  href={"/"}
                >
                  {" "}
                  Home{" "}
                </Button>

                <Button
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    backgroundColor: "black",
                    m: 2,
                  }}
                  href={"/users/login"}
                >
                  {" "}
                  Login{" "}
                </Button>
                <Button
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                    backgroundColor: "black",
                    m: 2,
                  }}
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
