import React from 'react'
import styled,{css, DefaultTheme} from "styled-components";

export type PostContainerProps ={
    size: 'max' |'content'
}


const postContainerStyle ={
    max:(theme:DefaultTheme)=>css`
    max-width:${theme.sizes.max}`
    ,
    content:(theme:DefaultTheme)=>css`
    max-width:${theme.sizes.content}
    `,
}

export const PostContainer = styled.div<PostContainerProps>`
    ${({theme, size})=>css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${postContainerStyle[size](theme)}

    @media ${theme.media.lteMedium}{
        /* padding: 0 calc(${theme.spacings.large}/2); */
    }
`}
`