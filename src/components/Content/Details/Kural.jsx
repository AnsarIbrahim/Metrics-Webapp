import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Thiru from '../thiruvalluvar-4.svg';

const Kural = ({ kuralData }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {}, [showTranslation]);

  const handleTranslateClick = () => {
    setShowTranslation(true);
  };

  const handleCloseClick = () => {
    setShowTranslation(false);
  };

  if (!kuralData) {
    return (
      <p className="absolute m-auto flex h-[100vh] w-full flex-col  items-center justify-center  overflow-y-scroll bg-pink-700 text-white">
        Loading...
      </p>
    );
  }

  return (
    <>
      <div className="absolute m-auto flex h-[100vh] w-full flex-col  items-center justify-center  overflow-y-scroll bg-pink-700 text-white">
        <div className="flex w-[80%] flex-col items-center justify-center gap-2  text-center text-xs sm:text-lg">
          <img src={Thiru} alt="img" className="img opacity-50" />
          {!showTranslation ? (
            <>
              <p>{kuralData.sect_eng}</p>
              <p>{kuralData.chapgrp_eng}</p>
              <p>{kuralData.chap_eng}</p>
              <p>{`${kuralData.number}: ${kuralData.eng}`}</p>
              <p>{kuralData.eng_exp}</p>
              <div>
                <button
                  type="button"
                  onClick={handleTranslateClick}
                  className="flex items-center justify-center rounded-full  bg-pink-500 px-6 py-1 hover:bg-slate-500"
                >
                  Translate
                </button>
              </div>
            </>
          ) : (
            <>
              <p>{kuralData.sect_tam}</p>
              <p>{kuralData.chapgrp_tam}</p>
              <p>{kuralData.chap_tam}</p>
              <div>
                <p>{`${kuralData.number}: ${kuralData.line1}`}</p>
                <p>{kuralData.line2}</p>
              </div>
              <p>{kuralData.tam_exp}</p>
              <div>
                <button
                  type="button"
                  onClick={handleCloseClick}
                  className="rounded-full bg-pink-500 px-6 py-1 hover:bg-slate-500"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

Kural.propTypes = {
  kuralData: PropTypes.shape({
    sect_eng: PropTypes.string.isRequired,
    chapgrp_eng: PropTypes.string.isRequired,
    chap_eng: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    eng_exp: PropTypes.isRequired,
    chapgrp_tam: PropTypes.string.isRequired,
    chap_tam: PropTypes.string.isRequired,
    sect_tam: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    tam_exp: PropTypes.string.isRequired,
  }),
};

Kural.defaultProps = {
  kuralData: null,
};

export default Kural;
