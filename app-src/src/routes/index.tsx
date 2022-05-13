import {
  Routes,
  Route
} from "react-router-dom";
import { UserCreate } from "../views/user/create";
import { UserEdit } from "../views/user/edit";
import { UserList } from "../views/user/list";

export const RootRoutes = () => {
   return (
      <Routes>
        <Route  path="/" element={<UserList />}/>
        <Route  path="/create" element={<UserCreate />}/>
        <Route  path="/edit" element={<UserEdit />}/>
      </Routes>
   )
}