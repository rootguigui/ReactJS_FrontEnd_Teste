import { AiOutlineSave, AiOutlineClose, AiOutlineThunderbolt } from "react-icons/ai"
import { ToggleSwitch } from "../../../components/buttons/switch_button"
import { PageHeader } from "../../../components/headers/page_header"
import { useModalValue } from "../../../context/modal-context"
import { ModalTypeEnum } from "../../../models/enums/modal.enum"
import { FormUserEdit } from "./form_edit"

export const UserEdit = () => {
  const { setShowModal } = useModalValue();

  return (
    <div className="container-content">
      <PageHeader title="Editar usuário">
        <ToggleSwitch label="Ativo" currentValue={true} id={1} />
        <button className="btn btn-info" onClick={() => setShowModal({ show: true, name: ModalTypeEnum.ModalResetPassword })}>
          <AiOutlineThunderbolt />
          <p>Resetar Senha</p>
        </button>
        <button className="btn btn-primary" onClick={() => setShowModal({ show: true, name: ModalTypeEnum.ModalSuccess })}>
          <AiOutlineSave />
          <p>Salvar alterações</p>
        </button>
        <button className="btn btn-danger" onClick={() => setShowModal({ show: true, name: ModalTypeEnum.ModalDelete })}>
          <AiOutlineClose />
          <p>Excluir usuário</p>
        </button>
      </PageHeader>
      <FormUserEdit />
    </div>
  );
}