import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createFolderAction } from '../../Feature/Admin/Onboarding/DocumentSlice';
import './AddStaff.css';

const PopModal = ({
  title,
  isOpened,
  onProceed,
  bulkupload,
  onClose,
  props,
  children,
}) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const proceedAndClose = (e) => {
    e.preventDefault();
    onProceed();
    onClose();
  };

  // const preventAutoClose = (e) => e.stopPropagation();
  const positions = useSelector(
    (state) => state.reducer.settingReducer.data.positions
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFolderAction(data));
  };

  return (
    isOpened && (
      <>
        <>
          <div className="fixed z-50 inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen  px-4 ">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
              </div>
              <div className="bg-white   rounded-lg overflow-hidden w-[60%] lg:w-[40%]  shadow-xl transform transition-all ">
                <div className="border-b bord   ">
                  <div className=" flex justify-between    px-7 py-3 items-center ">
                    <div>
                      <h3 className="text-[20px] font-semibold ">
                        Add new folder
                      </h3>
                    </div>

                    <div>
                      <button
                        className="bg-[#B4B4B43D]  py-1 px-2 rounded-sm"
                        // onClick={() => setShowmodal(false)}
                        onClick={() => onClose()}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 overflow-y-auto ">
                  {/* Add your content here */}
                  <div className="px-7">
                    <div className="popmodal__cover">
                      {/* <div
                        className=" flex items-center border-b border-stone-300
            py-3 px-8 mb-3"
                        onClick={onClose}
                      >
                        <div
                          className="capitalize mr-auto text-xl text-[#52525C]
            font-['Manrope'] font-semibold"
                        >
                          Add new folder
                        </div>

                        <div className="text-base w-8 h-7flex text-center rounded cursor-pointer bg-slate-300">
                          x
                        </div>
                      </div> */}
                      <div className="popmodal__content px-8">
                        <form>
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
                          >
                            file name
                          </label>
                          <br />
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD]
                px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
                font-['Manrope']"
                          />

                          <br />
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
                          >
                            Description
                          </label>
                          <br />
                          <input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD]
                px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
                font-['Manrope']"
                          />

                          <br />
                          <label
                            className=" text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
                          >
                            Sharing by Position
                          </label>
                          <br />
                          <select
                            name="position"
                            onChange={handleChange}
                            className="w-full rounded-lg border text-base text-[#667085] font-['Manrope'] border-solid border-[#D0D5DD]
                px-2 py-2 shadow bf-white outline-none mt-2 mb-2 "
                          >
                            <option selected disabled>
                              --select position--
                            </option>
                            {positions?.map((position) => (
                              <option key={position?.id} value={position?.id}>
                                {position?.name}
                              </option>
                            ))}
                          </select>

                          <div>
                            <label
                              className="capitalize text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
                            >
                              Grade
                            </label>

                            <input
                              type="text"
                              name="grade"
                              onChange={handleChange}
                              className="w-full rounded-lg border border-solid border-[#D0D5DD]
                px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
                font-['Manrope']"
                            />
                          </div>
                          <div className="flex justify-end mt-3 mb-3">
                            <button
                              type="button"
                              onClick={handleSubmit}
                              className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
                capitalize px-8 py-2 border-box font-['Inter'] "
                            >
                              create
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    )
  );
};

export default PopModal;
