import { Modal } from "./modal"
import React, { useState } from 'react';
import { BiLockAlt } from "react-icons/bi";

export const ModalResetPassword = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>teste</button>
      <Modal id="modal-delete-user" isVisible={show} className="modal-sm">
        <div className="text-align-center">
          <div className="mt-20 pt-20">
            <BiLockAlt color="#F39200" size={100} />
          </div>
          <div className="p-25">
            <h2>Resetar senha</h2>
            <p className="text-gray">Você deseja resetar a senha deste usuário?</p>
          </div>
          <div className="row">
          <button className="btn btn-primary btn-sm" onClick={() => setShow(false)}>
            Não
          </button>
          <button className="btn btn-info btn-sm">
            Sim
          </button>
          </div>
        </div>
      </Modal>
    </>
  );
}