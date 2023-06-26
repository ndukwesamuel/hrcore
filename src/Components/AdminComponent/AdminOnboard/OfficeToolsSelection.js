import React, { useEffect, useState } from 'react';
import UseTable from '../../EmployeeDirTable/UseTable';
import TopBar from './TopBar';
import { Blocks } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployeeDetailToolsAction } from '../../../Feature/Admin/Onboarding/OfficeToolsSlice';
import { useParams } from 'react-router-dom';
import { AssignOfficeToolsAction } from '../../../Feature/Admin/Onboarding/OfficeToolsSlice';
import { useLocation } from 'react-router-dom';
import Table from '../../Table/Table';
export const OfficeToolsSelection = () => {
  const [checkedvalue, setCheckedvalue] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const { rowData } = location;

  const viewAction = (id) => {};
  const handleCheck = (e) => {
    const checked = e.target.checked;
    setCheckedvalue(checked ? [...checkedvalue, e.target.value] : '');
  };
  const data = { tools: checkedvalue, id: id };

  const handleAssign = async () => {
    setLoading(true);
    await dispatch(AssignOfficeToolsAction(data));
    setLoading(false);
  };

  const detailTools = useSelector(
    (state) => state.reducer.settingReducer?.data['office-tools']
  );

  const fileHeader = [
    {
      name: 'Check',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'Office Tool',
      error: 'No Name',
      title: 'Office Tool',
      data: 'name',
    },
    {
      name: 'description',
      data: 'description',
      error: 'No Id',
      title: 'Description',
    },

    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [{ value: 'Unassign Tool' }];

  return (
    <div className="w-full px-4">
      <section>
        <div className="my-2">
          <TopBar pageName="File Folder" navTitle="EmployeeList" showBack />
        </div>
        <div
          className="flex gap-x-6 items-center mt-2 mb-4 bg-[#F8F8F8] p-2
        font-['Manrope'] text-base text-black"
        >
          <div className="font-bold">My Tools:</div>
          <div className="font-semibold">
            Employee Name:
            <span className="font-medium ml-1">
              {rowData?.first_name}-{rowData?.last_name}
            </span>
          </div>
          <div className="font-semibold">
            Employee ID:
            <span className="font-medium ml-1">{rowData?.employee_id}</span>
          </div>
        </div>
        <div
          className="flex gap-x-2 items center mb-4 border
        border-solid border-[#D8DEDF] bg-[#FCFCFC] rounded-lg py-4 px-2"
        >
          {rowData?.office_tools?.map((tool) => (
            <div
              className="relative  flex border border-[#D8DEDF] rounded-[25px]
            px-4 py-1 box-border border-solid"
            >
              {tool?.slug}
              <span
                className="absolute bottom-5 right-1
            bg-[#F4F4F4] w-[15px] h-[15px] flex justify-center items-center
            border border-solid border-[#EBEBEB] p-2
            rounded-[36px] text-[#2A72A8] font-medium cursor-pointer"
              >
                x
              </span>
            </div>
          ))}
        </div>
        <TopBar
          title="Assign"
          search
          color="white"
          nomodal="false"
          loading
          handleAssign={handleAssign}
        />
        {/* <UseTable
          id="id"
          link="/admin/onboarding/document"
          columns={columns}
          data={detailTools}
          tools={rowData}
          viewAction={viewAction}
          handleCheck={handleCheck}
        /> */}

        <Table
          linkTo={`/admin/documents/office-tool`}
          type={`directory`}
          data={detailTools}
          columns={fileHeader}
          menu={rowMenu}
        />
      </section>
    </div>
  );
};
