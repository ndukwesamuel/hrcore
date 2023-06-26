import { KeyboardReturn } from '@mui/icons-material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PopModal from '../AddStaff/PopModal';
import Popupmodal from '../Popupmodal/Popupmodal';
import AddImage from './AnnoucemnetComponent/AddImage';

import Announcement_Header from './AnnoucemnetComponent/Announcement_Header';
import Survey from './Survey_Component/Survey';

function PostHeader({ usserImg, pagename }) {
  const { body, title, Post_image } = useSelector(
    (state) => state.reducer.AnnouncementsSlice
  );

  const [showmodal, setShowmodal] = useState(false);
  const [postImage, setpostImage] = useState(false);

  //   this is the post data
  const [imagedata, setImagedata] = useState(Post_image);

  //   this is the post data

  let img =
    '  https://thumbs.dreamstime.com/b/portrait-black-man-student-eyeglasses-vector-illustration-cartoon-avatar-trendy-outfit-stylish-young-african-american-226517774.jpg';

  const Survey_Header = () => {
    return <> this is a testing stag </>;
  };

  const OpenModal = () => {
    return (
      <>
        {postImage && (
          <AddImage
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            setpostImage={setpostImage}
            postImage={postImage}
            imagedata={imagedata}
            setImagedata={setImagedata}
          />
        )}
        {showmodal && (
          <>
            <div className="fixed z-50 inset-0 overflow-y-auto ">
              <div className="flex items-center justify-center min-h-screen  px-4 ">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
                </div>
                <div className="bg-white   rounded-lg overflow-hidden w-[60%] lg:w-[40%]  shadow-xl transform transition-all ">
                  <div className="border-b bord   ">
                    <div className=" flex justify-between   px-7 py-3 items-center ">
                      <div>
                        <h3 className="text-[20px] font-semibold ">
                          Create Post
                        </h3>
                      </div>

                      <div>
                        <button
                          className="bg-[#B4B4B43D]  py-1 px-2 rounded-sm"
                          onClick={() => setShowmodal(false)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 overflow-y-auto ">
                    {/* Add your content here */}
                    <div className="px-7">
                      {pagename === 'Announcements' ? (
                        <Announcement_Header
                          usserImg={usserImg}
                          showmodal={showmodal}
                          setShowmodal={setShowmodal}
                          postImage={postImage}
                          setpostImage={setpostImage}
                          imagedata={imagedata}
                          setImagedata={setImagedata}
                        />
                      ) : (
                        <Survey setShowmodal={setShowmodal} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  //   console.log(showmodal);

  return (
    <>
      <OpenModal />

      <div onClick={() => setShowmodal(true)} className="  ">
        <div className="bg-white flex justify-center w-full   gap-4 py-5  rounded-lg">
          <div>
            <img
              src={usserImg || img}
              alt=""
              className="w-14 h-14   border rounded-[50%]"
            />
          </div>

          <div className="border w-[70%] items-center flex rounded-3xl pl-5">
            Start Post
          </div>
        </div>
      </div>
    </>
  );
}

export default PostHeader;
