import React, { useState } from 'react';

const Kural = () => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleTranslateClick = () => {
    setShowTranslation(true);
  };

  const handleCloseClick = () => {
    setShowTranslation(false);
  };

  return (
    <>
      <div className="absolute m-auto flex h-full w-full flex-col items-center justify-center gap-5 overflow-y-scroll  bg-pink-700 pb-20  pt-[85%] text-white sm:pt-32">
        <div className="flex w-[80%] flex-col items-center justify-center gap-5 sm:text-justify">
          <h1>Prologue</h1>
          <h3>The Praise of God</h3>
          <p>
            A&apos; leads letters; the Ancient Lord Leads and lords the entire
            world
          </p>
          <p>
            As the letter A is the first of all letters, so the eternal God is
            first in the world
          </p>
        </div>
        {!showTranslation && (
          <button
            type="button"
            onClick={handleTranslateClick}
            className="rounded-full bg-pink-500 px-6 py-1 hover:bg-slate-500"
          >
            Translate
          </button>
        )}
        {showTranslation && (
          <div className="flex w-[80%] flex-col items-center justify-center gap-5 sm:text-justify">
            <h2>அறத்துப்பால்</h2>
            <h4>பாயிரவியல்</h4>
            <p>
              அகர முதல எழுத்தெல்லாம் ஆதி
              <span>பகவன் முதற்றே உலகு</span>
            </p>
            <p className="">
              அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும்
              உயிர்களுக்கு முதன்மை
            </p>
            <button
              type="button"
              onClick={handleCloseClick}
              className="rounded-full bg-pink-500 px-6 py-1 hover:bg-slate-500"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Kural;
