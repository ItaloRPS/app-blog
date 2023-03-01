import { ArticleMeta } from '../ArticleMeta'
import { Heading } from '../Heading'
import * as S from './style'
import {ArticleMetaProps} from '../ArticleMeta/'

export type ArticleHeaderProp ={
    id:string
    title:string,
    excerpt:string,
    cover:string,
    
}&ArticleMetaProps

export const ArticleHeader = ({title, excerpt,cover ,createdAt,author,categories}:ArticleHeaderProp)=>{
    return(
        <S.Container>
            <Heading uppercase={true} size='big'>
            {title}
            </Heading>
            <S.Excerpt>{excerpt}</S.Excerpt>
            <S.Cover src={cover} alt={title} />
            <ArticleMeta 
                createdAt={createdAt}
                 author ={author} 
                 categories= {categories}></ArticleMeta>
        </S.Container>
    )
}