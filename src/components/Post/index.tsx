import { ArticleHeaderProp, ArticleHeader } from '../ArticleHeader'
import { HtmlContent } from '../htmlContent'
import { PostContainer } from '../PostContainer'
import * as S from './styles'

export type PostProps = ArticleHeaderProp & {content:string}

export const Post = ({ 
    id,
    title,
    excerpt,
    cover,
    content,
    categories,
    author,
    createdAt,
}:PostProps)=>{
    return(
        <S.Wrapper>
        <ArticleHeader
        id={id}
        title={title}
        excerpt={excerpt}
        cover={cover}
        categories={categories}
        author={author}
        createdAt={createdAt}
        />
        <PostContainer size='content'>
        <HtmlContent html={content}/>
        </PostContainer>
        </S.Wrapper>
    )
}