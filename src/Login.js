import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';

const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages

  // const handleLogin = async () => {
  //   try {
  //     if (!email || !password) {
  //       setError('Invalid username or password');
  //       return; // Exit early if credentials are missing
  //     }

  //     const response = await axios.post('https://erkwpgb.localto.net/api/users/login', {
  //       email,
  //       password,
  //     });

  //     console.log('Login Response:', response);

  //     if (response.status === 200) {
  //       onNavigate('dashboard');
  //     } else {
  //       setError('Invalid username or password'); // Set error for incorrect credentials
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     setError('Login failed.'); // Set error for other errors
  //   }
  // };
  
  const handleLogin = async () => {
    onNavigate('dashboard');
  }

  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/green.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h5">Login</Typography>
          <form style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>} {/* Display error message if error state is set */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item xs>
                <button onClick={() => onNavigate('forgotpassword')}>Forgot password?</button>
              </Grid>
              <Grid item>
                <button onClick={() => onNavigate('signup')}>Don't have an account? Sign Up</button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;