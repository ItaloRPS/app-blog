import { Post } from "../../components/Post"
import { PostTrapi } from "../../shared-types/post-trapi"
import { settingStrapi } from "../../shared-types/setting.strapi"
import {BaseTemplate} from '../Base'
import { PostTags } from "../../components/PostTags"

import * as S from './style'

export type PostTemplateProps = {
    settings:settingStrapi,
    post:PostTrapi
}

export const PostTemplate = ({settings, post}:PostTemplateProps)=>{
    return (
        <BaseTemplate settings={settings} >
            <Post {...post}/>
            <S.TagsContaine>
                <PostTags tags={post.tags}/>
            </S.TagsContaine>
        </BaseTemplate>
    )
}

