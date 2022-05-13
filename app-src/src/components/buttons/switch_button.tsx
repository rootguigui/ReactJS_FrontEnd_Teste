import React, { useState } from 'react';

interface IProps {
  label: string;
  currentValue: boolean;
}

export const ToggleSwitch: React.FC<IProps>  = ({ label, currentValue }) => {
  const [toggle, setToggle] = useState<boolean>(currentValue);

  return (
    <div className="toggle-switch__container">
      <div className="toggle-switch">
        <input type="checkbox" className="toggle-switch__checkbox" 
            name={label} 
            id={label} 
            checked={toggle} 
            onChange={(e) => setToggle(e.target.checked)} />
        <label className="toggle-switch__label" htmlFor={label}>
          <span className="toggle-switch__inner" />
          <span className="toggle-switch__switch" />
        </label>
      </div>
      {label}{" "}
    </div>
  )
}