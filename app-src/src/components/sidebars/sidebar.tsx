import { FiUsers } from "react-icons/fi";
import { VscChecklist } from 'react-icons/vsc';
import { MdKeyboardArrowRight } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-content__item active">
        <div>
          <FiUsers size={20} />
          <span>Usuários</span>
        </div>
        <div>
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
      <div className="sidebar-content__item">
        <div>
          <VscChecklist size={20} />
          <span>Perfil de acesso</span>
        </div>
        <div>
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
    </div>
  )
}