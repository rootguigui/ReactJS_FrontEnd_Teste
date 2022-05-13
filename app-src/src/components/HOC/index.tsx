import { PageHeader } from "../headers/page_header";
import { Table } from "../tables";
import React from 'react';
import { ColumnMultipleRow } from "../tables/column_multiple_row";
import { ToggleSwitch } from "../buttons/switch_button";
import { ButtonAction } from "../buttons/button_action";

export const HOC = () => {
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
      <PageHeader />
      <div>
        <Table {...{ columns }} data={[{ rede: 'Drogaria Conviva', nome: 'André Gomes da Silva', email: 'gui@gmail.conm', perfil: 'Administrador', status: true }]} />
      </div>
    </div>
  );
}