import React, { useState, useRef, useEffect, Children } from 'react';
import './AddStaff.css';

const PopModal2 = ({
  title,
  isOpened,
  onProceed,
  onClose,
  props,
  children,
}) => {
  const ref = useRef(null);

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

  return (
    isOpened && (
      <dialog ref={ref} onCancel={onClose} onClick={onClose}>
        <div onClick={preventAutoClose} className="popmodal__cover">
          <div className="popmodal__close" onClick={onClose}>
            x
          </div>
          <div className="flex flex-col justify-center items-center">
            {props}
            {children}
          </div>
        </div>
      </dialog>
    )
  );
};

export default PopModal2;
