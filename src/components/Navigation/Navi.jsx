import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsMicFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';
import './Navi.css';

const Navigation = ({ handleDarkMode, isDarkMode }) => (
  <>
    <div className="fixed z-40 w-full bg-pink-700 text-white dark:bg-slate-800 dark:text-white">
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
              <MdDarkMode className="md:bl hidden  hover:text-slate-500 md:block" />
            </button>
          ) : (
            <button type="button" title="darkmode" onClick={handleDarkMode}>
              <MdDarkMode className="md:bl hidden  hover:text-slate-500 md:block" />
            </button>
          )}
        </li>
      </nav>
    </div>
  </>
);

Navigation.defaultProps = {
  handleDarkMode: () => {},
};

Navigation.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Navigation;
