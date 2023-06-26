import React, { useState, useEffect } from 'react';
import UserCircle from '../../../assets/Images/UserCircle.png';
import HouseIcon from '../../../assets/Images/House.png';
import SuitcaseIcon from '../../../assets/Images/Suitcase.png';
import BuildingsIcon from '../../../assets/Images/Buildings.png';
import LockOpenIcon from '../../../assets/Images/LockOpen.png';
import FirstAidKitIcon from '../../../assets/Images/FirstAidKit.png';
import { getAdminOneEmployeeAction } from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { useParams } from 'react-router-dom';

function AdminProfileBody({ profile }) {
  const [activeLink, setActiveLink] = useState('Basic');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="">
      <nav className="flex items-center  font-semibold justify-between px-12">
        <div className="cursor-pointer">
          <p
            onClick={() => handleClick('Basic')}
            className={
              activeLink === 'Basic'
                ? 'bg-brand-blue tx-white px-4 py-2 mr-4 text-base rounded'
                : 'mr-4 tx-ghost-text text-base'
            }
          >
            Basic Information
          </p>
        </div>
        <div className="cursor-pointer">
          <p
            onClick={() => handleClick('Organization')}
            className={
              activeLink === 'Organization'
                ? 'bg-brand-blue tx-white px-4 py-2 mr-4 text-base rounded'
                : 'mr-4 tx-ghost-text text-base'
            }
          >
            Organization
          </p>
        </div>
        <div className="cursor-pointer">
          <p
            onClick={() => handleClick('Education')}
            className={
              activeLink === 'Education'
                ? 'bg-brand-blue tx-white px-4 py-2 mr-4 text-base rounded'
                : 'mr-4 tx-ghost-text text-base'
            }
          >
            Education
          </p>
        </div>
        <div className="cursor-pointer">
          <p
            onClick={() => handleClick('Experience')}
            className={
              activeLink === 'Experience'
                ? 'bg-brand-blue tx-white px-4 py-2 mr-4 text-base rounded'
                : 'mr-4 tx-ghost-text text-base'
            }
          >
            Experience
          </p>
        </div>
      </nav>

      {activeLink === 'Basic' && (
        <main className="w-[70%]  m-auto">
          <div className="flex bg-outlinegray px-10 py-5 mt-10">
            <div>
              <img src={UserCircle} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <p>
                Date Of Birth:
                {/* November 22nd, 1870 */}
                <span className="font-normal">{profile?.dob}</span>
              </p>
              <p>
                Gender: <span className="font-normal">{profile?.gender}</span>
              </p>
              <p>
                Marital Status:{' '}
                <span className="font-normal">{profile?.marital_status}</span>
              </p>
            </div>
          </div>

          <div className="flex bg-outlinegray px-10 py-5 mt-10">
            <div>
              <img src={HouseIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <p>
                State of Origin:
                <span className="font-normal"> Lagos State</span>
              </p>
              <p>
                LGA of Origin:{' '}
                <span className="font-normal">Lagos Mainland </span>
              </p>
              <p>
                State of Residence:{' '}
                <span className="font-normal"> Lagos State</span>
              </p>
            </div>
          </div>
        </main>
      )}

      {activeLink === 'Organization' && (
        <main className="w-[70%]  m-auto">
          <div className="flex bg-outlinegray px-10 py-5 mt-10 items-center">
            <div>
              <img src={SuitcaseIcon} alt="" />
              <img src={SuitcaseIcon} alt="" />
              <img src={BuildingsIcon} alt="" />
              <img src={BuildingsIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <p>
                Grade:
                <span className="font-normal"> Officer 2</span>
              </p>
              <p>
                Position: <span className="font-normal"> HR Executive</span>
              </p>
              <p>
                Department: <span className="font-normal"> Recruitment</span>
              </p>

              <p>
                Branch: <span className="font-normal"> Head Office</span>
              </p>
            </div>
          </div>

          <div className="flex bg-outlinegray px-10 py-5 mt-10 ">
            <div>
              <img src={BuildingsIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <div>
                <p className="text-[16px]">Leave Approver</p>

                <div className="flex gap-3">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                      className="w-[37.37px]  h-[37.37px] rounded-full"
                    />
                  </div>

                  <div className="text-base font-medium">
                    <p className="">Sylvia Durgan</p>
                    <p className="font-normal text-xs">
                      Principal Security Orchestrator
                    </p>
                  </div>
                </div>

                <p className="text-[16px]">Leave Approver 2</p>

                <div className="flex gap-3 mt-2">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                      className="w-[37.37px]  h-[37.37px] rounded-full"
                    />
                  </div>

                  <div className="text-base font-medium">
                    <p className="">Sylvia Durgan</p>
                    <p className="font-normal text-xs">
                      Principal Security Orchestrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-outlinegray px-10 py-5 mt-10 ">
            <div>
              <img src={BuildingsIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <div>
                <p className="text-[16px]">Appraiser 1: </p>

                <div className="flex gap-3">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                      className="w-[37.37px]  h-[37.37px] rounded-full"
                    />
                  </div>

                  <div className="text-base font-medium">
                    <p className="">Sylvia Durgan</p>
                    <p className="font-normal text-xs">
                      Principal Security Orchestrator
                    </p>
                  </div>
                </div>

                <p className="text-[16px]">Appraiser 2: </p>

                <div className="flex gap-3 mt-2">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                      className="w-[37.37px]  h-[37.37px] rounded-full"
                    />
                  </div>

                  <div className="text-base font-medium">
                    <p className="">Sylvia Durgan</p>
                    <p className="font-normal text-xs">
                      Principal Security Orchestrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-outlinegray px-10 py-5 mt-10 ">
            <div>
              <img src={LockOpenIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <p>Pension:</p>
              <p>Pension Number: </p>
            </div>
          </div>

          <div className="flex bg-outlinegray px-10 py-5 mt-10 ">
            <div>
              <img src={FirstAidKitIcon} alt="" />
            </div>

            <div className="font-semibold ml-4 text-base">
              <p>On HMO: No</p>
              <p>HMO: </p>
              <p>HMO Number: </p>
              <p>HMO Plan: </p>
              <p>HMO Hospital: </p>
              <p>HMO Status: </p>
            </div>
          </div>
        </main>
      )}

      {activeLink === 'Education' && (
        <main className="w-[70%]  m-auto">
          <div className=" bg-outlinegray px-10 py-5 mt-10 items-center">
            <p className="text-base font-bold ">Education</p>

            <div className="mt-2">
              <div className="flex font-bold justify-between">
                <p>School </p>

                <p>Degree</p>

                <p>Year Completed</p>
              </div>

              <div className="flex justify-between mt-2">
                <p>Havard </p>

                <p className="">Human Resource</p>

                <p>2023</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex font-bold justify-between">
                <p>School </p>

                <p>Degree</p>

                <p>Year Completed</p>
              </div>

              <div className="flex justify-between mt-2">
                <p>Havard </p>

                <p className="">Human Resource</p>

                <p>2023</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {activeLink === 'Experience' && (
        <main className="w-[70%]  m-auto">
          <div className=" bg-outlinegray px-10 py-5 mt-10 items-center">
            <p className="text-base font-bold ">Employment History</p>

            <div className="mt-2">
              <div className="flex font-bold justify-between">
                <p>Organization </p>
                <p>Role </p>

                <p>Start Year </p>

                <p> End Year</p>
              </div>

              <div className="flex justify-between mt-2">
                <p>Havard </p>

                <p className="">Human Resource</p>

                <p>2020</p>
                <p>2023</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex font-bold justify-between">
                <p>Organization </p>
                <p>Role </p>

                <p>Start Year </p>

                <p> End Year</p>
              </div>

              <div className="flex justify-between mt-2">
                <p>Havard </p>

                <p className="">Human Resource</p>

                <p>2020</p>
                <p>2023</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default AdminProfileBody;
