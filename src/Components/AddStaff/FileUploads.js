import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createFileAction } from '../../Feature/Admin/Onboarding/DocumentSlice';
import { useParams } from 'react-router-dom';
import './AddStaff.css';

const FileUploads = ({ title, isOpened, onProceed, onClose }) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add('modal-open'); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  const proceedAndClose = (e) => {
    e.preventDefault();
    onProceed();
    onClose();
  };

  const preventAutoClose = (e) => e.stopPropagation();
  const handleFileChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('upload', data.upload);
    formData.append('filename', data.filename);

    const newData = {
      formData: formData,
      id: id,
    };
    e.preventDefault();
    dispatch(createFileAction(newData));
  };

  return (
    isOpened && (
      <dialog ref={ref} onCancel={onClose} onClick={onClose}>
        <div onClick={preventAutoClose} className="popmodal__cover">
          <div
            className=" flex items-center border-b border-stone-300
            py-3 px-8 mb-3"
            onClick={onClose}
          >
            <div
              className="capitalize mr-auto text-xl text-[#52525C]
            font-['Manrope'] font-semibold"
            >
              Add new file
            </div>

            <div className="text-base w-8 h-7flex text-center rounded cursor-pointer bg-slate-300">
              x
            </div>
          </div>
          <div className="popmodal__content px-8">
            <form>
              <label
                className="capitalize text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
              >
                file upload
              </label>
              <br />
              <input
                type="file"
                name="upload"
                onChange={handleFileChange}
                className="w-full rounded-lg border border-solid border-[#D0D5DD]
                px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
                font-['Manrope']"
              />
              <br />
              <label
                className="capitalize text-xs text-[#344054] font-medium 
              font-['Inter'] mb-4"
              >
                file name
              </label>
              <br />
              <input
                type="text"
                name="filename"
                onChange={handleChange}
                className="w-full rounded-lg border border-solid border-[#D0D5DD]
                px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
                font-['Manrope']"
              />

              <div className="flex justify-end mt-3 mb-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
                capitalize px-8 py-2 border-box font-['Inter'] "
                >
                  create
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    )
  );
};

export default FileUploads;
