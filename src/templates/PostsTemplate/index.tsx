import { PostGrid } from "../../components/PostGrid"
import { PostTrapi } from "@/shared-types/post-trapi"
import { settingStrapi } from "@/shared-types/setting.strapi"
import {BaseTemplate} from '../Base'

export type PostsTemplateProps = {
    settings:settingStrapi,
    posts?:PostTrapi[]
}

export const PostsTemplate = ({settings, posts}:PostsTemplateProps)=>{
    return (
        <BaseTemplate settings={settings} >
            <PostGrid posts={posts}/>
        </BaseTemplate>
    )
}

