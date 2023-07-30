import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import Thiru from './thiruvalluvar-4.svg';

const kuralData = [
  { id: 1, title: 'Kural 1' },
  { id: 2, title: 'Kural 2' },
  { id: 3, title: 'Kural 3' },
  { id: 4, title: 'Kural 4' },
  { id: 5, title: 'Kural 5' },
  { id: 6, title: 'Kural 6' },
  { id: 7, title: 'Kural 7' },
  { id: 8, title: 'Kural 8' },
  { id: 9, title: 'Kural 9' },
  { id: 10, title: 'Kural 10' },
  { id: 11, title: 'Kural 11' },
  // Add more Kural data as needed
];

const SubMain = () => (
  <>
    <div className=" flex h-full items-center justify-center overflow-y-auto scroll-smooth bg-pink-800 px-5 pb-20  pt-80 hover:scroll-auto">
      <div className=" mt-20 grid h-full w-full gap-4 p-6 shadow shadow-slate-200 sm:mt-0 sm:grid-cols-2">
        {kuralData.map((kural, index) => (
          <div
            key={kural.id}
            className={`flex items-center justify-between p-4 shadow ${
              index % 2 === 0 ? '' : 'bg-pink-600'
            }`}
          >
            <img src={Thiru} alt="img" className="img opacity-25" />
            <div className="flex items-center gap-4 text-white">
              <p>{kural.title}</p>
              <span className="cursor-pointer hover:text-slate-500">
                <Link to="/details">
                  <button type="button" className="flex items-center">
                    <BsArrowRightCircle />
                  </button>
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default SubMain;
