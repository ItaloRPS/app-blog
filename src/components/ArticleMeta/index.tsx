import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { formatDate } from '../../utils/format-data';
import * as S from './style'

export type ArticleMetaProps = {
    createdAt:string;
    author:Author
    categories:Category[]
}
export const ArticleMeta = ({createdAt,author,categories}:ArticleMetaProps)=>{
    return(
        <S.Wrappaer>
            <p>
                <span> Por </span>
                <a href={`/author/${author.slug}`}>{author.displayName}</a>
                <span className="separator"> Em </span>
                <time dateTime={createdAt}>{formatDate(createdAt)}</time>
                <span className="separator">|</span>
                <span className="catgories">
                    {categories.map(category=>{
                            return (
                                <span key={`article-meta-cat-${category.id}`}>
                                    <a href={`category/${category.slug}`}>{category.displayName}</a>
                                </span>
                            )
                        }       
                    )}
                </span>
            </p>
        </S.Wrappaer>
    )
}