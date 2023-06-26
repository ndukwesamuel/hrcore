import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InvoiceSettingsModal from '../../../Components/AdminComponent/InvoiceComponent/InvoiceSettingsModal';
import { GetContactsAction } from '../../../Feature/Admin/AddContact/ContactSlicce';
import { useDispatch, useSelector } from 'react-redux';
import { GetALLBankAccountFun } from '../../../Feature/Admin/Invoice/AccountSlice';
import { CircularProgress } from '@mui/material';
import { ALLTagFun } from '../../../Feature/Admin/Invoice/TagSlice';

function InvoiceSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    AllAccountData,
    AddAccountData,
    isError,
    isSuccess,
    isLoading,
    message,
  } = useSelector((state) => state.reducer.AccountSlice);

  const { AllTagData } = useSelector((state) => state.reducer.TagSlice);

  const [settingsTab, setSettingsTab] = useState('Account');
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(GetContactsAction());
    dispatch(GetALLBankAccountFun());
    dispatch(ALLTagFun());

    return () => {};
  }, [dispatch]);

  const { contacts } = useSelector((state) => state.reducer.contactReducer);

  const handleTab = (data) => {
    setSettingsTab(data);
  };

  useEffect(() => {
    dispatch(GetContactsAction());
  }, []);

  return (
    <>
      <InvoiceSettingsModal
        showModal={showModal}
        setShowModal={setShowModal}
        settingsTab={settingsTab}
      />

      <div className="flex justify-center font-normal text-[13px]">
        <div className="w-[90%]  xl:w-[80%]  2xl:w-[65%]">
          <div className="flex items-center cursor-pointer ml-2">
            <span onClick={() => navigate('/admin/invoice')}>Invoices</span>
            <KeyboardArrowRightIcon />
            <span>Invoice Setting</span>
          </div>

          <div className="mt-10 ">
            <div>
              <div className="flex justify-end mb-3">
                {settingsTab == 'Account' && (
                  <span
                    onClick={() => setShowModal(true)}
                    className="bg-[#2A72A8]  text-center  text-[10px]  rounded   py-1 lg:px-6 lg:py-2 text-white  w-[15%] cursor-pointer"
                  >
                    + Account
                  </span>
                )}

                {settingsTab == 'Contact' && (
                  <span
                    onClick={() => setShowModal(true)}
                    className="bg-[#2A72A8]  text-center  text-[10px]  rounded   py-1 lg:px-6 lg:py-2 text-white  w-[15%] cursor-pointer"
                  >
                    + Contact
                  </span>
                )}
                {settingsTab == 'Tags' && (
                  <span
                    onClick={() => setShowModal(true)}
                    className="bg-[#2A72A8]  text-center  text-[10px]  rounded   py-1 lg:px-6 lg:py-2 text-white  w-[15%] cursor-pointer"
                  >
                    + Tag
                  </span>
                )}
              </div>
              <div className=" flex justify-between gap-10 mb-2 ">
                <span
                  onClick={() => handleTab('Account')}
                  className={`w-[33%] text-center   py-1 px-6 rounded font-semibold text-[15px] ${
                    settingsTab == 'Account'
                      ? 'bg-[#2A72A8] text-white'
                      : 'bg-[#FFFFFF] text-black'
                  }`}
                >
                  Account
                </span>
                <span
                  onClick={() => handleTab('Contact')}
                  className={`w-[33%] text-center   py-1 px-6 rounded font-semibold text-[15px] ${
                    settingsTab == 'Contact'
                      ? 'bg-[#2A72A8] text-white'
                      : 'bg-[#FFFFFF] text-black'
                  }`}
                >
                  Contact
                </span>
                <span
                  onClick={() => handleTab('Tags')}
                  className={`w-[33%] text-center   py-1 px-6 rounded font-semibold text-[15px] ${
                    settingsTab == 'Tags'
                      ? 'bg-[#2A72A8] text-white'
                      : 'bg-[#FFFFFF] text-black'
                  }`}
                >
                  Tags
                </span>
              </div>

              <div>
                <div class="relative overflow-x-auto">
                  {settingsTab == 'Account' && (
                    <>
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-[8px]  lg:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Sr/No
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Bank Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Account Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Sort Code
                            </th>
                            <th scope="col" class="px-6 py-3">
                              TIN
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {AllAccountData ? (
                              <>
                                {AllAccountData?.data.map((item) => (
                                  <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={item.id}
                                  >
                                    <td
                                      scope="row"
                                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                      {item.id}
                                    </td>
                                    <td class="px-6 py-4">{item.bank_name}</td>

                                    <td class="px-6 py-4">
                                      {item.account_name}
                                    </td>
                                    <td class="px-6 py-4">{item.short_code}</td>
                                    <td class="px-6 py-4">{item.tin}</td>
                                  </tr>
                                ))}
                              </>
                            ) : (
                              <div className="">
                                <button className="flex justify-center">
                                  <CircularProgress />
                                </button>
                              </div>
                            )}
                          </>
                        </tbody>
                      </table>
                    </>
                  )}

                  {settingsTab == 'Contact' && (
                    <>
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-[10px]  lg:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Sr/No
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Phone number
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {contacts ? (
                              <>
                                {contacts?.data.map((item) => (
                                  <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={item.id}
                                  >
                                    <td
                                      scope="row"
                                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                      {item?.id}
                                    </td>
                                    <td class="px-6 py-4">{item?.email}</td>

                                    <td class="px-6 py-4">{item?.address}</td>
                                    <td class="px-6 py-4">
                                      {item?.phone_number}
                                    </td>
                                  </tr>
                                ))}
                              </>
                            ) : (
                              <>
                                <div className="">
                                  <button className="flex justify-center">
                                    <CircularProgress />
                                  </button>
                                </div>
                              </>
                            )}
                          </>
                        </tbody>
                      </table>
                    </>
                  )}

                  {settingsTab == 'Tags' && (
                    <>
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Sr/No
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Tag Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {AllTagData ? (
                              <>
                                {AllTagData?.data.map((item) => (
                                  <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={item.id}
                                  >
                                    <td
                                      scope="row"
                                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                      {item.id}
                                    </td>
                                    <td class="px-6 py-4">{item.name}</td>
                                  </tr>
                                ))}
                              </>
                            ) : (
                              <div className="flex justify-center">
                                <button>
                                  <CircularProgress />
                                </button>
                              </div>
                            )}
                          </>
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceSetting;
