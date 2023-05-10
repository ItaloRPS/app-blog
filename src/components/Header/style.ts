import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components'
import {Title as HeaderTitle} from '../Heading/style'

export const Wrapper =  styled.header`
${({theme})=>css`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    padding-bottom: ${theme.spacings.xhuge};
    max-width: ${theme.sizes.max};
    color:${theme.colors.darkText};
    font-size:${theme.font.sizes.small};
    margin: 0 auto;

    ${HeaderTitle}{
        margin: 0 0 cal(${theme.spacings.small} - 1rem);
    }

    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      & > ${HeaderTitle}{
        margin: 0 0 {theme.spacings.medium} 0;
      }
    }
`}
`
export const Content = styled.div`
${({ theme }) => css`
  display: flex;
  flex-flow: column wrap;
  margin-left: ${theme.spacings.large};
  max-width: 48rem;
  @media ${theme.media.lteSmall} {
    margin-left: 0;
  }
`}`