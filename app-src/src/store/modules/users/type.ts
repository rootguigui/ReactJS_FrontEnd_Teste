import { IUserInitialState } from "./reducer";

export const GetAllUsersString: string = "GetAllUsers";
export const ConsultAllUsersString: string = "ConsultAllUsersString";
export const DeleteCurrentUser: string = "DeleteCurrentUser";
export const CreateNewUser: string = "CreateNewUser";
export const GetCurrentUser: string = "GetCurrentUser";

interface GetAllUsers {
  type: typeof GetAllUsersString,
  payload: null
}

interface ConsultAllUsers {
  type: typeof ConsultAllUsersString,
  payload: IUserInitialState
}

export interface ConsultUserResponse {
  id: number,
  redes: { nome: string },
  user: { 
    nome: string,
    email: string,
    profile: number,
    status: boolean
  }
}

export type UsersAction = GetAllUsers | ConsultAllUsers;