import React, { useEffect, useRef } from "react";

export const Modal = ({ children, title, btn, className }) => {
  const modalRef = useRef(null);
  const handleClick = () => {
    modalRef.current.showModal();
  };
  useEffect(() => {
    document.addEventListener("closeModal", () => {
      modalRef.current.close();
    });
  }, []);

  return (
    <>
      <button className={`btn ${className}`} onClick={handleClick}>
        {btn}
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl pb-10">{title}</h3>
          <div className="modal-body">{children}</div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
