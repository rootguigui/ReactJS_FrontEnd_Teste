import React, { useContext, useEffect, useState } from 'react';
import { ModalDeleteUser } from '../components/modals/modal_delete_user';
import { ModalResetPassword } from '../components/modals/modal_reset_password';
import { ModalSuccessAction } from '../components/modals/modal_success';
import { ModalTypeEnum } from '../models/enums/modal.enum';

interface IProps {
  children: React.ReactNode;
}

interface ContextProps {
  setShowModal: ({ show, name }:{ show: boolean, name: ModalTypeEnum }) => void
}

export const ModalContext = React.createContext<ContextProps>({ 
  setShowModal: ({ show, name }: {show: boolean, name: ModalTypeEnum}) => {}
});
export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [show, setShow] = useState<{ show: boolean, name: ModalTypeEnum }>({ show: false, name: ModalTypeEnum.ModalSuccess });

  useEffect(() => {
    console.log(show)
  }, [show]);

  const setShowModal = ({ show, name }: {show: boolean, name: ModalTypeEnum}): void => {
    if (show !== undefined) setShow({ show, name });

    switch(name) {
      case ModalTypeEnum.ModalDelete: 
        setShow({ show, name });
    }

    return;
  }

  return (
    <ModalContext.Provider
      value={{ setShowModal }}
    >
      <ModalDeleteUser showModal={show.name === 0 ? show.show : false} />
      <ModalResetPassword showModal={show.name === 2 ? show.show : false} />
      {/* <ModalSuccessAction showModal={show.name === 1 ? show.show : false}  /> */}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalValue = () => useContext(ModalContext);