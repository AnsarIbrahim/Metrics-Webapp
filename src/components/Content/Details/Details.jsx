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
      <NaviDetails />
      <Kural kuralData={kuralData} />
      <Footer />
    </>
  );
};

export default Details;
