import React from 'react';
import PropTypes from 'prop-types';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Next = ({ hasPreviousPage, hasNextPage }) => (
  <>
    <div className="fixed z-0 flex h-full w-full items-center justify-center p-2 dark:bg-slate-800 dark:text-white md:p-5 lg:p-1">
      <div className="z-0 flex w-full items-center justify-between">
        {hasPreviousPage && (
          <NavLink to="/home">
            <button type="button" className=" text-pink-600 dark:text-white">
              <FaCircleChevronLeft />
            </button>
          </NavLink>
        )}
        {hasNextPage && (
          <NavLink to="/next">
            <button type="button" className="text-pink-600 dark:text-white">
              <FaCircleChevronRight />
            </button>
          </NavLink>
        )}
      </div>
    </div>
  </>
);

Next.propTypes = {
  hasPreviousPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};

export default Next;
