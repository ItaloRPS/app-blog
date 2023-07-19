import styled,{css, DefaultTheme} from "styled-components";
import {Title as HeadingStyle} from '../Heading/style'

type MenuBehavionProps = {
    menuVisible:boolean,
    theme:DefaultTheme
}

const wrapperChanger = (menuVisible:MenuBehavionProps['menuVisible'],theme:MenuBehavionProps['theme'])=>css`
    left: ${menuVisible?0:'-25rem'};
    overflow-y: ${menuVisible?'auto':'hidden'};

    @media ${theme.media.lteMedium} {
        left: ${menuVisible?0:'-26rem'};
        
    }
`

const buttonChanger = (menuVisible:MenuBehavionProps['menuVisible'],theme:MenuBehavionProps['theme'])=>css`
    left: ${menuVisible?'26rem':'1rem'};
    color: ${menuVisible?theme.colors.secondary:theme.colors.white};

    @media ${theme.media.lteMedium} {
        left:${menuVisible?'26rem':'0.5rem'};
        
    }
`

export const Wrapper = styled.div<MenuBehavionProps>`
${({theme,menuVisible})=>css`
background: ${theme.colors.primary};
padding:  ${theme.spacings.large};
display: flex;
position: fixed;
z-index: 1;
width: 100%;
max-width: 26rem;
height: 100vh;
top: 0;
left: 0;
transition: all 300ms ease-in-out;
overflow-y: auto;
${wrapperChanger(menuVisible,theme)}
`}
`

export const Nav = styled.nav`
${({theme})=>css`
width: 100%;

`}
`

export const Logo = styled.div`
${({theme})=>css`
    ${HeadingStyle}{
        display: flex;
        justify-content:content;
        margin:0;
        margin-bottom: ${theme.spacings.xhuge};

        img{
            border:  0.5rem solid ${theme.colors.secondary};
        }
    }
`}
`

export const OpenClose = styled.a<MenuBehavionProps>`
${({theme,menuVisible})=>css`
position: fixed;
top: ${theme.spacings.medium};
color:${theme.colors.white};
background: ${theme.colors.primary};
z-index: 2;
width: 3rem;
height: 3rem;
left: 26rem;
transition: all 300ms ease-in-out;
${buttonChanger(menuVisible,theme)}
`}
`