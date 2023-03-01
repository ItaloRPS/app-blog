import Style,{css} from 'styled-components'

export const Wrappaer = Style.div`
${({theme})=>css`
    font-size: ${theme.font.sizes.small};
    color:${theme.colors.darkerGray};
    font-style: italic;

    .categories span::after{
        content: ',';
    }

    .categories span:last-child::after{
        content: '';
    }

    a{
        color:${theme.colors.secondary}; 
        text-decoration: none;
        transition: all 300ms ease-in-outa;

        &:hover{
            filter:brightness(50%)
        }
    }
`}
`

