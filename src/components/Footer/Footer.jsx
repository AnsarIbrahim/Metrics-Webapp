import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';

const Footer = ({ handleDarkMode, isDarkMode }) => (
  <>
    <div className="fixed bottom-0 z-40 flex h-10 w-full items-center justify-start  bg-pink-700 shadow  shadow-slate-100 dark:bg-gray-800 sm:h-10">
      <div className=" pl-10">
        {isDarkMode ? (
          <button type="button" title="darkmode" onClick={handleDarkMode}>
            <MdDarkMode className="items-center justify-start text-white sm:hidden" />
          </button>
        ) : (
          <button type="button" title="darkmode" onClick={handleDarkMode}>
            <MdDarkMode className="items-center justify-start text-slate-700 sm:hidden" />
          </button>
        )}
      </div>
      <div className="flex w-full items-center justify-center pr-10">
        <span className="text-black">©</span>
        &nbsp;
        <a
          className="text-pink-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600 motion-reduce:transition-none motion-reduce:hover:transform-none"
          href="https://github.com/AnsarIbrahim"
        >
          AnsarIbrahim
        </a>
        <span className="text-slate-400">&nbsp; 2023</span>
      </div>
    </div>
  </>
);

Footer.defaultProps = {
  handleDarkMode: () => {},
};

Footer.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Footer;
