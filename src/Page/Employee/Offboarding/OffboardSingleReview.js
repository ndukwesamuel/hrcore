import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OffboardingReview from '../../../Components/Employee/Offboarding/OffboardingReview';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Employee_Get_Single_offboardFun } from '../../../Feature/Admin/Offboard/OffboardSlice';

function OffboardSingleReview() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ResignData } = useSelector((state) => state.reducer.ResignSlice);

  const { single_Offboading, create_Employee_request } = useSelector(
    (state) => state.reducer.OffboardSlice
  );

  useEffect(() => {
    dispatch(Employee_Get_Single_offboardFun(id));

    return () => {};
  }, [dispatch]);

  return (
    <div className="flex justify-center font-normal text-[13px] ">
      <div className="w-[90%]  lg:w-[80%] 2xl:bg-black xl:w-[65%] ">
        <div className="bg-white border rounded-lg px-5 py-5  ">
          <div className="flex justify-between lg:w-[90%] ">
            <div className="flex items-center cursor-pointer mb-2  ">
              <span onClick={() => navigate('/employee/exit')}>Offboading</span>

              <KeyboardArrowRightIcon />
              <span>Resignation</span>
            </div>

            <div className=" font-medium  text-xs  ">
              <button className=" text-white  border bg-[#2A72A8]  py-1 px-4 rounded mr-3">
                Cancel Resigation
              </button>
            </div>
          </div>

          <div className=" lg:w-[75%] lg:m-auto">
            <OffboardingReview
              ReviewPage={single_Offboading?.data}
              dataPage="OffboardSingleReview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffboardSingleReview;
