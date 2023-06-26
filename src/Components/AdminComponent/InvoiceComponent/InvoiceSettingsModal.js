import React, { useEffect, useState } from 'react';
import {
  CreateContactAction,
  resetCreateContact,
} from '../../../Feature/Admin/AddContact/ContactSlicce';
import { CircularProgress } from '@mui/material';
import {
  AddBankAccountFun,
  resetAccount,
} from '../../../Feature/Admin/Invoice/AccountSlice';
import { AddTagFun } from '../../../Feature/Admin/Invoice/TagSlice';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function InvoiceSettingsModal({ showModal, setShowModal, settingsTab }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { AddAccountData, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.reducer.AccountSlice);

  const { AddTagData, isSuccess: tagSuccess } = useSelector(
    (state) => state.reducer.TagSlice
  );

  // const AddTaData = useSelector((state) => state.reducer.TagSlice);

  // console.log(AddTaData);

  const { contact_is_Success } = useSelector(
    (state) => state.reducer.contactReducer
  );

  useEffect(() => {
    if (isSuccess || tagSuccess) {
      setShowModal(false);
    }

    if (contact_is_Success) {
      setShowModal(false);
      dispatch(resetCreateContact());
      setContact({
        name: '',
        address: '',
        email: '',
        phone_number: '',
      });
    }

    return () => {
      dispatch(resetAccount());
    };
  }, [message, isSuccess, dispatch, tagSuccess, contact_is_Success]);

  const [account, setAccount] = useState({
    Bank_Name: '',
    Account_Number: '',
    Account_Name: '',
    Sort_Code: '',
    TIN: '',
  });

  const [contact, setContact] = useState({
    name: '',
    address: '',
    email: '',
    phone_number: '',
  });

  const [tag, setTag] = useState({
    name: '',
  });

  const handleInputChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleInputChangeContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleInputChangeTag = (e) => {
    setTag({ ...tag, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (settingsTab == 'Account') {
      if (account) {
        let acc_lenth = account.Account_Number;
        if (
          acc_lenth.length != 10 ||
          account.Bank_Name == '' ||
          account.Account_Name == '' ||
          account.Sort_Code == '' ||
          account.TIN == ''
        ) {
          toast.error(
            `${'Please do not leave any empty input, and the account number must not be equal to 10 digits.'}`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              className: 'Forbidden403',
            }
          );
        } else {
          dispatch(AddBankAccountFun(account));
          setAccount({
            Bank_Name: '',
            Account_Number: '',
            Account_Name: '',
            Sort_Code: '',
            TIN: '',
          });
        }
      }
    } else if (settingsTab == 'Contact') {
      dispatch(CreateContactAction(contact));
    } else if (settingsTab === 'Tags') {
      dispatch(AddTagFun(tag));
      setTag({ name: '' });
    }
  };

  return (
    <div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
              <div className="relative lg:w-[40%]   my-6 mx-auto max-w-3xl  ">
                {/*content*/}
                <div className="border-0 px-7 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pt-5">
                  {/*header*/}
                  <div className=" flex justify-between  items-center">
                    <div>
                      {settingsTab === 'Account' && (
                        <h3 className="text-[20px] font-semibold ">
                          Add Bank Account
                        </h3>
                      )}

                      {settingsTab === 'Contact' && (
                        <h3 className="text-[20px] font-semibold ">Contact</h3>
                      )}

                      {settingsTab === 'Tags' && (
                        <h3 className="text-[20px] font-semibold ">Tag</h3>
                      )}
                    </div>
                    <div>
                      <button
                        className="bg-[#B4B4B43D]  py-1 px-2 rounded-sm"
                        onClick={() => setShowModal(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {settingsTab == 'Account' && (
                    <div className="relative  flex-auto mt-5">
                      <form action="" method="post">
                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Bank Name
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            value={account.Bank_Name}
                            type="text"
                            name="Bank_Name"
                            placeholder="International Banks or Local Banks"
                            onChange={handleInputChangeAccount}
                            required
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Account Number
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="number"
                            placeholder="00000000000"
                            name="Account_Number"
                            value={account.Account_Number}
                            onChange={handleInputChangeAccount}
                            max="10"
                            required
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Account Name
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="text"
                            id=""
                            placeholder="Name attached to account"
                            name="Account_Name"
                            value={account.Account_Name}
                            onChange={handleInputChangeAccount}
                            required
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Sort Code (Optional)
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="text"
                            name="Sort_Code"
                            id=""
                            placeholder="Sort Code (Optional)"
                            value={account.Sort_Code}
                            onChange={handleInputChangeAccount}
                            required
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            TIN (Optional)
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="text"
                            name="TIN"
                            id=""
                            placeholder="Sort Code (Optional)"
                            value={account.TIN}
                            onChange={handleInputChangeAccount}
                            required
                          />
                        </div>
                      </form>
                    </div>
                  )}
                  {settingsTab == 'Contact' && (
                    <div className="relative  flex-auto mt-5">
                      <form action="" method="post">
                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Name
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            value={contact.name}
                            type="text"
                            name="name"
                            onChange={handleInputChangeContact}
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Address
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="text"
                            name="address"
                            value={contact.address}
                            onChange={handleInputChangeContact}
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Phone number
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="text"
                            name="phone_number"
                            value={contact.phone_number}
                            onChange={handleInputChangeContact}
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Email
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            type="email"
                            name="email"
                            id=""
                            value={contact.email}
                            onChange={handleInputChangeContact}
                          />
                        </div>
                      </form>
                    </div>
                  )}
                  {settingsTab == 'Tags' && (
                    <div className="relative  flex-auto mt-5">
                      <form action="" method="post">
                        <div className="flex items-center gap-2 mb-5 ">
                          <label htmlFor="" className=" text-sm w-[25%]">
                            Name
                          </label>
                          <input
                            className="bg-[#F0F0F0] px-2 py-2 w-[75%] rounded"
                            value={tag.name}
                            type="text"
                            name="name"
                            onChange={handleInputChangeTag}
                          />
                        </div>
                      </form>
                    </div>
                  )}

                  {/*footer*/}
                  <div className="gap-3 flex justify-end mb-5">
                    <button
                      className="bg-[#F4F4F4]  py-2   px-2  rounded "
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>

                    <button
                      className="bg-[#2A72A8] text-white py-2   px-2  rounded"
                      onClick={handleSubmit}
                    >
                      {isLoading ? <CircularProgress /> : 'Create'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default InvoiceSettingsModal;
