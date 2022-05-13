import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { BiTrashAlt }from 'react-icons/bi';

export const ButtonAction = () => {
  return (
    <div className="btn-actions__container">
      <button className="btn btn-action"><FiEdit3 /></button>
      <button className="btn btn-action"><BiTrashAlt color={'#D23A55'} /></button>
    </div>
  );
}