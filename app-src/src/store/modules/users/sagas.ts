import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../../services";
import { ConsultUserResponse, DeleteCurrentUserString, GetAllUsersString } from "./type";
import * as actions from './actions';
import { IUsersListResult } from "./reducer";
import { ActionType } from 'typesafe-actions';

export function* GetAllUsers() {
  try{
    const { data } = yield call(baseUrl.get, 'list');
    const users: Array<IUsersListResult> = [];

    for(let item of data as Array<ConsultUserResponse>) {
      const { user, redes } = item;
      const consultedUser: IUsersListResult = { id: item.id, rede: redes.nome, nome: user.nome, email: user.email, status: user.status, profile: user.profile }
      users.push(consultedUser);
    }

    yield put(actions.consultAllUser({ list: users }));
  }
  catch(ex) {
    console.log(ex)
  }
}

export function* DeleteCurrentUser({ payload }: ActionType<typeof actions.deleteCurrentUser>) {
  try{
    yield call(baseUrl.delete, `list/${payload.id}`);
  }
  catch(ex) {
    console.log(ex)
  }
}

export default all([
  takeLatest(GetAllUsersString, GetAllUsers),
  takeLatest(DeleteCurrentUserString, DeleteCurrentUser),
]);