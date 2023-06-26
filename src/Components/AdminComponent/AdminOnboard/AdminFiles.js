import React, { useEffect } from 'react';
import Svgicons from '../../../assets/Svgicons';
import { Filing } from './Filing';
import { useDispatch, useSelector } from 'react-redux';

import { getFolderContentAction } from '../../../Feature/Admin/Onboarding/DocumentSlice';
import { useParams } from 'react-router-dom';
import TopBar2 from './TopBar2';

const AdminFiles = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getFolderContentAction(id));
  }, []);
  const folders = useSelector(
    (state) => state.reducer.folderReducer.foldercontent
  );

  return (
    <div className="w-full px-4 box-border" style={{ backgroundColor: '#fff' }}>
      <TopBar2
        icon={<Svgicons action="upload" />}
        pageName="File Folder "
        navTitle="Home"
        showBack
        title="Add New"
      />
      <section
        className="bg-white rounded-lg flex gap-4 flex-wrap
       p-2 box-border"
      >
        {folders?.map((folder) => {
          return <Filing folder={folder} />;
        })}
      </section>
    </div>
  );
};

export default AdminFiles;
