import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonAction } from "../../components/buttons/button_action";
import { ToggleSwitch } from "../../components/buttons/switch_button";
import { PageHeader } from "../../components/headers/page_header";
import { ModalDeleteUser } from "../../components/modals/modal_delete_user";
import { ModalResetPassword } from "../../components/modals/modal_reset_password";
import { ModalSuccessAction } from "../../components/modals/modal_success";
import { Table } from "../../components/tables";
import { ColumnMultipleRow } from "../../components/tables/column_multiple_row";
import { ProfileEnum } from "../../models/enums/profile.enum";
import { StoreState } from "../../store/createStore";
import * as actions from '../../store/modules/users/actions';
import { IUsersListResult } from "../../store/modules/users/reducer";

export const UserList = () => {
  const [data, setData] = useState<Array<IUsersListResult>>([]);
  const usersState = useSelector((state: StoreState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllUsers());
  }, []);

  useEffect(() => {
    setData(usersState.list);
  }, [usersState.list]);

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
          Cell: ({ cell }: { cell: any }) => {
            const { profile  } = cell.row.original;
            return ProfileEnum[profile]
          }
        },
        {
          Header: 'Status',
          accessor: 'status',
          width: '10%',
          Cell: ({ cell }: { cell: any }) => {
            const { status, id } = cell.row.original;
            return <ToggleSwitch label="Ativo" id={id} currentValue={status} />
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
      <div className="table-container">
        <Table {...{ columns, data }} />
      </div>
    </div>
  );
}