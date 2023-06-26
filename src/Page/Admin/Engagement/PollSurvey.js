import { useState } from 'react';

import PostHeader from '../../../Components/Engagement/PostHeader';

import GlobeHemisphereWest from '../../../assets/Images/GlobeHemisphereWest.png';
import ThumbsUp from '../../../assets/Images/ThumbsUp.png';
import like from '../../../assets/Images/like.png';
import ChatCenteredDots from '../../../assets/Images/ChatCenteredDots.png';
import SurveyPoll from '../../../Components/Engagement/Survey_Component/SurveyPoll';

function PollSurvey() {
  let completedPolls = 200;
  let totalPolls = 200;

  const progress = Math.round((completedPolls / totalPolls) * 100);
  let maindata = [{}, {}];
  let usserImg =
    'https://blogger.googleusercontent.com/img/a/AVvXsEhXJ1lfuk2J1uTzEQ0mEsevS-j9NPaoh3MpWS2jwCfAFGtBI2dyq-glTwkWt_nUCPNsrSsg_BaEVWTysFDG4wzINj9ibAIKMPE5aJT8bXV7KrlysimjX0zy4XeQakYap3mx520j1_by85d3wACAUEpj_0gKZbaUB5tOGZCG8sBrB7mVLEqtSN3rnRO5=s16000';

  const [voteData, setVoteData] = useState();
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  let options = [
    { name: 'ronaldo', percent: 10, id: 1 },
    { name: 'messi', percent: 10, id: 2 },
    { name: 'ronney', percent: 10, id: 3 },
    { name: 'smaheart', percent: 40, id: 3 },
  ];

  return (
    <div>
      <div className="w-[38rem] m-auto block">
        <PostHeader usserImg={usserImg} pagename="survey" />

        {/* <div>
          <Poll
            question="What is your favorite color?"
            options={['Red', 'Blue', 'Green', 'Yellow']}
          />
        </div> */}

        {maindata.map((item) => (
          <div className="bg-white mt-10  px-4 py-2   rounded-lg mb-2 ">
            <div className="flex justify-between">
              <div className="flex">
                <span>Posted By: Admin</span>
              </div>

              <div>
                <span>2/7/2023</span>
              </div>
            </div>
            <div>
              <SurveyPoll
                question="What is your favorite player?"
                options={options}
              />
            </div>

            <div className="mt-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[#2A72A8]">40k response</p>
                  <div className="flex items-center"></div>
                </div>
                <div className="border text-[#2A72A8] px-4 py-1  rounded-3xl">
                  <span className="text-[#2A72A8]">Publish </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PollSurvey;
