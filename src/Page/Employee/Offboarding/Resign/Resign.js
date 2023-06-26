import React, { useState } from 'react';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import ResignForm from './ResignForm';

function Resign() {
  const navigate = useNavigate();

  const [resignform, setResignform] = useState('Details');

  return (
    <div className="flex justify-center font-normal text-[13px] ">
      <div className="w-[90%]  lg:w-[80%] 2xl:bg-black xl:w-[65%] ">
        <div className="bg-white border rounded-lg px-5 py-5  ">
          <div className="flex items-center cursor-pointer mb-2  ">
            <span onClick={() => navigate('/employee/exit')}>Offboading</span>

            <KeyboardArrowRightIcon />
            <span>Resignation</span>
          </div>
          <div className=" mt-10">
            <h2 className="mb-5 lg:ml-11">Fill in the information below</h2>

            <div className="  lg:w-[70%]   m-auto ">
              <div className="flex gap-3  mb-5">
                <div
                  className="flex items-center gap-1"
                  onClick={() => setResignform('Details')}
                >
                  <span
                    className={`${
                      resignform === 'Details'
                        ? 'bg-[#F72585]'
                        : ' bg-[#E4E4E4]'
                    }  inline-block   rounded-[50%]  h-6 w-6   text-center`}
                  ></span>
                  <span> Details</span>
                </div>

                <div
                  className="flex items-center gap-1"
                  onClick={() => setResignform('Review')}
                >
                  <span
                    className={`${
                      resignform === 'Review' ? 'bg-[#F72585]' : ' bg-[#E4E4E4]'
                    }  inline-block   rounded-[50%]  h-6 w-6   text-center`}
                  ></span>
                  <span> Review</span>
                </div>
              </div>

              <div className="w-full ">
                <ResignForm
                  resignform={resignform}
                  setResignform={setResignform}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resign;
