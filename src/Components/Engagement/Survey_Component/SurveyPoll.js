import React from 'react';
import { useState } from 'react';

const SurveyPoll = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [optionCounts, setOptionCounts] = useState({});

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePoll = () => {
    // event.preventDefault();
    setIsSubmitted(true);

    const updatedCounts = { ...optionCounts };
    updatedCounts[selectedOption] = updatedCounts[selectedOption]
      ? updatedCounts[selectedOption] + 1
      : 1;
    setOptionCounts(updatedCounts);
  };

  const getTotalVotes = () => {
    return Object.values(optionCounts).reduce(
      (total, count) => total + count,
      0
    );
  };

  const getPercentage = (count) => {
    const totalVotes = getTotalVotes();
    return totalVotes > 0 ? (count / totalVotes) * 100 : 0;
  };

  let progress = 50;
  return (
    <div>
      {isSubmitted && (
        <>
          <div className="mt-3">
            <h2 className="text-lg font-medium w-[85%]">{question}</h2>
          </div>
          {options.map((option) => (
            <div className="my-2 ">
              <div
                className="w-full  bg-[#F5F5F5] rounded h-10 mt-5 relative"
                key={option.id}
              >
                <div
                  className="h-full bg-[#2A72A8] bg-opacity-[0.21] rounded-r-[5px] pl-3 "
                  style={{ width: `${option.percent}%` }}
                />
                <span className="absolute  top-0   font-bold text-base  ml-3 mt-2">
                  {option.name}
                </span>

                <span className="absolute  top-0  right-5  font-bold text-base  ml-3 mt-2">
                  60%(25k)
                </span>
              </div>
            </div>
          ))}
        </>
      )}
      {!isSubmitted && (
        <>
          <h2 className="text-lg font-medium">{question}</h2>
          {options.map((option) => (
            <>
              <div className="my-4 ">
                <button
                  className=" bg-[#F5F5F5]   w-full h-10 rounded"
                  onClick={() => handlePoll(option.id)}
                >
                  {option.name}
                </button>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default SurveyPoll;
