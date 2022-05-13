import { Modal } from "./modal"
import React, { useState } from 'react';
import { FiAlertCircle } from "react-icons/fi";

export const ModalDeleteUser = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>teste</button>
      <Modal id="modal-delete-user" isVisible={show} className="modal-sm">
        <div className="text-align-center">
          <div className="mt-20 pt-20">
            <FiAlertCircle color="rgb(210, 58, 85)" size={100} />
          </div>
          <div className="p-25">
            <h2>Excluir usuário</h2>
            <p className="text-gray">Você deseja excluir este usuário definitvamente? Esta ação não poderá ser desfeita.</p>
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