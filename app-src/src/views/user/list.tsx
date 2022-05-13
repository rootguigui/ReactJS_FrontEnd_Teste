import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ButtonAction } from "../../components/buttons/button_action";
import { ToggleSwitch } from "../../components/buttons/switch_button";
import { PageHeader } from "../../components/headers/page_header";
import { Table } from "../../components/tables";
import { ColumnMultipleRow } from "../../components/tables/column_multiple_row";

export const UserList = () => {
  const columns = React.useMemo(
    () => [
        {
          Header: 'Rede',
          accessor: 'rede',
        },
        {
          Header: 'Nome',
          accessor: 'nome',
          width: '30%',
          Cell: ({ cell }: { cell: any }) => {
            const { email, nome } = cell.row.original;
            return <ColumnMultipleRow {...{ email, nome }} />
          }
        },
        {
          Header: 'Perfil',
          accessor: 'perfil',
          width: '10%',
        },
        {
          Header: 'Status',
          accessor: 'status',
          width: '10%',
          Cell: ({ cell }: { cell: any }) => {
            const { status } = cell.row.original;
            return <ToggleSwitch label="Ativo" currentValue={status} />
          }
        },
        {
          accessor: 'buttons',
          Cell: ({ cell }: { cell: any }) => {
            return <ButtonAction />
          }
        },
      ],
    []
  );

  return (
    <div className="container-content">
      <PageHeader title="Usuários">
        <div className="content-input-search">
          <input type="text" className="input-search" placeholder="Buscar usuário" />
          <button className="btn btn-search"><BiSearch /></button>
        </div>
        <Link to={"/create"} className="btn btn-primary">Novo usuário</Link>
      </PageHeader>
      <div>
        <Table {...{ columns }} data={[{ rede: 'Drogaria Conviva', nome: 'André Gomes da Silva', email: 'gui@gmail.conm', perfil: 'Administrador', status: true }]} />
      </div>
    </div>
  );
}