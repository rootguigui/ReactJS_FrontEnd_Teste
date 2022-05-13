import React from "react";

interface IProps {
  nome:string;
  email: string;
}

export const ColumnMultipleRow: React.FC<IProps> = ({ nome, email }) => {
  return (
    <div className="table-column_multiple">
      <span>{nome}</span>
      <span>{email}</span>
    </div>
  )
}