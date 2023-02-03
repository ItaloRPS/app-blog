'use client'
import s,{css} from 'styled-components'
const Teste = s.h1`
${({ theme}) => css`
    color: ${ theme.colors.mediumGray}

  `}
`
export default function Home() {
  return (
    <Teste>teste</Teste>
  )
}
