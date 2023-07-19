import React from 'react'
import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './style';

export type HeaderProps = {
    blogName:string,
    blogDescription:string,
    logo:string,
    showText?:boolean,
    
}

export const Header = ({blogName, blogDescription, logo, showText=true}:HeaderProps)=>{
    
    return(
            <Styled.Wrapper>
                <LogoLink
                    text={`${blogName} - ${blogDescription}`}
                    link='/'
                    srcImg={logo}
                    newTab={false}
                    />

                {showText && (
                    <Styled.Content>
                        <Heading size="small" as="h2" colorDark={true} uppercase={false}>
                        {blogName}
                        </Heading>
                        <p>{blogDescription}</p>
                    </Styled.Content>
                    )}
            </Styled.Wrapper>
                

    )
}