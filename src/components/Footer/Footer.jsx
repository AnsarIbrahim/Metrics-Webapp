import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

const Footer = () => (
  <>
    <div className="fixed bottom-0 z-40 flex h-10 w-full items-center justify-start bg-pink-700 text-white">
      <div className="p-4 hover:text-slate-600 sm:hidden">
        <MdOutlineDarkMode />
      </div>
      <div className=" flex w-full items-center justify-center">
        <span>©</span>
        <a
          href="https://github.com/AnsarIbrahim"
          className=" underline hover:text-black hover:underline-offset-4"
        >
          Ansar Ibrahim
        </a>
        <span className="">&nbsp; 2023</span>
      </div>
    </div>
  </>
);

export default Footer;
