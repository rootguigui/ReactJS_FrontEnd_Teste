import { AiOutlineSave, AiOutlineClose, AiOutlineThunderbolt } from "react-icons/ai"
import { ToggleSwitch } from "../../../components/buttons/switch_button"
import { PageHeader } from "../../../components/headers/page_header"
import { FormUserEdit } from "./form_edit"

export const UserEdit = () => {
  return (
    <div className="container-content">
      <PageHeader title="Editar usuário">
        <ToggleSwitch label="Ativo" currentValue={true} />
        <button className="btn btn-info">
          <AiOutlineThunderbolt />
          <p>Resetar Senha</p>
        </button>
        <button className="btn btn-primary">
          <AiOutlineSave />
          <p>Salvar alterações</p>
        </button>
        <button className="btn btn-danger">
          <AiOutlineClose />
          <p>Excluir usuário</p>
        </button>
      </PageHeader>
      <FormUserEdit />
    </div>
  );
}