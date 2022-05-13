import React from 'react';
import { Breadcrumb } from './breadcrumb';

interface IProps {
  title: string;
  children: React.ReactNode
}

export const PageHeader: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="header-page-content ">
      <Breadcrumb {...{ title }} />
      <div className="header-page-content__right">
        {children}
      </div>
    </div>
  );
}