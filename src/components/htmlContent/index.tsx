import * as S from './style'

export type HtmlContentProps = {
     html: string;
   };

export const HtmlContent = ({html}:HtmlContentProps) =>{
     return (
          <S.Container dangerouslySetInnerHTML={{__html:html }} />
     )
}



