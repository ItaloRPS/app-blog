import { Post } from "../Post"
import { PostCard, PostCardProps } from "../PostCard"
import *  as S from './style'

export type PostGridProps ={
    posts?:PostCardProps[]
}

export const PostGrid = ({posts = []}:PostGridProps) => {
    return (
       <S.Wrapper>
        {
            posts.length==0?(
                <S.NotFound>Posts Não Encontrados</S.NotFound>        
            ):
            (
            <S.Grig>
                {posts.map((post)=>(
                    <PostCard {...post}/>
                ))}
            </S.Grig>
            )

        }

       </S.Wrapper>
    )
}