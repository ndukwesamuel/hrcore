import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserCircle from '../../../../assets/Images/UserCircle.png';
import HouseIcon from '../../../../assets/Images/House.png';
import SuitcaseIcon from '../../../../assets/Images/Suitcase.png';
import BuildingsIcon from '../../../../assets/Images/Buildings.png';
import LockOpenIcon from '../../../../assets/Images/LockOpen.png';
import FirstAidKitIcon from '../../../../assets/Images/FirstAidKit.png';

import dateOfBirth from '../../../../assets/Images/gift.png';

import GenderIntersex from '../../../../assets/Images/GenderIntersex.png';

import Users from '../../../../assets/Images/Users.png';
import VectorHome from '../../../../assets/Images/Vector.png';

import Star from '../../../../assets/Images/Star.png';

import PresentationChart from '../../../../assets/Images/PresentationChart.png';
import TreeStructure from '../../../../assets/Images/TreeStructure.png';

import Hash from '../../../../assets/Images/Hash.png';

function ProfileBody({ profile }) {
  const [activeLink, setActiveLink] = useState('Basic');
  const leaveStructure = profile.position?.leave_structure;
  const handleClick = (link) => {
    setActiveLink(link);
  };

  let BasicInfo = [
    {
      id: 1,
      icon: dateOfBirth,
      infoname: 'Date Of Birth: ',
      infoValue: 'November 22nd, 1870',
    },

    {
      id: 2,
      icon: GenderIntersex,
      infoname: 'Gender: ',
      infoValue: 'Male',
    },

    {
      id: 3,
      icon: Users,
      infoname: 'Marital Status: ',
      infoValue: 'Single',
    },

    {
      id: 4,
      icon: VectorHome,
      infoname: 'State Of Origin: ',
      infoValue: 'Lagos State',
    },

    {
      id: 5,
      icon: VectorHome,
      infoname: 'LGA of Origin: ',
      infoValue: 'Ikeja',
    },

    {
      id: 6,
      icon: VectorHome,
      infoname: 'State of Residence: ',
      infoValue: 'Abia',
    },
  ];

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

        <div className="cursor-pointer">
          <p
            onClick={() => handleClick('Leave')}
            className={
              activeLink === 'Leave'
                ? 'bg-brand-blue tx-white px-4 py-2 mr-4 text-base rounded'
                : 'mr-4 tx-ghost-text text-base'
            }
          >
            Leave
          </p>
        </div>
      </nav>

      {activeLink === 'Basic' && (
        <>
          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              {/* {BasicInfo.map((item) => ( */}
              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={dateOfBirth} alt="" />
                  <span className="text-[16px]"> Date Of Birth:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.dob}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={GenderIntersex} alt="" />
                  <span className="text-[16px]"> Gender:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.gender}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Users} alt="" />
                  <span className="text-[16px]"> Marital Status:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.marital_status}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Users} alt="" />
                  <span className="text-[16px]"> State Of Origin:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.profile?.origin_state}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Users} alt="" />
                  <span className="text-[16px]"> LGA Of Origin:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.profile?.origin_lga}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Users} alt="" />
                  <span className="text-[16px]"> State of Residence:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.profile?.residence_state}
                  </span>
                </div>
              </div>
              {/* // ))} */}
            </div>
          </main>
        </>
      )}

      {activeLink === 'Organization' && (
        <>
          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Star} alt="" />
                  <span className="text-[16px]  font-semibold"> Grade:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">{profile.position?.name ?? ""}</span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={Star} alt="" />
                  <span className="text-[16px]  font-semibold"> Position:</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">{profile.profile?.designation}</span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={PresentationChart} alt="" />
                  <span className="text-[16px]  font-semibold">
                    {' '}
                    Department:
                  </span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {' '}
                    {profile?.profile?.department}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={VectorHome} alt="" />
                  <span className="text-[16px]  font-semibold">Branch</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">{`${profile.company?.name} - ${profile.company?.branch}`}</span>
                </div>
              </div>

              {/* // ))} */}
            </div>
          </main>

          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              <div className="flex justify-between ">
                <p className="text-[16px] font-semibold">Leave Approver: </p>

                <div className="pr-10">
                  <img src={TreeStructure} alt="" className="inline" />
                  <span className="text-[#2A72A8]"> Setup Approver</span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex gap-3 items-center">
                  <div className="font-semibold">1.</div>
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

                <div className="flex gap-3 items-center mt-5">
                  <div className="font-semibold">2.</div>
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
          </main>

          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              <div className="flex    gap-10 items-center">
                <div className="flex items-center">
                  <img src={Hash} alt="" />
                  <p className="font-semibold">Pension Number</p>
                </div>

                <p className="font-semibold">
                  805f80e5-8bc3-4cc1-ba3b-eb8c2d0317ff
                </p>
              </div>
            </div>
          </main>

          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              {/* {BasicInfo.map((item) => ( */}

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">On HMO</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">Yes</span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">HMO</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    805f80e5-8bc3-4cc1-ba3b-eb8c2d0317ff
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">HMO Number</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.hmo?.hmo_id}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">HMO Plan</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    805f80e5-8bc3-4cc1-ba3b-eb8c2d0317ff
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">
                    HMO Hospital
                  </span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.hmo?.hospital}
                  </span>
                </div>
              </div>

              <div className="flex py-2 items-center w-full mt-2">
                <div className=" w-[30%] flex items-center gap-3">
                  <img src={FirstAidKitIcon} alt="" />
                  <span className="text-[16px]  font-semibold">HMO Status</span>
                </div>
                <div className=" ">
                  <span className="text-[16px] font-normal">
                    {profile?.hmo?.status}
                  </span>
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {activeLink === 'Education' && (
        <>
          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 px-5 rounded-xl">
              <div>
                <div className="flex w-full font-bold text-base  ">
                  <p className="w-[45%]">School </p>

                  <p className="w-[45%]">Degree</p>

                  <p className="w-[15%] text-right">Year Completed</p>
                </div>

                <div className="mt-2">
                  <hr />
                </div>

                {profile?.education?.length > 0 ? (
                  profile?.education.map((edu) => {
                    return (
                      <div className="flex justify-between mt-2 text-base font-normal">
                        <p className="font-bold w-[45%]">{edu?.institution} </p>

                        <p className="w-[45%]">{edu?.award}</p>

                        <p className="w-[15%] text-right">
                          {edu?.year_completed}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-between mt-2">
                    <p>Oba Awon University </p>

                    <p className="">Bsc</p>

                    <p>2022</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </>
      )}

      {activeLink === 'Experience' && (
        <>
          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 px-5 rounded-xl">
              <div>
                <div className="flex w-full font-bold text-base  ">
                  <p className="w-[30%]">School </p>

                  <p className="w-[30%]">Degree</p>
                  <p className="w-[30%]">Start Year</p>
                  <p className="w-[15%] text-right">Year Completed</p>
                </div>

                <div className="mt-2">
                  <hr />
                </div>

                {profile?.experience.length > 0 ? (
                  profile?.experience.map((exp) => {
                    return (
                      <div className="flex justify-between mt-2 text-base font-normal">
                        <p className="w-[30%] font-bold">
                          {exp?.organization}{' '}
                        </p>
                        <p className="w-[30%]">{exp?.role}</p>
                        <p className="w-[30%]">{exp?.started}</p>
                        <p className="w-[15%] text-right">{exp?.ended}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-between mt-2">
                    <p>Nem pension plc</p>

                    <p className="">hrhrr</p>

                    <p>2021</p>
                    <p>2022</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </>
      )}

      {activeLink === 'Leave' && (
        <>
          <main className="px-12  m-auto">
            <div className="border mt-10  bg-[#FCFDFD] py-5 pl-10 rounded-xl">
              {leaveStructure && Object.keys(leaveStructure).map((key) => {
                return <div className="flex py-2 items-center w-full mt-2">
                  <div className=" w-[30%] flex items-center gap-3">
                    <p className="text-base font-semibold">{key}</p>
                  </div>
                  <div className=" ">
                    <span className="text-[16px] font-normal">{leaveStructure[key]} days</span>
                  </div>
                </div>
              })}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default ProfileBody;
