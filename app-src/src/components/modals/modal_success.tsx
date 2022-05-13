import { Modal } from "./modal"
import React, { useEffect, useState } from 'react';

export const ModalSuccessAction = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (show) setShow(!show);
    }, 2000)
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)}>teste</button>
      <Modal id="modal-delete-user" isVisible={show} className="modal-very-sm">
        <div className="text-align-center">
          <div className="mt-20 pt-20">
            <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110.5 55.3994V59.9994C110.494 70.7816 107.003 81.2728 100.547 89.9086C94.0908 98.5443 85.0164 104.862 74.6768 107.919C64.3372 110.976 53.2863 110.609 43.1724 106.872C33.0584 103.136 24.4233 96.2299 18.5548 87.1848C12.6863 78.1396 9.89896 67.4398 10.6084 56.681C11.3178 45.9223 15.486 35.6811 22.4914 27.4848C29.4968 19.2885 38.9639 13.5764 49.4809 11.2002C59.998 8.82399 71.0013 9.91113 80.85 14.2994" stroke="#42BA96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M110.5 20L60.5 70.05L45.5 55.05" stroke="#42BA96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 className="mt-20">Informações salvas com sucesso!</h1>
        </div>
      </Modal>
    </>
  );
}