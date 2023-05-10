import {Menu as MenuIcon} from '@styled-icons/material-outlined/Menu'
import {Close as CloseIcon} from '@styled-icons/material-outlined/Close'
import { type } from 'os';
import React, { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink} from '../MenuLink';
import * as S from './style'

export type MenuPropsLinks = {
    id: string;
    link: string;
    newTab?: boolean;
    text: string;
  };

  export type MenuProps = {
    links: MenuPropsLinks[],
    blogName:string,
    logo:string
  };

  
  export const Menu = ({links=[],blogName,logo}:MenuProps)=>{
    
    const [menuVisible , setMenuVisible] = useState(false)

    const handleOpenClose = (event:React.MouseEvent)=>{
      event.preventDefault()
      setMenuVisible((v)=>!v)
    }
     

  return(
   <>
   <S.OpenClose href='#' 
                aria-label='Open or close menu' 
                title='Open or Close menu'
                 menuVisible={menuVisible}
                 onClick={handleOpenClose}>
    {menuVisible&&<CloseIcon aria-label='Close Menu'/>}          
    {!menuVisible&&<MenuIcon aria-label='Open Menu'/>}
   </S.OpenClose>
    <S.Wrapper menuVisible={menuVisible} area-hidden={!menuVisible}>
      <S.Nav>
        <S.Logo>
          <LogoLink link='/' text={blogName} srcImg={logo}/>
          {links.map((link)=>(
            <MenuLink link={link.link} key={link.id} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </S.Logo>
      </S.Nav>
    </S.Wrapper>
   </>
)

}