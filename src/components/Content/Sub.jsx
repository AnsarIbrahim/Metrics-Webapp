import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Thiru from './thiruvalluvar-4.svg';
import Next from './next/Next';
import { fetchData } from '../../redux/Home/HomeSlice';

const SubMain = () => {
  const dispatch = useDispatch();
  const [fetchedKurals, setFetchedKurals] = useState([]);
  const [loading, setLoading] = useState(true);

  const hasPreviousPage = false;
  const hasNextPage = true;

  useEffect(() => {
    const fetchAllKurals = async () => {
      try {
        const fetchPromises = [];
        for (let num = 1; num <= 54; num += 1) {
          const fetchPromise = dispatch(fetchData(num));
          fetchPromises.push(fetchPromise);
        }
        const responses = await Promise.all(fetchPromises);
        const sortedData = responses
          .map((res) => res.payload)
          .sort((a, b) => a.num - b.num);

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
        <p className="absolute m-auto flex h-full w-full flex-col items-center justify-center overflow-y-scroll bg-pink-700 pb-5 pt-[50%] text-white dark:bg-slate-800 dark:text-white sm:pt-32">
          Loading...
        </p>
      ) : (
        <>
          <Next hasPreviousPage={hasPreviousPage} hasNextPage={hasNextPage} />
          <div className="flex h-full w-[full] flex-col items-center justify-center overflow-y-auto scroll-smooth bg-pink-800 px-8 pb-20 pt-64 hover:scroll-auto dark:bg-slate-800 dark:text-white sm:pt-[27%] md:pt-44">
            <div className="z-30 grid h-full w-[70wh] grid-cols-2 gap-4 p-3 shadow shadow-slate-200 dark:bg-slate-800 dark:text-white sm:mt-0 sm:w-[70wh] sm:grid-cols-3 md:w-[70wh] md:grid-cols-3 lg:w-[80wh] lg:grid-cols-4 xl:w-[70wh] xl:grid-cols-6">
              {fetchedKurals.map((kural, index) => (
                <div
                  key={kural.num}
                  className={`flex items-center justify-between gap-3 bg-pink-600 p-4 shadow dark:bg-slate-800 dark:text-white ${
                    index % 2 === 0 ? '' : 'bg-pink-700'
                  }`}
                >
                  <img
                    src={Thiru}
                    alt="img"
                    className="thiru opacity-25 dark:opacity-90"
                  />
                  <div className="flex items-center gap-3 text-white">
                    <p>{`Kural ${kural.num}`}</p>
                    <span className="cursor-pointer hover:text-slate-500">
                      {/* Use template literals to construct the link */}
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
        </>
      )}
    </>
  );
};

export default SubMain;
