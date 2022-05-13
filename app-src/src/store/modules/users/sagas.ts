import { all, call, put, takeLatest } from "redux-saga/effects";
import { baseUrl } from "../../../services";
import { ConsultUserResponse, GetAllUsersString } from "./type";
import * as actions from './actions';
import { IUsersListResult } from "./reducer";

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

export default all([
  takeLatest(GetAllUsersString, GetAllUsers)
]);