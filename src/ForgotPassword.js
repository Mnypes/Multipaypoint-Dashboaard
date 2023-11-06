import React, { useState } from 'react';
import { TextField, Button, Link, Typography, Container, Grid, Paper } from '@mui/material';
import axios from 'axios';

const ForgotPassword = ({ onNavigate }) => {
  const [resetOption, setResetOption] = useState('email');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleReset = async () => {
    try {
      const response = await axios.post('https://erkwpgb.localto.net/forgot-password', {
        resetOption,
        inputValue,
      });

      if (response.status === 200) {
        // Handle success, e.g., show a success message to the user
        console.log('Password reset link sent successfully.');
      } else {
        // Handle other response statuses as needed
        setError('Failed to reset password.');
      }
    } catch (error) {
      // Handle network or server errors
      setError('An error occurred while sending the reset request.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(/images/green.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5">Forgot Password</Typography>
          <form style={{ width: '100%', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Typography style={{ marginRight: '10px' }}>Reset via:</Typography>
              <label>
                <input
                  type="radio"
                  value="email"
                  checked={resetOption === 'email'}
                  onChange={() => setResetOption('email')}
                />
                Email
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  value="phone"
                  checked={resetOption === 'phone'}
                  onChange={() => setResetOption('phone')}
                />
                Phone
              </label>
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={resetOption}
              label={resetOption === 'email' ? 'Email' : 'Phone Number'}
              name={resetOption}
              autoComplete={resetOption}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item xs>
                <Link onClick={() => onNavigate('login')} variant="body2">Back to login</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ForgotPassword;
