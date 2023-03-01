import style, { css } from 'styled-components'
export const Container = style.a`
    ${({theme})=> css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size:${theme.font.sizes.medium};
    font: ${theme.font.family};
    
    > img{
       width: 15rem;
       height: 18rem;
       border-radius: 50%;
    }

`}
`