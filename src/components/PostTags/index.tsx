import { PostTag } from '@/shared-types/tags'
import Link from 'next/link'
import * as S from './style'


export type PostTagsProps = {
tags?:PostTag[]
};

export const PostTags = ({tags = []}:PostTagsProps) => {
    if(tags.length == 0){
        return null;
    }

    return (
        <S.Wrapper>
          Tags:
           {tags.map((tag)=>(
           <span>
           <Link legacyBehavior href={`/tag/${tag.slug}`}><a>{tag.displayName}</a></Link>
           </span>
           ))}
        </S.Wrapper>
    )
}