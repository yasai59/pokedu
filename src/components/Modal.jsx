import React, { useEffect, useRef } from "react";

export const Modal = ({ children, title, btn, className , foto=""}) => {
  const modalRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
    modalRef.current.showModal();
  };
  useEffect(() => {
    document.addEventListener("closeModal", () => {
      modalRef.current?.close();
    });
  }, []);
  
  if(foto !=""){

    if(foto == null){
      foto = "0001.png";
    }
    
    return (
      <>
        <button className={`${className} `} onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img
            className="foto bg-black rounded-full h-full aspect-square"
            src={`/pokemons/${foto}`}
  
          ></img>
          {btn}
        </button>
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl pb-10">{title}</h3>
            <div className="modal-body">{children}</div>
            <div className="modal-action">
              <form method="dialog">

                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  }


  return (
    <>
      <button className={`${className}`} onClick={handleClick}>
        {btn}
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl pb-10">{title}</h3>
          <div className="modal-body">{children}</div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
