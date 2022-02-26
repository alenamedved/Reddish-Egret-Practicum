import React, {useState} from 'react';
import { useRouter } from "next/router";
import { useAuth } from "../../components/context/authUserContext";
import toast, { Toaster } from "react-hot-toast";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConf, setPassConf] = useState("");
  
    const router = useRouter();
  
    const { createUserWithEmailAndPassword } = useAuth();
  
    const handleRegistration = (e) => {
      e.preventDefault();
      //check if passwords match. If they do, create user in Firebase
      // and redirect to mainboard page.
      if (password !== passConf) {
        toast.error("Password and password confirmation does not match");
        setPassword("");
        setPassConf("");
        return null;
      }
  
      createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          toast.success("Success!")

          //if a new user - push to profile page, if not - main board
          if (authUser.additionalUserInfo.isNewUser) {
            router.push("/mainBoard");
          } else {
            router.push("/mainBoard");
          }
        })
        // An error occurred. Set error message to be displayed to user
        .catch((err) => {
          console.log(err.code, err.message);
          toast.error(err.message);
        });
    };

  return (
    <ThemeProvider theme={theme}>
    <Toaster />
      <Container component="main" maxWidth="xs" sx={{mt: 20}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join Our Community
          </Typography>
          <Box component="form" noValidate onSubmit={handleRegistration} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={passConf}
                  onChange={({ target }) => setPassConf(target.value)}
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="passwordConfirmation"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/users/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}


