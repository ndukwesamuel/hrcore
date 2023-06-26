import React, { useEffect, useState } from 'react';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { banksInfo, taginfo, contact } from '../../../utilities/bankInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateInvoiceFun,
  resetCreateInvoice,
} from '../../../Feature/Admin/Invoice/CreateInvoiceSlice';
import { ALLTagFun } from '../../../Feature/Admin/Invoice/TagSlice';
import { GetContactsAction } from '../../../Feature/Admin/AddContact/ContactSlicce';
import { GetALLBankAccountFun } from '../../../Feature/Admin/Invoice/AccountSlice';
import { CircularProgress } from '@mui/material';

function CreateInvoice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { AllTagData } = useSelector((state) => state.reducer.TagSlice);
  const { AllAccountData } = useSelector((state) => state.reducer.AccountSlice);
  const { CreateinvoiceData, isLoading: Createinvoice_isloading } = useSelector(
    (state) => state.reducer.CreateInvoiceSlice
  );

  const { isSuccess: createisSuccess } = useSelector(
    (state) => state.reducer.CreateInvoiceSlice
  );

  const { contacts } = useSelector((state) => state.reducer.contactReducer);

  const [totalPrice, setTotalPrice] = useState(0);
  const [vatChecked, setVatChecked] = useState(false);
  const [vatPrice, setVatPrice] = useState(0);
  const [vatTotalPrice, setVatTotalPrice] = useState(0);
  let varAmount = 7.5;

  const [createInvoice, setCreateInvoice] = useState({
    contact: '',
    bank: '',
    date: '',
    tag: '',
  });

  const [itemForm, setItemForm] = useState([{ name: '', qty: '', price: '' }]);

  const handleInputChangeCreateInvoice = (e) => {
    setCreateInvoice({ ...createInvoice, [e.target.name]: e.target.value });
  };

  const addRowForMutipleItem = () => {
    const newRow = { name: '', qty: '', price: '' };
    setItemForm([...itemForm, newRow]);
  };

  const handleDeleteRowForMutipleItem = (index) => {
    setItemForm((prevRows) => {
      const newRows = [...prevRows];
      newRows.splice(index, 1);
      return newRows;
    });
  };

  const handleInputChangeForMutipleItem = (event, index, field) => {
    const { value } = event.target;
    let itemValue = value;

    if (field === 'price') {
      let parsedValue = parseFloat(itemValue);
      if (Number.isInteger(parsedValue)) {
        parsedValue = parsedValue.toFixed(0);
        itemValue = parsedValue;
      }
    }

    setItemForm((prevRows) => {
      const newRows = [...prevRows];
      newRows[index][field] = itemValue;
      return newRows;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    itemForm.forEach((row) => {
      if (row.price) {
        total += parseFloat(row.price);
      }
    });

    // setTotalPrice(total.toFixed(2));
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
    dispatch(ALLTagFun());
    dispatch(GetContactsAction());
    dispatch(GetALLBankAccountFun());
  }, [itemForm, dispatch]);

  useEffect(() => {
    if (createisSuccess) {
      dispatch(resetCreateInvoice());
      setCreateInvoice({
        contact: '',
        bank: '',
        date: '',
        tag: '',
      });
      setItemForm([{ name: '', qty: '', price: '' }]);
    }

    return () => {};
  }, [createisSuccess]);

  const handleOnChangeVat = () => {
    setVatChecked(!vatChecked);
  };

  const handleform = (e) => {
    e.preventDefault();

    let data = {
      createInvoice,
      itemForm,
      vatTotalPrice,
      varAmount,
    };

    dispatch(CreateInvoiceFun(data));
  };

  useEffect(() => {
    if (vatChecked) {
      const vatammount = totalPrice * 0.075;
      setVatPrice(vatammount);
      let newprice = totalPrice + vatammount;

      let price_to_decimal = newprice.toFixed(2);
      setVatTotalPrice(price_to_decimal);
    } else {
      setVatPrice(0);

      let price_to_decimal = totalPrice.toFixed(2);
      setVatTotalPrice(price_to_decimal);
    }
    return () => {};
  }, [totalPrice, vatChecked]);

  // return <>sjhdsdj</>;

  return (
    <div className="flex justify-center font-normal text-[13px]">
      <div className="w-[90%]  xl:w-[80%] 2xl:bg-black 2xl:w-[65%]">
        <div className="flex items-center cursor-pointer ml-2">
          <span onClick={() => navigate(-1)}>Invoices</span>
          <KeyboardArrowRightIcon />
          <span>Create Invoice </span>
        </div>

        <div className="bg-white border rounded-lg px-5 py-5">
          <h2 className=" font-semibold text-xl">Create Invoice</h2>
          <p className="text- font-normal ">
            Fill the options to create your invoice
          </p>

          <form>
            <div className="flex gap-2 mb-5 lg:w-[90%] ">
              <div className="w-full">
                <label htmlFor="select" className="mb-3 block">
                  Contacts
                </label>

                <select
                  className="bg-[#F0F0F0] py-2 px-4 block rounded w-full outline-none border-none"
                  id="select"
                  value={createInvoice.contact}
                  name="contact"
                  onChange={handleInputChangeCreateInvoice}
                >
                  <option className=" outline-none border-none" value="non">
                    non
                  </option>

                  <>
                    {contacts?.data.map((item, index) => (
                      <option
                        key={index}
                        className=" outline-none border-none"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="select" className="mb-3 block">
                  Bank(Optional)
                </label>
                <select
                  className="bg-[#F0F0F0] py-2 px-4 block rounded w-full outline-none border-none"
                  id="select"
                  value={createInvoice.bank}
                  name="bank"
                  onChange={handleInputChangeCreateInvoice}
                >
                  <option className=" outline-none border-none" value="non">
                    non
                  </option>
                  {AllAccountData?.data.map((item, index) => (
                    <option
                      key={index}
                      className=" outline-none border-none"
                      value={item.id}
                    >
                      {item.bank_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2 w-full lg:w-[90%] ">
              <div className="w-[50%]">
                <label htmlFor="select" className="mb-3 block">
                  Due Date
                </label>

                <div className="">
                  <input
                    value={createInvoice.date}
                    onChange={handleInputChangeCreateInvoice}
                    type="date"
                    name="date"
                    id=""
                    className="bg-[#F0F0F0] py-2 px-4 block rounded  w-full outline-none border-none"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <label htmlFor="select" className="mb-3 block">
                  Tag(optional)
                </label>
                <select
                  className="bg-[#F0F0F0] py-2 px-4 block rounded w-full outline-none border-none"
                  id="select"
                  value={createInvoice.tag}
                  name="tag"
                  onChange={handleInputChangeCreateInvoice}
                >
                  <option className=" outline-none border-none" value="non">
                    non
                  </option>
                  {AllTagData?.data.map((item, index) => (
                    <option
                      key={index}
                      className=" outline-none border-none"
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <table className="table-auto w-full mt-5">
              <thead className="bg-[#F0F0F0]  font-semibold text-xs">
                <tr className="font-semibold text-xs">
                  <th className="border px-1 py-2  text-[10px]">Sr No</th>
                  <th className="border px-4 py-2">Item Name</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Price ₦</th>
                </tr>
              </thead>
              <tbody>
                {itemForm && (
                  <>
                    {itemForm.map((item, index) => (
                      <tr className="" key={index}>
                        <td className="border px-4 py-2">{index} </td>
                        <td className="border  py-2 w-[40%]">
                          <input
                            className="bg-[#F4F4F4] w-full outline-none py-2 px-2 rounded"
                            type="text"
                            id=""
                            placeholder="add item"
                            name="name"
                            value={item.name}
                            onChange={(event) =>
                              handleInputChangeForMutipleItem(
                                event,
                                index,
                                'name'
                              )
                            }
                          />
                        </td>
                        <td className="border px-1 py-2">
                          <input
                            className="bg-[#F4F4F4] w-full outline-none py-2 px-2 rounded"
                            type="number"
                            id=""
                            placeholder="add item"
                            name="qty"
                            value={item.qty}
                            onChange={(event) =>
                              handleInputChangeForMutipleItem(
                                event,
                                index,
                                'qty'
                              )
                            }
                          />
                        </td>
                        <td className="border px-1 py-2">
                          <input
                            className="bg-[#F4F4F4] w-full outline-none py-2 px-2 rounded"
                            type="number"
                            id=""
                            placeholder="add item"
                            name="price"
                            value={item.price}
                            onChange={(event) =>
                              handleInputChangeForMutipleItem(
                                event,
                                index,
                                'price'
                              )
                            }
                          />
                        </td>

                        <td className="border px-1 py-2">
                          <button
                            type="button"
                            className="bg-[#F4F4F4] w-full outline-none py-2 px-2 rounded"
                            onClick={() => handleDeleteRowForMutipleItem(index)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>

            <div className="flex justify-end mt-2">
              <button
                type="button"
                className=" font-semibold  text-xs bg-[#2A72A8] text-white px-4 py-1 rounded"
                onClick={addRowForMutipleItem}
              >
                + Add More Items
              </button>
            </div>

            <div className="flex w-full items-center">
              <div className="border w-full h-10 bg text-right flex gap-2 items-center justify-end pr-5">
                <span className=" text-right align-bottom">
                  include VAT(7.5%)
                </span>

                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={vatChecked}
                  onChange={handleOnChangeVat}
                />
              </div>

              <div className="border w-full h-10 bg text-right flex items-center  pl-5">
                <span>₦{vatPrice}</span>
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="border w-full h-10 bg text-right flex gap-2 items-center justify-end pr-5">
                <span className=" text-right align-bottom">Total</span>
              </div>

              <div className="border w-full h-10 bg text-right flex items-center  pl-5">
                <span>₦ {vatTotalPrice}</span>
              </div>
            </div>

            <div className="flex justify-end mt-2 gap-3">
              <button
                type="button"
                className=" font-semibold  text-xs bg-[#F4F4F4]  px-4 py-1 rounded"
                // onClick={}
              >
                Cancel
              </button>

              {Createinvoice_isloading ? (
                <button
                  type="button"
                  className=" font-semibold  text-xs bg-[#2A72A8] text-white px-4 py-1 rounded"
                  onClick={handleform}
                >
                  <CircularProgress />
                </button>
              ) : (
                <button
                  type="button"
                  className=" font-semibold  text-xs bg-[#2A72A8] text-white px-4 py-1 rounded"
                  onClick={handleform}
                >
                  Create
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;
