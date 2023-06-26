import React from 'react';
import UseTable from '../../EmployeeDirTable/UseTable';

const CompanyComp = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-white w-full">
        <div className="employeeleavecomponent__body">
          <div
            className="flex justify-between items-center capitalize px-[17px] py-[17px]
           gap-1"
          >
            <div className="employeeleavecomponent__left">
              my leave request
              <span className="number_of_request">200 request</span>
            </div>
            <div
              className="flex flex-col items-end px-5 py-1.5 border border-solid gap-1
             border-[#eaecf0] rounded-lg"
            >
              <p
                className="capitalize p-0 m-0 text-[#667085] text-[10px] 
              font-[Inter] font-normal "
              >
                super Admin
              </p>
              <div
                className="capitalize text-black text-base
              font-[Manrope] font-bold"
              >
                settings
              </div>
            </div>
          </div>
          {/* <UseTable id="id" columns={columns} data={data} /> */}
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default CompanyComp;
