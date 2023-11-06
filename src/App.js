import React, { useState } from 'react';
import './App.css'; // Import your CSS file if needed
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <Login onNavigate={handleNavigation} />;
    } else if (currentPage === 'signup') {
      return <SignUp onNavigate={handleNavigation} />;
    } else if (currentPage === 'forgotpassword') {
      return <ForgotPassword onNavigate={handleNavigation} />;
    } else if (currentPage === 'dashboard') {
      return <Dashboard onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;


// import React from 'react';

// import Login from './Login';
// import SignUp from './SignUp';
// import ForgotPassword from './ForgotPassword';
// import Dashboard from './Dashboard';
// import ResetPassword from './ResetPassword';

// function App() {
//   return (
//     <div className="App">
//       <ResetPassword/>
//     </div>
//   );
// }

// export default App;
