import React from 'react';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

export const Breadcrumb: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="breadcrumb">
      <h1 className="breadcrumb-title">{title}</h1>
    </div>
  );
}

export const PageHeader = () => {
  return (
    <div className="header-page-content ">
      <Breadcrumb title={"Usuários"} />
      <div className="header-page-content__right">
        <div className="content-input-search">
          <input type="text" className="input-search" placeholder="Buscar usuário" />
          <button className="btn btn-search"><BiSearch /></button>
        </div>
        <Link to={"/create"} className="btn btn-primary">Novo usuário</Link>
      </div>
    </div>
  );
}