import React from 'react';
import Svgicons from '../../assets/Svgicons';

export const BulkSuccess = ({ see }) => {
  return (
    <div className="w-full px-5  ">
      <div className="w-full flex flex-col items-center justify-center px-6">
        <Svgicons action="thumbup" />
        <p
          className="text-3xl text-[#1D1C1C] font-['Manrope'] font-bold my-3
            "
        >
          success
        </p>
        <p className="text-base font-['Manrope'] font-normal">
          Great Job, your request has been carried out successfully. Click Done
          to continue
        </p>
      </div>
    </div>
  );
};
