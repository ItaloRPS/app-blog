import style, { css } from 'styled-components'
import { Container as TextComponent } from '../htmlContent/style'

export const Container = style.div`
    ${({theme})=> css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    
    a{
        color: inherit;
        text-decoration: none;
    }

    & ${TextComponent}{
        font-size: ${theme.font.sizes.small};
    }

`}
`
