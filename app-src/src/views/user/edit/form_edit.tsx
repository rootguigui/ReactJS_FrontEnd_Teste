import { SelectInput } from "../../../components/inputs/select_input"

const profileOptions: Array<{ value: number, label: string }> = [
  { value: 0, label: 'Administrador' },
  { value: 1, label: 'F/F' },
  { value: 2, label: 'Gestor Rede' },
  { value: 3, label: 'Gestor Loja' },
  { value: 4, label: 'Funcionário Loja' }
];

const redeOptions: Array<{ value: number, label: string }> = [
  { value: 0, label: 'Drogarias Conviva' },
  { value: 1, label: 'Entrefarma' },
  { value: 2, label: 'Todas as Redes' }
];

export const FormUserEdit = () => {
  return (
    <div className="container-section">
      <div className="row">
        <div className="form-control">
          <label htmlFor="">Nome do Usuário</label>
          <input className="input-form-control" type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="">CPF</label>
          <input className="input-form-control" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="form-control">
          <label htmlFor="">E-mail</label>
          <input className="input-form-control" type="text" />
        </div>
        <div className="form-control">
         <SelectInput options={profileOptions} labelName={'Perfil de acesso'} disabled={false} />
        </div>
      </div>
      <div className="row">
        <div className="form-control">
         <SelectInput options={redeOptions} labelName={'Rede'} disabled={true} />
         <p>Você pode indicar mais de uma rede</p>
        </div>
        <div className="form-control">
         <SelectInput options={[]} labelName={'Lojas'} disabled={true} />
         <p >Você pode indicar mais de uma rede</p>
        </div>
      </div>
    </div>
  )
}