import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero.jsx/Hero'
import Management from './components/Management/Management'
import Feedback from './components/Feedback/Feedback'
import AgainApp from './components/AgainManagement/AgainApp'
import AgainFeedback from './components/AgainFeedback/AgainFeedback'
import AgainManagementTwo from './components/AgainManagement/AgainManagementTwo'
import AgainFeedbackTwo from './components/AgainFeedback/AgainFeedbackTwo'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App = () => {
  const [logIn, setlogIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (user) => {
    setlogIn(true);
    setUsername(user);
  };

  return (
    <div>
      {logIn ? (
        <>
          <Navbar username={username} />
          <Hero />
          <Management />
          <Feedback />
          <AgainApp />
          <AgainFeedback />
          <AgainManagementTwo />
          <AgainFeedbackTwo />
          <Footer />
        </>
      ) : (
        <Login handleLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;