import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import Thiru from './thiruvalluvar-4.svg';

const SubMain = () => (
  <>
    <div className="flex h-full items-center justify-center overflow-y-auto scroll-smooth bg-pink-700 px-5 pb-20 pt-96 hover:scroll-auto">
      <div className=" mt-20 grid h-full w-full gap-4 p-6 shadow shadow-slate-200 sm:mt-0 sm:grid-cols-2">
        <div className=" flex items-center justify-between p-4 shadow ">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 1</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between bg-pink-600 p-4 shadow ">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 2</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between  p-4 shadow sm:bg-pink-600 ">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 3</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between bg-pink-600 p-4 shadow sm:bg-pink-700">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 4</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between p-4 shadow  ">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 5</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between bg-pink-600 p-4 shadow  ">
          <img src={Thiru} alt="img" className="img opacity-25" />
          <div className="flex items-center gap-4 text-white">
            <p>Kural 6</p>
            <span className="cursor-pointer hover:text-slate-500">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SubMain;
