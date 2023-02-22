import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import PostInfo from './components/PostInfo';
import PostPhoto from './components/PostPhoto';

function App() {
  const [theme, setTheme] = useState('App light');

  let changeTheme = (value) => {
    setTheme(value);
  }

  return (
    <div className={theme}>
      <PostPhoto changeTheme={changeTheme} />
      <PostInfo />
      <Footer />
    </div>
  );
}

export default App;
