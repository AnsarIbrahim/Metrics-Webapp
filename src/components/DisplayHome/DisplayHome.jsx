import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa6';
import Footer from '../Footer/Footer';

const DisplayHome = () => (
  <>
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-pink-700 text-white">
      <h1 className=" flex flex-col items-center justify-center text-center text-6xl">
        Hi
        <br />
        <span className=" text-pink-950"> This is Ansar</span>
      </h1>
      <p>Welcome to My Page</p>
      <p className=" text-slate-400">Please Click Below!</p>
      <Link to="/home">
        <button
          type="button"
          className="h-6 w-6 animate-bounce hover:text-slate-700"
        >
          <FaArrowDown />
        </button>
      </Link>
    </div>
    <Footer />
  </>
);

export default DisplayHome;
