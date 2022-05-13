import { Modal } from "./modal"
import React, { useEffect, useState } from 'react';
import { BiLockAlt } from "react-icons/bi";
import { useModalValue } from "../../context/modal-context";
import { ModalTypeEnum } from "../../models/enums/modal.enum";

export const ModalResetPassword: React.FC<{ showModal: boolean }> = ({ showModal }) => {
  const [show, setShow] = useState<boolean>(false);
  const { setShowModal } = useModalValue()

  useEffect(() => { 
    setShow(showModal);
  }, [showModal]);
  
  return (
    <>
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
          <button className="btn btn-primary btn-sm" onClick={() => setShowModal({ show: false, name: ModalTypeEnum.ModalResetPassword })}>
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