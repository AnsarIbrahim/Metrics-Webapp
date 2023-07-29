import React from 'react';
import { Link } from 'react-router-dom';
import { BsMicFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { MdOutlineDarkMode } from 'react-icons/md';
import './Navi.css';

const Navigation = () => (
  <>
    <div className="fixed z-40 w-full bg-pink-700 text-white">
      <nav className=" flex items-center  justify-between p-2">
        <li className="hover:text-slate-500">
          <Link to="/">
            <span>
              <IoIosArrowBack />
            </span>
          </Link>
        </li>
        <li className="animate-bounce">
          <span>Thirukkural</span>
        </li>
        <li className="flex items-center justify-around gap-9">
          <div className="flex gap-2">
            <span className="hover:text-slate-500">
              {' '}
              <BsMicFill />
            </span>
            <span className="hover:text-slate-500">
              {' '}
              <IoIosSettings />
            </span>
          </div>
          <span className="md:bl hidden  hover:text-slate-500 md:block">
            <MdOutlineDarkMode />
          </span>
        </li>
      </nav>
    </div>
  </>
);

export default Navigation;
