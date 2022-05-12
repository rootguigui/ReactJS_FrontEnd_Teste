
export const Header = () => {
  return (
    <div className="header-menu__admin">
      <div className="header-menu__admin-left">
        <div className="header-menu__admin-container">
          <div className="header-menu__admin-link">
            <span>Redes</span>
          </div>
          <div className="header-menu__admin-link">
            <span>Produtos</span>
            <div className="header-menu__admin-count">
              <p className="count__ballon">2</p>
            </div>
          </div>
          <div className="header-menu__admin-link">
            <span className="color-alert">Configurações</span>
          </div>
        </div>
      </div>
      <div className="header-menu__admin-right">
        <div className="header-menu__admin-profile">
          <select>
            <option value="">João Dasneves</option>
          </select>
        </div>
      </div>
    </div>
  );
}