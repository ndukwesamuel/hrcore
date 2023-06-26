import React from 'react';
import PostHeader from '../../../Components/Engagement/PostHeader';

import GlobeHemisphereWest from '../../../assets/Images/GlobeHemisphereWest.png';
import ThumbsUp from '../../../assets/Images/ThumbsUp.png';
import like from '../../../assets/Images/like.png';
import ChatCenteredDots from '../../../assets/Images/ChatCenteredDots.png';

function Announcements() {
  let maindata = [{}];
  let usserImg =
    'https://blogger.googleusercontent.com/img/a/AVvXsEhXJ1lfuk2J1uTzEQ0mEsevS-j9NPaoh3MpWS2jwCfAFGtBI2dyq-glTwkWt_nUCPNsrSsg_BaEVWTysFDG4wzINj9ibAIKMPE5aJT8bXV7KrlysimjX0zy4XeQakYap3mx520j1_by85d3wACAUEpj_0gKZbaUB5tOGZCG8sBrB7mVLEqtSN3rnRO5=s16000';

  return (
    <div className="w-[38rem] m-auto block">
      <PostHeader usserImg={usserImg} pagename="Announcements" />

      {maindata.map((item) => (
        <div className="bg-white mt-10 px-2 py-2   rounded-lg mb-2 ">
          <div className="flex justify-between">
            <div className="flex">
              <span>Posted By: Admin</span>
              <div className="bg-[#F1F1F1] rounded-3xl px-1 ">
                <img src={GlobeHemisphereWest} alt="" className=" inline" />
                <span>Public</span>
              </div>
            </div>

            <div>
              <span>2/7/2023</span>
            </div>
          </div>

          <div className=" mt-5">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHqq0QgC1HJdA/profile-displayphoto-shrink_800_800/0/1643130070981?e=2147483647&v=beta&t=dWVL_dhINLGpspWIJPLTb9-wTiv1d4sjWTve7RzWrFA"
              alt=""
              className="w-full block m-auto  rounded-xl  h-[33rem]"
            />
          </div>

          <div>
            <p className=" font-medium text-2xl">Title Of Post</p>
            <p className=" font-normal  text-sm ali text-justify">
              Porro fugit consequatur ipsa voluptas neque omnis. Modi ex
              inventore corrupti. Placeat dolorem enim impedit non ut totam.
              Perspiciatis fugit ratione ut. Omnis voluptatem repellat porro
              modi. Saepe id sunt maiores odio quam quaerat illum sunt aut.Porro
              fugit consequatur ipsa voluptas neque omnis. Modi ex inventore
              corrupti. Placeat dolorem enim impedit non ut totam. Perspiciatis
              fugit ratione ut. Omnis voluptatem repellat porro modi. Saepe id
              sunt maiores odio quam quaerat illum sunt aut.
            </p>
          </div>

          <div className="mt-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <img src={ThumbsUp} alt="" />
                  <span>60</span>
                </div>
                <div className="flex items-center">
                  <img src={like} alt="" />
                  <span>60</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="border text-[#2A72A8] px-4 py-1  rounded-3xl">
                  <img src={ChatCenteredDots} alt="" className="inline " />
                  <span className="text-[#2A72A8]">Comment </span>
                </div>
                <p className="  font-bold text-base text-[#2A72A8]">2k</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Announcements;
