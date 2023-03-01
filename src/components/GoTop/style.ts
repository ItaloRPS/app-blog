import style, { css,DefaultTheme } from 'styled-components'
export const Container = style.a`
    ${({theme})=> css`
    position: fixed;
    background-color:${theme.colors.mediumGray};
    color:${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
`}
`