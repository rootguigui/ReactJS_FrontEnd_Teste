import { Modal } from "./modal"
import React, { useEffect, useState } from 'react';
import { FiAlertCircle } from "react-icons/fi";
import { useModalValue } from "../../context/modal-context";
import { ModalTypeEnum } from "../../models/enums/modal.enum";

export const ModalDeleteUser: React.FC<{ showModal: boolean }> = ({ showModal }) => {
  const [show, setShow] = useState<boolean>(showModal);
  const { setShowModal } = useModalValue()

  useEffect(() => { 
    setShow(showModal);
  }, [showModal]);

  return (
    <>
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
          <button className="btn btn-primary btn-sm" onClick={() => setShowModal({ show: false, name: ModalTypeEnum.ModalDelete })}>
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