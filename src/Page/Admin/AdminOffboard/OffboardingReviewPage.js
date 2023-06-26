import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OffboardingReview from '../../../Components/Employee/Offboarding/OffboardingReview';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import {
  Admin_Approved_offboarding_statusFun,
  Admin_Get_Single_offboardFun,
  reset_adminAprovedStatus,
} from '../../../Feature/Admin/Offboard/OffboardSlice';

function OffboardingReviewPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { ResignData } = useSelector((state) => state.reducer.ResignSlice);
  const {
    admin_single_offboard,
    adminAprovedStatus,
    adminAprovedStatus_isSuccess,
  } = useSelector((state) => state.reducer.OffboardSlice);

  useEffect(() => {
    dispatch(Admin_Get_Single_offboardFun(id));

    dispatch(reset_adminAprovedStatus());
    return () => {};
  }, [dispatch, adminAprovedStatus_isSuccess]);

  const handleAprovedStatus = (status_Data) => {
    dispatch(
      Admin_Approved_offboarding_statusFun({
        id,
        status_Data,
      })
    );
  };

  return (
    <div className="flex justify-center font-normal text-[13px] ">
      <div className="w-[90%]  lg:w-[80%] 2xl:bg-black xl:w-[65%] ">
        <div className="bg-white border rounded-lg px-5 py-5  ">
          <div className="flex justify-between lg:w-[90%] ">
            <div className="flex items-center cursor-pointer mb-2  ">
              <span onClick={() => navigate('/admin/employee/exit')}>
                Offboading
              </span>

              <KeyboardArrowRightIcon />
              <span>Resignation</span>
            </div>

            {admin_single_offboard && (
              <>
                {admin_single_offboard?.data.status !== 'pending' ? (
                  <div className=" font-medium  text-xs text-center ">
                    <button className=" text-white text-center border bg-[#2A72A8]  py-1 px-2 rounded mr-3">
                                    Employee has been Aproved
                    </button>
                  </div>
                ) : (
                  <div className=" font-medium  text-xs  ">
                    <button
                      className=" text-white  border bg-[#2A72A8]  py-1 px-4 rounded mr-3"
                      onClick={() => handleAprovedStatus('declined')}
                    >
                      Decline
                    </button>

                    <button
                      onClick={() => handleAprovedStatus('approved')}
                      className=" text-white  border bg-[#2A72A8]  py-1 px-4 rounded mr-3"
                    >
                      Approve
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {admin_single_offboard && (
            <>
              <div className=" lg:w-[75%] lg:m-auto">
                <OffboardingReview
                  ReviewPage={admin_single_offboard?.data}
                  dataPage="AdminOffboardSingleReview"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OffboardingReviewPage;
