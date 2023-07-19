import React from "react";
import { ArticleMeta } from '../ArticleMeta'
import { Heading } from '../Heading'
import * as S from './style'
import {ArticleMetaProps} from '../ArticleMeta/'
import { StrapiImage } from '@/shared-types/StrapiImage '

export type ArticleHeaderProp ={
    id?:string
    title:string,
    excerpt:string,
    cover:StrapiImage[],
    
}&ArticleMetaProps

export const ArticleHeader = ({title, excerpt,cover ,createdAt,author,categories}:any)=>{
    return(
        <S.Container>
            <Heading uppercase={true} size='big'>
            {title}
            </Heading> 
           <S.Excerpt>{excerpt}</S.Excerpt>
             <S.Cover src={cover[0].url} alt={title} />
           <ArticleMeta 
                createdAt={createdAt}
                 author ={author} 
                 categories= {categories}></ArticleMeta> 
        </S.Container>
    )
}