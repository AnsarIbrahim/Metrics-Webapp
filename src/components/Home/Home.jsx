import React, { useState } from 'react';
import Navigation from '../Navigation/Navi';
import Footer from '../Footer/Footer';
import Main from '../Content/Main';

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((res) => !res);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navigation handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <Main />
      <Footer handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
