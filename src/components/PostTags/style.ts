import styled,{css} from "styled-components";

export const Wrapper =  styled.p`
${({theme})=>css`
margin: ${theme.spacings.medium} 0;

span{
    margin: 0 0.5rem 0 1rem;
}

span::before{
    content: '';
} 

span::after{
    content: ',';
}

span:last-child::after{
    content: '';
}

a{
    color: ${theme.colors.secondary};
    text-decoration: none;
    transition: all 3ms ease-out;

    &:hover{
        filter:brightness(50%)
    }

}
`}
`