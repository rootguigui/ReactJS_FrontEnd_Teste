import { ConsultAllUsersString, UsersAction } from "./type";

export interface IUsersListResult {
  id: number;
  rede: string, 
  nome: string, 
  email: string, 
  profile: number, 
  status: boolean, 
}

export interface IUserInitialState {
  list: Array<IUsersListResult>;
}

const initialState: IUserInitialState = {
  list: []
}

export default function users(state: IUserInitialState = initialState, action: UsersAction): IUserInitialState {
  switch(action.type) {
    case ConsultAllUsersString:
      return {...state, list: action.payload?.list || [] }
    default: return state;
  }
} 