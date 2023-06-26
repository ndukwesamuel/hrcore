import React, { useEffect, useState } from 'react';
import Basicinfo from '../../../Components/UpdateProfile/Basicinfo/Basicinfo';
import Organization from '../../../Components/UpdateProfile/Organization/Organization';
import Qualifications from '../../../Components/UpdateProfile/Qualifications/Qualifications';
import Pensionhmo from '../../../Components/UpdateProfile/Pensionhmo/Pensionhmo';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import pageLoader, {
  loaderReset,
  setLoading,
} from '../../../utilities/PageLoader';
import { Headbar } from '../../../Components/Headbar/Headbar';
import ProfileComponent from '../../../Components/Employee/Onboarding/Profile/ProfileComponent';

const Updateprofile = () => {
  const [shown, setShown] = useState(1);

  const dat = useSelector((state) => state.reducer);

  const { data } = useSelector(
    (state) => state.reducer.employeeDetailSliceReducer
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (data === undefined || data.length === 0) {
      dispatch(setLoading());
      dispatch(getUserProfile(id));
      dispatch(loaderReset());
    }
  }, [data]);

  const nextStep = () => {
    setShown(shown + 1);
  };

  const nextStep_title_clickTab = (data) => {
    setShown(data);
  };

  const prevStep = () => {
    setShown(shown - 1);
  };
  let section;
  switch (shown) {
    case 1:
      section = (
        <Basicinfo
          nextStep={nextStep}
          nextStep_title_clickTab={nextStep_title_clickTab}
          showData={shown}
          profile={data}
        />
      );
      break;

    case 2:
      section = (
        <Organization
          prevStep={prevStep}
          nextStep={nextStep}
          nextStep_title_clickTab={nextStep_title_clickTab}
          showData={shown}
          profile={data}
        />
      );
      break;
    case 3:
      section = (
        <Qualifications
          prevStep={prevStep}
          nextStep={nextStep}
          nextStep_title_clickTab={nextStep_title_clickTab}
          showData={shown}
          profile={data}
        />
      );
      break;
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        className="flex flex-col flex-1 w-full"
        style={{ backgroundColor: '#eff6fc' }}
      >
        <Headbar />
        {section}
      </div>
    </div>
  );
};

export default Updateprofile;
