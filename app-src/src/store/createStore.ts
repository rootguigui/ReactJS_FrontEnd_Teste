import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { IUserInitialState } from "./modules/users/reducer";
import { UsersAction } from "./modules/users/type";

export interface StoreState {
  users: IUserInitialState
};

export type StoreAction = UsersAction;

export default (reducers: Reducer<StoreState, StoreAction>, middleware: Middleware[]) => {
  const enhancer = applyMiddleware(...middleware);
  return createStore(reducers, enhancer);
}