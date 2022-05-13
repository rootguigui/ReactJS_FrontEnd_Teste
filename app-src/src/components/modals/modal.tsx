import React from 'react';

interface IModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  id: string;
  className: string;
}

export const Modal: React.FC<IModalProps> = ({ children, isVisible, id, className }) => { 
  return (
    <div id={id} className="modal" style={{ display: isVisible ? "block": "none" }}>
      <div className={`modal-content ${className}`}>
        {children}
      </div>
    </div>
  );
}