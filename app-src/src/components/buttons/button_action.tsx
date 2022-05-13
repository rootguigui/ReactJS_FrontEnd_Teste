import { FiEdit3 } from 'react-icons/fi';
import { BiTrashAlt }from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useModalValue } from '../../context/modal-context';
import { ModalTypeEnum } from '../../models/enums/modal.enum';

export const ButtonAction = () => {
  const { setShowModal } = useModalValue();

  return (
    <div className="btn-actions__container">
      <Link to={"/edit"} className="btn btn-action"><FiEdit3 /></Link>
      <button className="btn btn-action" onClick={() => setShowModal({ show: true, name: ModalTypeEnum.ModalDelete })}>
        <BiTrashAlt color={'#D23A55'} />
      </button>
    </div>
  );
}