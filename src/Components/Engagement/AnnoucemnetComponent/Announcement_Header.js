import React, { useEffect, useState } from 'react';
import CaretDown from '../../../assets/Images/CaretDown.png';
import Imageicon from '../../../assets/Images/Image.png';
import videoicon from '../../../assets/Images/Vector1.png';
import linkIcon from '../../../assets/Images/Link.png';
import GlobeHemisphereWest from '../../../assets/Images/GlobeHemisphereWest.png';

import DeleteIcon from '../../../assets/Images/Group16.png';
import AddImage from './AddImage';
import {
  AnnouncementsPost,
  AnnouncementsPostBody,
  resetAllAnnouncements,
  resetImage,
} from '../../../Feature/Admin/Engagement/AnnouncementsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Announcement_Header = ({
  usserImg,
  showmodal,
  setShowmodal,
  postImage,
  setpostImage,
  imagedata,
  setImagedata,
}) => {
  const dispatch = useDispatch();

  const { body, title, Post_image } = useSelector(
    (state) => state.reducer.AnnouncementsSlice
  );

  const [post_title, setPost_title] = useState(title);
  const [post_Body, setPost_Body] = useState(body);

  let img =
    '  https://thumbs.dreamstime.com/b/portrait-black-man-student-eyeglasses-vector-illustration-cartoon-avatar-trendy-outfit-stylish-young-african-american-226517774.jpg';

  const handdlePost = (e) => {
    e.preventDefault();

    setPost_title('');
    setPost_Body('');

    dispatch(resetAllAnnouncements());

    // setShowmodal(false);

    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('body', body);
    // formData.append('image', image);
  };

  //   useEffect(() => {
  //     dispatch(AnnouncementsPost(post_title));
  //     dispatch(AnnouncementsPostBody(post_Body));
  //   }, [post_title, post_Body]);

  const handleimageModal = () => {
    dispatch(AnnouncementsPost(post_title));
    dispatch(AnnouncementsPostBody(post_Body));
    setpostImage(true);
    setShowmodal(false);
  };

  const handle_RemoveImage = () => {
    setImagedata(null);
    dispatch(resetImage());
  };
  return (
    <>
      <div className=" ">
        <div className="flex gap-4 items-center ">
          <div>
            <img
              src={usserImg || img}
              alt=""
              className="w-14 h-14   border rounded-[50%]"
            />
          </div>

          <div>
            <p className="text- text-base">Admin Name</p>
            <div className="flex items-center border justify-center bg-[#F1F1F1]  rounded-3xl ">
              <img src={GlobeHemisphereWest} alt="" />
              <span>Public</span>
              <img src={CaretDown} alt="" />
            </div>
          </div>
        </div>

        <form action="" method="post" className="mt-4 ">
          <div className="mb-4">
            <label htmlFor=""> Post Title</label>
            <input
              type="text"
              name="post_title"
              onChange={(event) => setPost_title(event.target.value)}
              value={post_title}
              placeholder="Write the Suject Matter of Post"
              className="block border w-full rounded-lg mt-1 px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label htmlFor="" className="mb-1">
              Post Body
            </label>

            <textarea
              name="post_Body"
              onChange={(event) => setPost_Body(event.target.value)}
              value={post_Body}
              id=""
              cols="20"
              rows="5"
              className="block border w-full rounded-lg mt-1 px-3 py-2 outline-none"
            >
              What do you want to post about
            </textarea>
          </div>

          <div>
            {imagedata && (
              <div className="relative  mt-1">
                <img
                  src={imagedata}
                  alt="Selected image"
                  className="block m-auto"
                />{' '}
                <img
                  src={DeleteIcon}
                  alt="Selected image"
                  className=" top-0 absolute right-0 w-[5%] "
                  onClick={handle_RemoveImage}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between my-3 items-center ">
            <div className=" flex  gap-5 ">
              <div
                className="flex  items-center cursor-pointer"
                onClick={handleimageModal}
              >
                <img src={Imageicon} alt="" className=" w-6" />
                <span>Image</span>
              </div>

              <div className="flex  items-center cursor-pointer">
                <img src={videoicon} alt="" className=" w-6" />
                <span>Video</span>
              </div>

              <div className="flex  items-center cursor-pointer">
                <img src={linkIcon} alt="" className=" w-6" />
                <span>Link</span>
              </div>
            </div>

            <div>
              <button
                className="bg-[#2A72A8] text-white px-[20px] py-1   rounded"
                onClick={handdlePost}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Announcement_Header;
