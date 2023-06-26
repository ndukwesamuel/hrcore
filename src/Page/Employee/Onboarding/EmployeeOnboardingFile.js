import React, { useEffect } from 'react';
import TopBar2 from '../../../Components/AdminComponent/AdminOnboard/TopBar2';
import Svgicons from '../../../assets/Svgicons';
import { Filing } from '../../../Components/AdminComponent/AdminOnboard/Filing';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFolderContentAction } from '../../../Feature/Admin/Onboarding/DocumentSlice';
import {
  GetAllEmployeeFlieFun,
  reset_Employeefile,
} from '../../../Feature/Employee/Onboardoing/EmployeeFolderSlice';
import { CircularProgress } from '@mui/material';

const EmployeeOnboardingFile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetAllEmployeeFlieFun(id));

    return () => {
      // This cleanup function will be called when the component is unmounted
      dispatch(reset_Employeefile());
    };
  }, []);
  const { Allfiledata, isLoading } = useSelector(
    (state) => state.reducer.EmployeeFolderSlice
  );

  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        className="w-full px-4 box-border"
        style={{ backgroundColor: '#fff' }}
      >
        <TopBar2
          icon={<Svgicons action="upload" />}
          pageName="File Folder"
          navTitle="Home"
          showBack
          title=""
        />
        <section
          className="bg-white rounded-lg flex gap-4 flex-wrap
       p-2 box-border"
        >
          {isLoading ? (
            <div className="flex justify-center  w-full">
              <CircularProgress fontSize="small" />
            </div>
          ) : (
            <>
              {' '}
              {Allfiledata?.data.map((folder) => {
                return <Filing folder={folder} />;
              })}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default EmployeeOnboardingFile;
