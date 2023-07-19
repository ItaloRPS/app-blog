import React from 'react'
import * as S from './style';


export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }:MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
};

