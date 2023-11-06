import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setError('New password and confirm password must have some value.');
    } else if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
    } else {
      // Handle password reset logic here (e.g., submit to the server)
      // Reset the error message
      setError('');
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
          <Typography variant="h5">Reset Password</Typography>
          <form style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
                {error}
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleResetPassword}
            >
              Submit
            </Button>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item xs>
                {/* Add a link to go back to the login page */}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ResetPassword;
