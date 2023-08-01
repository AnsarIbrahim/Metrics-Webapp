import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NaviDetails from './NavDetails';
import Kural from './Kural';
import Footer from '../../Footer/Footer';
import { fetchData } from '../../../redux/Details/DetailsSlice';

const Details = () => {
  const { num } = useParams();
  const [kuralData, setKuralData] = useState(null);
  const dispatch = useDispatch();
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((res) => !res);
  };

  useEffect(() => {
    const fetchKuralData = async () => {
      const action = await dispatch(fetchData(num));
      if (action.error) {
        throw action.error;
      }
      setKuralData(action.payload);
    };

    fetchKuralData();
  }, [dispatch, num]);

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <NaviDetails handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
        <Kural kuralData={kuralData} />
        <Footer handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Details;
