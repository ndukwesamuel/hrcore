import React from 'react';
import { useState } from 'react';
import Svgicons from '../../assets/Svgicons';
import PopModal2 from './PopModal2';

const PopContent = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center
    p-2"
    >
      <div className="w-full">
        <Svgicons action="thumbup" />
        <p>success</p>
        <p>
          Great Job, your request has been carried out successfully. Click Done
          to continue
        </p>
        <button>Done</button>
      </div>
    </div>
  );
};

export default PopContent;
