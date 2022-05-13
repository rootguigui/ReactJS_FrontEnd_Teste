import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { BiTrashAlt }from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const ButtonAction = () => {
  const deleteUser = () => console.log('delete')

  return (
    <div className="btn-actions__container">
      <Link to={"/edit"} className="btn btn-action"><FiEdit3 /></Link>
      <button className="btn btn-action" onClick={deleteUser}>
        <BiTrashAlt color={'#D23A55'} />
      </button>
    </div>
  );
}