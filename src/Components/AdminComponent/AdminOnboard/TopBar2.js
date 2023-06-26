import React, { useState } from 'react';
import PopModal from '../../AddStaff/PopModal';
import { useNavigate } from 'react-router-dom';
import '../../EmployeeDirTable/EmployeeDirTable.scss';

import FileUploads from '../../AddStaff/FileUploads';

const TopBar2 = ({
  icon,
  pageName,
  showBack,
  navTitle,
  title,
  search,
  color,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const OpeningModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const ClosingModal = () => {
    setOpen(false);
    return window.location.reload(true);
  };

  return (
    <>
      <div
        className={`h-[72px] w-full bg-${color} flex items-center px-4 py-1`}
      >
        <div className="mr-auto  font-['Manrope'] font-semibold flex gap-x-4 items-center ">
          <div className="flex gap-x-2 items-center">
            {showBack && (
              <>
                <span
                  className="text-[#667085] text-[15px] cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  {navTitle}
                </span>
                <span className="text-[#667085] text-[15px]">&gt;</span>
              </>
            )}
            <span className="text-xl tex-black ">{pageName}</span>
          </div>
          <div>
            {search && (
              <form className="employeedirtable__search">
                <input type="search" placeholder="Search by Name or ID" />
                <button>search</button>
              </form>
            )}
          </div>
        </div>

        <div>
          {title && (
            <button
              className="bg-[#2A72A8] rounded text-white font-['Manrope']
        font-bold text-xs px-3 py-2 flex gap-x-1"
              onClick={OpeningModal}
            >
              <span>{icon}</span>
              {title}
            </button>
          )}
        </div>
      </div>

      {open && (
        <FileUploads
          children=""
          isOpened={OpeningModal}
          onClose={ClosingModal}
        ></FileUploads>
      )}
    </>
  );
};

export default TopBar2;
