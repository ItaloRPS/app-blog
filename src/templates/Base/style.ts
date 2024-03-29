import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({theme})=>css`

`}
`
export const HeaderContainer = styled.div`
${({theme})=>css`
margin-top: ${theme.spacings.xhuge};
`}
`
export const ContentContainer = styled.div`
${({theme})=>css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`}
`
export const FooterContainer = styled.div`
${({theme})=>css`
max-width: 120rem;
width: 100%;
margin: 0 auto;
padding: ${theme.spacings.large};
`}
`