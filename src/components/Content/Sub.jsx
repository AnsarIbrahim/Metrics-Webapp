import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Thiru from './thiruvalluvar-4.svg';
import { fetchData } from '../../redux/Home/HomeSlice';

const SubMain = () => {
  const dispatch = useDispatch();
  const [fetchedKurals, setFetchedKurals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllKurals = async () => {
      try {
        const fetchPromises = [];
        for (let num = 1; num <= 50; num += 1) {
          const fetchPromise = dispatch(fetchData(num));
          fetchPromises.push(fetchPromise);
        }
        const responses = await Promise.all(fetchPromises);
        const sortedData = responses
          .map((res) => res.payload)
          .sort((a, b) => a.num - b.num);

        // Check for duplicates and update the fetched data
        setFetchedKurals((prevKurals) => {
          const existingNumbers = new Set(prevKurals.map((kural) => kural.num));
          const uniqueKurals = sortedData.filter(
            (kural) => !existingNumbers.has(kural.num),
          );
          return [...prevKurals, ...uniqueKurals];
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchAllKurals();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p className="absolute m-auto flex h-full w-full flex-col items-center justify-center overflow-y-scroll bg-pink-700  pb-5 pt-[50%] text-white sm:pt-32">
          Loading...
        </p>
      ) : (
        <div className="flex h-full items-center justify-center overflow-y-auto scroll-smooth bg-pink-800 px-5 pb-20  pt-64 hover:scroll-auto sm:pt-[27%] md:pt-44">
          <div className="grid h-full w-full gap-4 p-6 shadow shadow-slate-200 sm:mt-0 sm:grid-cols-2">
            {fetchedKurals.map((kural, index) => (
              <div
                key={kural.num}
                className={`flex items-center justify-between bg-pink-600 p-4 shadow ${
                  index % 2 === 0 ? '' : 'bg-pink-700'
                }`}
              >
                <img src={Thiru} alt="img" className="img opacity-25" />
                <div className="flex items-center gap-4 text-white">
                  <p>{`Kural ${kural.num}`}</p>
                  <span className="cursor-pointer hover:text-slate-500">
                    <NavLink to={`/details/${kural.num}`}>
                      <button type="button" className="flex items-center">
                        <BsArrowRightCircle />
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SubMain;
