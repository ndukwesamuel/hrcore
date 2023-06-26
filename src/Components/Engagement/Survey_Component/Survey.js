import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function Survey({ setShowmodal }) {
  const [itemForm, setItemForm] = useState([{ name: '', qty: '', price: '' }]);
  const [options, setOptions] = useState([{ name: '' }]);

  const handleDeleteRowForMutipleItem = (index) => {
    setOptions((prevRows) => {
      const newRows = [...prevRows];
      newRows.splice(index, 1);
      return newRows;
    });
  };

  const addRowForMutipleItem = () => {
    const newRow = { name: '' };
    setOptions([...options, newRow]);
  };
  return (
    <div>
      <div className="mb-4">
        <label htmlFor=""> Your Question</label>
        <input
          type="text"
          name="post_title"
          //   onChange={(event) => setPost_title(event.target.value)}
          //   value={post_title}
          placeholder="Write the Suject Matter of Post"
          className="block border w-full rounded-lg mt-1 px-3 py-4 outline-none"
        />
      </div>

      {options && (
        <>
          {options.map((item, index) => {
            let S_N = index + 1;
            return (
              <div className="mb-4">
                <label htmlFor=""> Option {S_N}</label>
                <div className="border w-full rounded-lg mt-1 px-3 py-2 outline-none  flex justify-between">
                  <input
                    type="text"
                    name="name"
                    //   onChange={(event) => setPost_title(event.target.value)}
                    //   value={post_title}

                    placeholder="Write the Suject Matter of Post"
                    className=" w-full border-none  outline-none"
                  />
                  <span
                    onClick={() => handleDeleteRowForMutipleItem(index)}
                    className="
                    
                    hover:bg-red-600 text-[#2A72A8] hover:text-white hover:rounded"
                  >
                    <CloseIcon />
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}

      <div
        onClick={addRowForMutipleItem}
        className="flex text-[#2A72A8] items-center border py-3 border-[#2A72A8] w-40 rounded-[2rem] justify-center
        hover:bg-[#2A72A8]  cursor-pointer hover:text-white
        "
      >
        <span>
          <AddIcon />
        </span>

        <span>Add Option</span>
      </div>

      <div className=" flex justify-end">
        <div className="flex gap-4">
          <div>
            <button
              className="border-[#2A72A8] border text-[#2A72A8] px-[20px] py-3   rounded 
              hover:bg-red-600  cursor-pointer hover:text-white "
              onClick={() => setShowmodal(false)}
            >
              Back
            </button>
          </div>
          <div>
            <button
              className="bg-[#2A72A8] text-white px-[20px]  py-3   rounded"
              // onClick={handdlePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
