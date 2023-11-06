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
  AccountBalance as BankTransferIcon,
} from '@mui/icons-material';

const images = ['image1.jpg.jpg', 'image2.jpg.jpg', 'image3.jpg.jpg'];

function getRandomTimestamp() {
  const start = new Date(2023, 0, 1); // Start date (January 1, 2023)
  const end = new Date(); // Current date (for random timestamps up to now)
  const timestamp = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return timestamp;
}

const transactions = [
  { id: 1, description: 'RJU9WPBM31', amount: 500, timestamp: getRandomTimestamp() },
  { id: 2, description: 'RJU6PWX3Y2', amount: 350, timestamp: getRandomTimestamp() },
  { id: 3, description: 'WV3FRPXYV3', amount: 35, timestamp: getRandomTimestamp() },
  { id: 4, description: 'RIP34JYBV6', amount: 200, timestamp: getRandomTimestamp() },
  // Add more transactions as needed
];

// Sort the transactions by timestamp in descending order (latest first)
const sortedTransactions = transactions.sort((a, b) => b.timestamp - a.timestamp);

const banks = [
  'ABC Bank',
  'Access Bank',
  'Barclays (ABSA)',
  'Bank of India',
  'CITI Bank',
  'COOP Bank',
  'Consolidated',
  'DTB',
  'Equity Bank',
  'ECO Bank',
  'Family Bank',
  'Faulu Bank',
  'IM Bank',
  'KCB',
  'National Bank',
  'NCBA',
  'Prime Bank',
  'Post Bank',
  'SIDIAN',
  'Stanbic Bank',
  'Standard Chartered',
  'Stima Sacco',
];

const initialBankTransferData = {
  accountNumber: '',
  selectedBank: '',
};



const Dashboard = () => {
  const [openTopUpDialog, setOpenTopUpDialog] = useState(false);
  const [topUpMethod, setTopUpMethod] = useState('');
  const [topUpStatus, setTopUpStatus] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  const [editedName, setEditedName] = useState('SG');
  const [editedEmail, setEditedEmail] = useState('sg@esg.com');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactUsDialogOpen, setContactUsDialogOpen] = useState(false);
  const [findLocationsDialogOpen, setFindLocationsDialogOpen] = useState(false);
  const [paypalDialogOpen, setPayPalDialogOpen] = useState(false);
  const [CreditCardDialogOpen, setCreditCardDialogOpen] = useState(false);

  const [bankTransferDialogOpen, setBankTransferDialogOpen] = useState(false);
  const [bankTransferData, setBankTransferData] = useState(initialBankTransferData);

  const [accountBalance, setAccountBalance] = useState(null);
  const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);

  const handleContactUs = () => {
    setContactUsDialogOpen(true);
  };

  const handleContactUsDialogClose = () => {
    setContactUsDialogOpen(false);
  };

  const handlePayPalTopUpClick = () => {
    setPayPalDialogOpen(true);
  };

  const handleCreditCardTopUpClick = () => {
    setCreditCardDialogOpen(true);
  };

  const fetchAccountBalance = () => {
    const randomBalanceKES = parseFloat((Math.random() * 10000).toFixed(2));
    setAccountBalance(randomBalanceKES);
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

  const handleFindLocationsClick = () => {
    setFindLocationsDialogOpen(true);
  };
  
  const handleFindLocationsDialogClose = () => {
    setFindLocationsDialogOpen(false);
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

  const handleTransactionHistoryClose = () => {
    setTransactionHistoryDialogOpen(false);
  };

  const handleDownloadTransactionHistory = () => {
    // Handle the download functionality here (e.g., generate CSV and trigger download)
  };

  const handleTopUpDialogClose = () => {
    setOpenTopUpDialog(false);
    setNotificationMessage('');
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

  // const handleTopUp = () => {
  //   // Handle the top-up action with phoneNumber and amount
  //   setTopUpFormDialogOpen(false);
  // };

  const handleTopUp = () => {
    if (topUpMethod === 'Mpesa') {
      // Define the data to send in the POST request
      const postData = {
        phone: phone,
        amount: amount,
      };
  
      // Simulate a successful top-up
      axios
        .post('https://a208-105-29-165-228.ngrok-free.app/esp/pay', postData)
        .then((response) => {
          // Successful response
          setTopUpStatus('success');
          setNotificationMessage('Please check your phone to complete the top-up');
          setTimeout(() => {
            setOpenTopUpDialog(false);
            setNotificationMessage('');
          }, 10000);
        })
        .catch((error) => {
          // Handle error
          setTopUpStatus('error');
          setNotificationMessage('Payment unsuccessful, please try again');
        });
    }
  }; 
  
  const handleBankTransferClick = () => {
    setBankTransferDialogOpen(true);
  };

  const handleBankTransferDialogClose = () => {
    setBankTransferDialogOpen(false);
  };

  const handleBankTransferFormChange = (event) => {
    const { name, value } = event.target;
    setBankTransferData({
      ...bankTransferData,
      [name]: value,
    });
  };

  const handleBankTransferNext = () => {
    // Handle the "Next" action, e.g., validation or proceeding to the next step
    // You can access the form data in the bankTransferData state
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
            <ListItem button onClick={handleFindLocationsClick}>
              <ListItemText primary="Find Locations" />
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
            <ListItem button onClick={handleAccountBalanceClick}>
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
            onClick={handleBankTransferClick}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#182345',
              color: 'white',
            }}
          >
            Bank to Bank Transfer
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleTopUpMethodClick('PayPal')}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#071B8F',
              color: 'white',
            }}
          >
            PayPal
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleTopUpMethodClick('Credit Card')}
            style={{
              marginBottom: 16,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#60CD9C',
              color: 'white',
            }}
          >
            Card Payment
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
      <Dialog open={findLocationsDialogOpen} onClose={handleFindLocationsDialogClose}>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>Nearest Vending Machine Locations</DialogTitle>
        <DialogContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255279.33742216622!2d36.57858378671874!3d-1.3323422000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f7e9929055%3A0x1ebcc6a2ef6ea3f3!2sVending%20Services!5e0!3m2!1sen!2ske!4v1698724333774!5m2!1sen!2ske"
            width="540"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFindLocationsDialogClose} color="secondary">
            Cancel
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
      <Dialog open={bankTransferDialogOpen} onClose={handleBankTransferDialogClose}>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>
          <BankTransferIcon /> Bank to Bank Transfer
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="Bank Account Number"
              name="accountNumber"
              fullWidth
              margin="normal"
              value={bankTransferData.accountNumber}
              onChange={handleBankTransferFormChange}
            />
            <TextField
              select
              label="Select Bank"
              name="selectedBank"
              fullWidth
              margin="normal"
              value={bankTransferData.selectedBank}
              onChange={handleBankTransferFormChange}
            >
              {banks.map((bank) => (
                <MenuItem key={bank} value={bank}>
                  {bank}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBankTransferDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleBankTransferNext} color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={transactionHistoryDialogOpen} onClose={handleTransactionHistoryClose} fullWidth>
        <DialogTitle style={{ backgroundColor: '#00796b', color: 'white' }}>My Transactions</DialogTitle>
        <DialogContent>
        <List>
            {sortedTransactions.map((transaction) => (
              <ListItem key={transaction.id}>
                <CardMedia
                  component="img"
                  alt="Transaction Image"
                  src={process.env.PUBLIC_URL + '/images/money.png'}
                  style={{ width: 48, height: 48, marginRight: 16 }}
                />
                <ListItemText
                  primary={transaction.description}
                  secondary={`Amount: KSH${transaction.amount.toFixed(2)}, Timestamp: ${transaction.timestamp.toLocaleString()}`}
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
                 {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KSH' }).format(accountBalance)}
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
          {notificationMessage && (
            <div
              style={{
                backgroundColor: topUpStatus === 'success' ? 'green' : 'red',
                color: 'white',
                textAlign: 'center',
                padding: '8px',
              }}
            >
              {notificationMessage}
            </div>
          )}
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
      <Dialog open={CreditCardDialogOpen} onClose={() => setCreditCardDialogOpen(false)}>
        <DialogTitle>Card Transfer Top Up</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreditCardDialogOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Menu anchorEl={accountMenuAnchor} open={Boolean(accountMenuAnchor)} onClose={handleAccountMenuClose}>
        <MenuItem onClick={handleMyProfileClick}>My Profile</MenuItem>
        <MenuItem onClick={handleAccountBalanceClick}>Account Balance</MenuItem>
        <MenuItem onClick={handleTransactionHistoryClick}>My Transactions</MenuItem>
        {/* <MenuItem onClick={handleBankTransferClick}>Bank Transfer</MenuItem> */}
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default Dashboard;
