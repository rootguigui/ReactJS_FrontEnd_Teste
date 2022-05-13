import { action } from 'typesafe-actions';
import { IUsersListResult } from './reducer';
import { ConsultAllUsersString, DeleteCurrentUserString, GetAllUsersString } from './type';

export const getAllUsers = () => action(GetAllUsersString);
export const consultAllUser = ({ list }: { list: Array<IUsersListResult> }) => action(ConsultAllUsersString, { list });
// export const createUser = () => action();
export const deleteCurrentUser = (id: number) => action(DeleteCurrentUserString, { id });
// export const getCurrentUser = () => action();