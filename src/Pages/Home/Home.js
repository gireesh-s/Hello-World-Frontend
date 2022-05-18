import React, { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './Home.css';

const Home = () => {
  const [loginTab, setLoginTab] = useState(true)

  const handleTab = () => {
    setLoginTab(!loginTab)
  }

  return (
  <div className="container">
    {
      loginTab ? <SignIn handleTab={handleTab} /> : <SignUp handleTab={handleTab} />
    }
  </div>
)
}

export default Home