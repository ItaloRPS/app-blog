import { Menu } from "../../components/Menu"
import { settingStrapi } from "@/shared-types/setting.strapi"
import React from "react"
import * as S from './style'
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { GoTop } from "../../components/GoTop"

export type BaseTemplateProps =  {
    settings:settingStrapi,
    children:React.ReactNode
}

export const BaseTemplate = ({settings,children}:BaseTemplateProps)=>{
    return (
    <S.Wrapper>
        <Menu  
            links={settings.menuLink} 
            blogName={settings.blogName}
            logo={settings.logo.url}
        />
        <S.HeaderContainer>
            <Header 
                blogName={settings.blogName}
                blogDescription={settings.blogDescription}
                logo={settings.logo.url}
                showText={true}
            />
        </S.HeaderContainer>
        <S.ContentContainer>
            {children}
        </S.ContentContainer>
        <S.FooterContainer>
            <Footer footerHtml={settings.text}/>
        </S.FooterContainer>
        <GoTop/>
    </S.Wrapper>
    )
}