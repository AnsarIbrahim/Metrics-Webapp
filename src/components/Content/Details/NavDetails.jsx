import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsMicFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';
import '../../Navigation/Navi.css';

const NaviDetails = ({ handleDarkMode, isDarkMode }) => (
  <>
    <div className="fixed z-40 w-full bg-pink-700 text-white dark:bg-slate-800 dark:text-white">
      <nav className=" flex items-center  justify-between p-2">
        <li className="hover:text-slate-500">
          <Link to="/home">
            <span>
              <IoIosArrowBack />
            </span>
          </Link>
        </li>
        <li className="animate-bounce">
          <span>Thirukkural</span>
        </li>
        <li className="flex items-center justify-around gap-2">
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
          {isDarkMode ? (
            <button type="button" title="darkmode" onClick={handleDarkMode}>
              <MdDarkMode className=" hidden  hover:text-slate-500 md:block" />
            </button>
          ) : (
            <button type="button" title="darkmode" onClick={handleDarkMode}>
              <MdDarkMode className="hidden  hover:text-slate-500 md:block" />
            </button>
          )}
        </li>
      </nav>
    </div>
  </>
);

NaviDetails.defaultProps = {
  handleDarkMode: () => {},
};

NaviDetails.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NaviDetails;
