import { combineReducers } from "redux";
import { StoreState } from "../createStore";

import users from './users/reducer';

export default combineReducers<StoreState>({ users });