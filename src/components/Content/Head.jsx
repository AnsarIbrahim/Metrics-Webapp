import React from 'react';
import Thiru from './thiruvalluvar-4.svg';
import './Main.css';

const Head = () => (
  <>
    <div className="fixed  z-50 mt-10 flex w-full flex-col items-center justify-center bg-pink-500 py-2 sm:flex-row">
      <img src={Thiru} alt="img" className="img opacity-50" />
      <div>
        <h1 className="p-2 text-5xl font-semibold text-white ">
          Thiruvalluvar
        </h1>
      </div>
    </div>
  </>
);

export default Head;
