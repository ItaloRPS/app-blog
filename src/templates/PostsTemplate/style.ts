import styled, { css } from "styled-components";

export const ButtomContainer = styled.div`
${({theme})=>css`
padding: 0 ${theme.spacings.large};
margin: ${theme.spacings.large} 0;
display: flex;
justify-content: center;
`}
`;

export const Buttom = styled.button`
${({theme})=>css`
background:${theme.colors.primary};
color: ${theme.colors.white};
border: none;
padding:  ${theme.spacings.small} ${theme.spacings.large};
cursor: pointer;

&:disabled{
    background:  ${theme.colors.darkerGray};;
    }
`}
`;