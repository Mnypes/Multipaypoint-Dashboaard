// import React, { useState } from 'react';

// import {
//   TextField,
//   Button,
//   Link,
//   Typography,
//   Container,
//   Grid,
//   Paper,
// } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle the login action here, e.g., submit the form data to a server
//   };

//   const paperStyle = {
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   };

//   return (
//     <div style={{ backgroundImage: 'url("/images/green.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} style={paperStyle}>
//           <Typography variant="h5">Login</Typography>
//           <form style={{ width: '100%', marginTop: '20px' }}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="button"
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//             <Grid container style={{ marginTop: '10px' }}>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Don't have an account? Sign Up
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default Login;


const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your other route configurations here

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});




import React, { useState } from 'react';
import { TextField, Button, Link, Typography, Container, Grid, Paper } from '@mui/material';

const SignUp = ({ onNavigate }) => {
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle the signup action here, e.g., submit the form data to a server
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
          <Typography variant="h5">Sign Up</Typography>
          <form style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => onNavigate('login')} // Trigger navigation to the login page
                >
                  Back to login
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignUp;


const fetchAccountBalance = () => {
  axios.get('https://3563-105-29-165-228.ngrok-free.app/api/contacts/accountBalance')
    .then((response) => {
      setAccountBalance(response.data.balance);
    })
    .catch((error) => {
      console.error('Failed to fetch account balance:', error);
      // Handle error here
    });
};


import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Menu,
  MenuItem,
  TextField,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
  ListSubheader,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

import axios from 'axios';

import {
  Menu as MenuIcon,
  PersonOutline as PersonIcon,
  AddCircleOutline as TopUpIcon,
  Edit as EditIcon,
  AccountBalanceWallet as AccountBalanceIcon,
  GetApp as GetAppIcon,
  History as HistoryIcon,
  MonetizationOn as TopUpAccountIcon,
  ExitToApp as LogOutIcon,
} from '@mui/icons-material';

const images = ['image1.jpg.jpg', 'image2.jpg.jpg', 'image3.jpg.jpg'];

const transactions = [
  { id: 1, description: 'Transaction 1', amount: 500.0 },
  { id: 2, description: 'Transaction 2', amount: 350.0 },
  // Add more transactions as needed
];

const Dashboard = () => {
  const [openTopUpDialog, setOpenTopUpDialog] = useState(false);
  const [topUpMethod, setTopUpMethod] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  const [editedName, setEditedName] = useState('SG');
  const [editedEmail, setEditedEmail] = useState('sg@esg.com');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactUsDialogOpen, setContactUsDialogOpen] = useState(false);

  const [accountBalance, setAccountBalance] = useState(null);
  const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);

  const handleContactUs = () => {
    setContactUsDialogOpen(true);
  };

  const handleContactUsDialogClose = () => {
    setContactUsDialogOpen(false);
  };

  // Simulate fetching account balance
  const fetchAccountBalance = () => {
    axios.get('https://3563-105-29-165-228.ngrok-free.app/api/contacts/accountBalance')
      .then((response) => {
        setAccountBalance(response.data.balance);
      })
      .catch((error) => {
        console.error('Failed to fetch account balance:', error);
        // Handle error here
      });
  };

  useEffect(() => {
    fetchAccountBalance(); // Fetch account balance when the component mounts
  }, []);

  const [editProfileDialogOpen, setEditProfileDialogOpen] = useState(false);
  const [transactionHistoryDialogOpen, setTransactionHistoryDialogOpen] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

  const handleMyProfileClick = () => {
    setProfileDialogOpen(true);
  };

  const handleTopUpClick = () => {
    setOpenTopUpDialog(true);
  };

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchor(null);
  };

  const handleAccountBalanceClick = () => {
    setBalanceDialogOpen(true);
  };

  const handleBalanceDialogClose = () => {
    setBalanceDialogOpen(false);
  };

  const handleLogOut = () => {
    // Handle the log out action
  };

  const handleEditProfile = () => {
    setEditProfileDialogOpen(true);
  };

  const handleEditProfileClose = () => {
    setEditProfileDialogOpen(false);
  };

  const handleSaveProfile = () => {
    // Handle saving the edited profile
    setEditProfileDialogOpen(false);
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleImageSlider = () => {
    setInterval(handleNextImage, 5000);
  };

  const handleTransactionHistoryClick = () => {
    setTransactionHistoryDialogOpen(true);
  };

  // const handleTransactionHistoryClick = () => {
  //   axios.get('https://3563-105-29-165-228.ngrok-free.app/api/contacts/transactionHistory')
  //     .then((response) => {
  //       console.log('Transaction history:', response.data);
  //       // Handle the response here
  //       setTransactionHistoryDialogOpen(true);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to fetch transaction history:', error);
  //       // Handle error here
  //     });
  // };

  const handleTransactionHistoryClose = () => {
    setTransactionHistoryDialogOpen(false);
  };

  // const handleDownloadTransactionHistory = () => {
  //   // Handle the download functionality here (e.g., generate CSV and trigger download)
  // };

  const handleDownloadTransactionHistory = () => {
    // Check if transactions is an array and not empty
    if (Array.isArray(transactions) && transactions.length > 0) {
      // Iterate through transactions and format the amounts as strings
      const formattedTransactions = transactions.map((transaction) => {
        if (transaction && typeof transaction.amount === 'number') {
          // Convert the number to a string with 2 decimal places
          const formattedAmount = transaction.amount.toFixed(2);
          return {
            ...transaction,
            amount: formattedAmount
          };
        } else {
          return {
            ...transaction,
            amount: 'N/A' // or handle it according to your use case
          };
        }
      });
  
      // Now you can use formattedTransactions to download or display the transaction history
      console.log(formattedTransactions);
  
      // Handle the download functionality here (e.g., generate CSV and trigger download)
    } else {
      // Handle the case when there are no transactions
      console.error('No transactions available');
    }
  };
  
  
  
  

  const handleTopUpDialogClose = () => {
    setOpenTopUpDialog(false);
  };

  const handleMyBalanceClick = () => {
    // Handle "My Balance" action
  };

  const handleTopUpMethodClick = (method) => {
    setTopUpMethod(method);
    setOpenTopUpDialog(false);
    // Open the top-up form dialog
    setTopUpFormDialogOpen(true);
  };

  const [topUpFormDialogOpen, setTopUpFormDialogOpen] = useState(false);

  const handleTopUpFormClose = () => {
    setTopUpFormDialogOpen(false);
  };

  const handleTopUp = () => {
    // Handle the top-up action with phoneNumber and amount
    setTopUpFormDialogOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: '#00796b' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            MULTIPAYPOINT DASHBOARD
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<TopUpIcon />}
            onClick={handleTopUpClick}
          >
            Top Up Account
          </Button>
          <IconButton color="inherit" aria-label="user profile" onClick={handleAccountMenuClick}>
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarOpen} onClose={handleSidebarClose}>
        <div style={{ width: 240, height: 1080, background: '#004547', color: '#fff' }}>
          <List
            subheader={
              <ListSubheader component="div" style={{ backgroundColor: '#5D7E74' }}>
                Dashboard Menu
              </ListSubheader>
            }
          >
            <ListItem button>
              <ListItemText primary="Dashboard Home" />
            </ListItem>
            <ListItem button onClick={handleAccountMenuClick}>
              <ListItemText primary="My Account" />
            </ListItem>
            <ListItem button onClick={handleTransactionHistoryClick}>
              <ListItemText primary="Transaction History" />
            </ListItem>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader component="div" style={{ backgroundColor: '#5D7E74' }}>
                My Account Submenu
              </ListSubheader>
            }
          >
            <ListItem button>
              <ListItemText primary="Account Balance" />
            </ListItem>
            <ListItem button onClick={handleTopUpClick}>
              <ListItemText primary="Top Up Account" />
            </ListItem>
            <ListItem button onClick={handleContactUs}>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={handleLogOut}>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main style={{ paddingTop: 64, position: 'relative', backgroundColor: '#819B93' }}>
        <CardMedia
          component="img"
          alt="Image"
          style={{
            height: '75vh',
            objectFit: 'cover',
            width: '100%',
          }}
          image={process.env.PUBLIC_URL + '/images/image1.jpg.jpg'}
        />
        <div style={{ position: 'absolute', top: '30%', left: '80%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
          <Typography variant="h4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>EASY CASHLESS PAYMENT ALL THE WAY!</Typography>
        </div>
        <Card>
          <CardContent>
            <div
              style={{
                backgroundColor: '#5D7E74',
                color: 'white',
                padding: '16px',
                margin: '1px 16px',
                border: '1px solid white',
                borderRadius: '10px',
                fontFamily: 'cursive',
              }}
            >
              <Typography variant="h4">About Us</Typography>
              <p>
                Easy Cashless Payment is the ultimate solution for automating payments at vending machines, gas stations, and pool tables. Our platform offers a convenient and secure way for users to make payments without the need for physical cash. With our service, you can say goodbye to the hassle of carrying loose change and waiting in line. Our solution is designed to streamline the payment process, making it faster and more efficient. Welcome and experience the future of cashless payments!
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Dialog open={openTopUpDialog} onClose={handleTopUpDialogClose}>
        <DialogTitle>Top Up Account</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleTopUpMethodClick('Mpesa')}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'green',
              color: 'white',
            }}
          >
            Mpesa
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleTopUpMethodClick('Airtel Money')}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#E90F1E',
              color: 'white',
            }}
          >
            Airtel Money
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleTopUpMethodClick('Bank to Bank Transfer')}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#0E40AB',
              color: 'white',
            }}
          >
            Bank to Bank Transfer
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTopUpDialogClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={contactUsDialogOpen} onClose={handleContactUsDialogClose}>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>Contact Us</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <CardMedia
                component="img"
                alt="Phone Icon"
                src={process.env.PUBLIC_URL + '/images/phone.png'}
                style={{ width: 48, height: 48, marginRight: 16 }}
              />
              <ListItemText primary="Phone" secondary="+254 723 146 862" />
            </ListItem>
            <ListItem>
              <CardMedia
                component="img"
                alt="WhatsApp Icon"
                src={process.env.PUBLIC_URL + '/images/whatsapp.png'}
                style={{ width: 48, height: 48, marginRight: 16 }}
              />
              <ListItemText primary="WhatsApp" secondary="+254 713 698 683" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactUsDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editProfileDialogOpen} onClose={handleEditProfileClose} fullWidth>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <p>Email: {editedEmail}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditProfileClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveProfile} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog open={transactionHistoryDialogOpen} onClose={handleTransactionHistoryClose} fullWidth>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>My Transactions</DialogTitle>
        <DialogContent>
          <List>
            {transactions.map((transaction) => (
              <ListItem key={transaction.id}>
                <CardMedia
                  component="img"
                  alt="Transaction Image"
                  src={process.env.PUBLIC_URL + '/images/money.png'}
                  style={{ width: 48, height: 48, marginRight: 16 }}
                />
                <ListItemText
                  primary={transaction.description}
                  // secondary={`Amount: $${transaction.amount.toFixed(2)}`}
                  secondary={`Amount: $${transaction.amount ? transaction.amount.toFixed(2) : 'N/A'}`}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GetAppIcon />}
            onClick={handleDownloadTransactionHistory}
            style={{ marginTop: 16, width: '100%' }}
          >
            Download Transaction History
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTransactionHistoryClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
      <Dialog open={transactionHistoryDialogOpen} onClose={handleTransactionHistoryClose} fullWidth>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>My Transactions</DialogTitle>
        <DialogContent>
        // Inside the transaction history rendering
          <List>
            {transactions.map((transaction) => (
              <ListItem key={transaction.id}>
                <CardMedia
                  component="img"
                  alt="Transaction Image"
                  src={process.env.PUBLIC_URL + '/images/money.png'}
                  style={{ width: 48, height: 48, marginRight: 16 }}
                />
                <ListItemText
                  primary={transaction.description}
                  secondary={`Amount: $${typeof transaction.amount === 'number' ? transaction.amount.toFixed(2) : 'N/A'}`}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GetAppIcon />}
            onClick={handleDownloadTransactionHistory}
            style={{ marginTop: 16, width: '100%' }}
          >
            Download Transaction History
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTransactionHistoryClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={balanceDialogOpen} onClose={handleBalanceDialogClose}>
        <DialogTitle>Account Balance</DialogTitle>
        <DialogContent>
          <Card style={{ backgroundColor: '#00796b' }}>
            <CardContent style={{ color: 'white' }}>
              <Typography variant="h5" gutterBottom>
                Your Account Balance
              </Typography>
              {accountBalance !== null ? (
                <Typography variant="h4">
                  $ {accountBalance.toFixed(2)}
                </Typography>
              ) : (
                <Typography variant="h4">
                  Loading...
                </Typography>
              )}
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBalanceDialogClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={topUpFormDialogOpen} onClose={handleTopUpFormClose}>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>Top Up Account using {topUpMethod}</DialogTitle>
        <DialogContent>
          {topUpMethod === 'Mpesa' || topUpMethod === 'Airtel Money' ? (
            <div>
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Amount"
                fullWidth
                margin="normal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTopUpFormClose} color="secondary">
            Cancel
          </Button>
          {topUpMethod === 'Mpesa' || topUpMethod === 'Airtel Money' ? (
            <Button onClick={handleTopUp} color="primary" disabled={!phone || !amount}>
              Top Up
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
      <Dialog open={profileDialogOpen} onClose={() => setProfileDialogOpen(false)} fullWidth>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>My Profile</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/avatar.png'} // Updated image path
              alt="User Avatar"
              style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 16 }}
            />
            <div>
              <p>Name: {editedName}</p>
              <p>Email: {editedEmail}</p>
            </div>
          </div>
          <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleEditProfile}>
            Edit Profile
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProfileDialogOpen(false)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Menu anchorEl={accountMenuAnchor} open={Boolean(accountMenuAnchor)} onClose={handleAccountMenuClose}>
        <MenuItem onClick={handleMyProfileClick}>My Profile</MenuItem>
        <MenuItem onClick={handleAccountBalanceClick}>Account Balance</MenuItem>
        <MenuItem onClick={handleTransactionHistoryClick}>My Transactions</MenuItem>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default Dashboard;

