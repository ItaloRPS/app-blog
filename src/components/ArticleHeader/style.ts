import style ,{css} from 'styled-components'

export const Container =  style.div`
${({theme})=> css`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column
`}
`

export const Excerpt = style.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Cover = style.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;