import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

const User_Static_Info = ({ userDataDisplay }) => {
  return (
    <div className="flex items-center gap-3">
      <div className=" w-24 h-24 rounded-[50%]  border-2 border-red-400">
        <img
          src={userDataDisplay.profile_image || userDataDisplay.Unknown_img}
          alt=""
          className=" w-24 h-24 rounded-[50%]  border-2 border-red-400"
        />
      </div>

      <div className="font font-normal text-">
        <p className=" font-bold">
          <span> {userDataDisplay.first_name} </span>
          <span> {userDataDisplay.middle_name}</span>
          <span> {userDataDisplay.last_name}</span>
        </p>

        <p>Role: {userDataDisplay.role || userDataDisplay.Unknown_Info}</p>
        <p>
          Email:{' '}
          {userDataDisplay.officialEmail ||
            userDataDisplay.Email ||
            userDataDisplay.Unknown_Info}
        </p>
        <p>
          Employee ID:
          {userDataDisplay.Employee_id || userDataDisplay.Unknown_Info}
        </p>
      </div>
    </div>
  );
};

function OffboardingReview({ ReviewPage, dataPage }) {
  // const [ReviewPage, setReviewData] = useState(ReviewPage);

  let userDataDisplay;
  const { userData } = useSelector((state) => state.reducer.loginReducer);

  if (dataPage === 'employee_Form_Review') {
    userDataDisplay = {
      Unknown_Info: 'User Info Unknown',
      Unknown_img:
        '  https://thumbs.dreamstime.com/b/portrait-black-man-student-eyeglasses-vector-illustration-cartoon-avatar-trendy-outfit-stylish-young-african-american-226517774.jpg',
      userInfo: userData,
      first_name: userData.first_name,
      middle_name: userData.middle_name,
      last_name: userData.last_name,
      role: 'Human Resource Executive',
      officialEmail: userData.official_email,
      Email: userData.email,
      Employee_id: userData.employee_id,
      profile_image: userData.profile_image,
    };
  } else if (dataPage === 'OffboardSingleReview') {
    userDataDisplay = {
      Unknown_Info: 'User Info Unknown',
      Unknown_img:
        '  https://thumbs.dreamstime.com/b/portrait-black-man-student-eyeglasses-vector-illustration-cartoon-avatar-trendy-outfit-stylish-young-african-american-226517774.jpg',
      userInfo: userData,
      first_name: userData.first_name,
      middle_name: userData.middle_name,
      last_name: userData.last_name,
      role: 'Human Resource Executive',
      officialEmail: userData.official_email,
      Email: userData.email,
      Employee_id: userData.employee_id,
      profile_image: userData.profile_image,
    };
  } else if (dataPage === 'AdminOffboardSingleReview') {
    userDataDisplay = {
      Unknown_Info: 'User Info Unknown',
      Unknown_img:
        '  https://thumbs.dreamstime.com/b/portrait-black-man-student-eyeglasses-vector-illustration-cartoon-avatar-trendy-outfit-stylish-young-african-american-226517774.jpg',
      userInfo: userData,
      first_name: ReviewPage.employee.first_name,
      middle_name: ReviewPage.employee.middle_name,
      last_name: ReviewPage.employee.last_name,
      role: 'Human Resource Executive',
      officialEmail: ReviewPage.employee.email,
      Email: ReviewPage.employee.email,
      Employee_id: ReviewPage.employee.company_id,
      profile_image: ReviewPage.employee.profile_image,
    };
  }

  const RenderDocumentPreview = ({ data }) => {
    if (data && data.type === 'application/pdf') {
      return (
        <div>
          <div className="mt-2">
            <p> Upload handwritten letters</p>
            <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
              <p className=" ">{data.name}</p>
            </div>
          </div>
        </div>
      );
    } else if (data) {
      return (
        <div>
          <div className="mt-2">
            <p> Upload handwritten letters</p>
            <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
              <p className=" ">{data.name}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="">
      <div className="mt-5">
        {userDataDisplay ? (
          <User_Static_Info userDataDisplay={userDataDisplay} />
        ) : (
          <h1> this is loading </h1>
        )}

        {ReviewPage ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-semibold mt-2">
                <div className="mb-3">
                  <h2 className="mb-2">Last Working Day</h2>
                  <p className=" text-[#667085]">
                    {ReviewPage.last_working_day}
                  </p>
                </div>
                <div>
                  <h2 className="mb-2  font-semibold">Department</h2>
                  <p className=" text-[#667085]">{ReviewPage.department}</p>
                </div>
              </div>

              <div className="font-semibold mt-4">
                <div className="mb-3">
                  <h2 className="mb-2">Resignation Date</h2>
                  <p className=" text-[#667085]">2023 - 7 - 28</p>
                </div>
                <div>
                  <h2 className="mb-2  font-semibold">Notice Period</h2>
                  <p className=" text-[#667085]">38 days</p>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <p> Reason for Resignation </p>
              <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
                <p className=" ">{ReviewPage.reason}</p>
              </div>
            </div>

            <div className="mt-2">
              <p> Have You Returned all Your Work Tools</p>
              <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
                <p className=" ">{ReviewPage.returned_work_tools}</p>
              </div>
            </div>

            <div className="mt-2">
              <p> Current Address</p>
              <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
                <p className=" ">{ReviewPage.current_address}</p>
              </div>
            </div>

            <div className="mt-2">
              <p> Personal Email</p>
              <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
                <p className=" ">{ReviewPage.personal_email}</p>
              </div>
            </div>

            <div className="mt-2">
              <p>Personal Phone Number</p>
              <div className="mt-2 w-full bg-[#EFF6FC] border outline-none py-2 px-2 rounded  break-all">
                <p className=" ">{ReviewPage.personal_phone_number}</p>
              </div>
            </div>

            <RenderDocumentPreview data={ReviewPage.letter_upload} />
          </>
        ) : (
          <>
            <div className="bg-[#EFF6FC] p-10 mt-5 font-semibold">
              <h1 className="text-center"> Data Not Found</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OffboardingReview;
