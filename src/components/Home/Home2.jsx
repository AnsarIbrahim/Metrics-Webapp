import React, { useState } from 'react';
import Navigation from '../Navigation/Navi';
import Head from '../Content/Head';
import NextPage from '../Content/next/NextPage';
import Footer from '../Footer/Footer';

const Home2 = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((res) => !res);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navigation handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <Head />
      <NextPage />
      <Footer handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home2;
