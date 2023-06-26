import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AnnouncementsPostImage,
  resetImage,
} from '../../../Feature/Admin/Engagement/AnnouncementsSlice';
import CancelIcon from '@mui/icons-material/Cancel';
function AddImage({
  postImage,
  showmodal,
  setpostImage,
  setShowmodal,
  imagedata,
  setImagedata,
}) {
  const dispatch = useDispatch();

  const handleclose = () => {
    setpostImage(false);
    setShowmodal(true);
    setImagedata(null);
    dispatch(resetImage());
  };

  const handle_done = () => {
    setpostImage(false);
    setShowmodal(true);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagedata(reader.result);
      dispatch(AnnouncementsPostImage(reader.result));
    };
    reader.readAsDataURL(file);
  };

  const handle_RemoveImage = () => {
    setImagedata(null);
    dispatch(resetImage());
  };

  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto ">
        <div className="flex items-center justify-center min-h-screen  px-4 ">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
          </div>
          <div className="bg-white   rounded-lg overflow-hidden w-[60%] lg:w-[40%]  shadow-xl transform transition-all ">
            <div className="border-b mb-4 ">
              <div className=" flex justify-between  px-7 py-3 items-center ">
                <div>
                  <h3 className="text-[20px] font-semibold ">Add Image</h3>
                </div>

                <div>
                  <button
                    className="bg-[#B4B4B43D]  py-1 px-2 rounded-sm"
                    onClick={handleclose}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 overflow-y-auto ">
              <div className="px-7">
                {!imagedata && (
                  <div className=" flex justify-center my-7">
                    <div>
                      <div className="text-center mb-7">
                        <p>Not More Than 2MB</p>
                      </div>
                      <div>
                        <label
                          htmlFor="image-upload"
                          className="custom-file-upload border  px-7 py-3 bg-[#2A72A81A] text-[#2A72A8] font-medium  text-xl  rounded-xl"
                        >
                          Select Your Image to Share
                        </label>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageSelect}
                          style={{ display: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="  ">
                  {imagedata && (
                    <div className="flex justify-center  ">
                      <div className=" w-[60%] ">
                        <img
                          src={imagedata}
                          alt="Selected image"
                          className="block m-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="my-4  px-7 text-white  gap-3 flex justify-end">
                  <button
                    onClick={handle_RemoveImage}
                    className="border border-[#2A72A8] text-[#2A72A8] py-2 px-3 rounded-lg  "
                  >
                    Cancle
                  </button>
                  <button
                    onClick={handle_done}
                    className="bg-[#667085] py-2 px-3 rounded-lg  "
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddImage;
