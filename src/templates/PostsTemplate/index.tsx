import React, { useState } from 'react'
import { PostGrid } from "../../components/PostGrid"
import { PostTrapi } from "@/shared-types/post-trapi"
import { settingStrapi } from "@/shared-types/setting.strapi"
import {BaseTemplate} from '../Base'
import * as S from './style'
import { loadPosts } from '../../api/load-posts'


export type PostsTemplateProps = {
    settings:settingStrapi,
    posts:any[]
    variables?:any
}

export const PostsTemplate = ({settings, posts, variables}:PostsTemplateProps)=>{
    const [statePosts, setStatePosts] = useState(posts)
    const [stateVariables, setStateVariables] = useState(variables)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [noMorePosts, setNoMorePosts] = useState(false)

    const handleLoadMorePosts = async()=>{
        setButtonDisabled(true)
        const newVariables ={
            ...stateVariables,
            start:stateVariables.start + stateVariables.limit,
            limit:stateVariables.limit
        }

        const morePosts = await loadPosts(newVariables)
        if (!morePosts|| !morePosts.posts||!morePosts.posts.length) {
            setNoMorePosts(true)
            return;
        }
        setButtonDisabled(false)
        setStateVariables(newVariables)
        setStatePosts((p) => [...p,...morePosts.posts])
    }   

    return (
        <BaseTemplate settings={settings} >
            <PostGrid posts={statePosts} />
            <S.ButtomContainer>
                <S.Buttom onClick={handleLoadMorePosts} disabled={buttonDisabled} >
                        {noMorePosts?'Sem Mais Posts':'Carregar Mais'}
                        </S.Buttom>
            </S.ButtomContainer>
        </BaseTemplate>
    )
}

