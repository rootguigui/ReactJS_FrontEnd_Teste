import { PageHeader } from "../../../components/headers/page_header"
import { AiOutlineSave } from 'react-icons/ai';
import { FormUserCreate } from "./form_create";

export const UserCreate = () => {
  return (
    <div className="container-content">
      <PageHeader title="Novo usuário">
        <button className="btn btn-primary">
          <AiOutlineSave />
          <p>Salvar alterações</p>
        </button>
      </PageHeader>
      <FormUserCreate />
    </div>
  )
}