import React from 'react';
import Thiru from './thiruvalluvar-4.svg';
import './Main.css';
import SubMain from './Sub';

const Main = () => (
  <>
    <div className=" fixed  z-20 flex w-full flex-col items-center justify-center bg-pink-500 py-16  sm:flex-row">
      <img src={Thiru} alt="img" className="img opacity-50" />
      <div>
        <h1 className="p-5 text-5xl font-semibold text-white ">
          Thiruvalluvar
        </h1>
      </div>
    </div>
    <SubMain />
  </>
);

export default Main;
