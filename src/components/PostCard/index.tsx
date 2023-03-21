import Link from "next/link"
import { Heading } from "../Heading"
import { StrapiImage } from "../../shared-types/StrapiImage "
import * as S from './style'
export type PostCardProps ={
    id:string,
    title:string,
    cover:StrapiImage,
    excerpt:string,
    slug:string
}


export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
    return (
      <S.Wrapper>
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>
            <S.Cover src={cover.url} />
          </a>
        </Link>
  
        <Heading as="h2" size="small" uppercase={false}>
          <Link href={`/post/${slug}`} legacyBehavior>
            <a>{title}</a>
          </Link>
        </Heading>
  
        <S.Excerpt>{excerpt}</S.Excerpt>
      </S.Wrapper>
    );
  };