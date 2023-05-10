import styled, { css } from 'styled-components';

export const Grig = styled.div`
margin: 0 auto;
max-width: 120rem;
display: grid;
grid-template-columns: repeat(auto-fill, 28rem);
gap:28px;
justify-content: center;
`
export const NotFound = styled.div`
${({theme})=>css`
padding: ${theme.spacings.large};
text-align: center;
font-size: ${theme.font.sizes.small};

@media ${theme.media.lteSmall} {
    grid-template-columns: 1fr;
}
`}
`
export const Wrapper = styled.div`
  ${({ theme }) => css``}
  width: 100%;
`;