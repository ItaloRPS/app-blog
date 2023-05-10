import { GRAPHQL_QUERY } from '@/graphql/quety'
import { PostTrapi } from '../shared-types/post-trapi'
import {request} from 'graphql-request'
import config from '../config'
import { Settings } from 'http2'

export type  LoadPostsVariables = {
    categorySlug?: String
    postSlug?: String
    postSearch?: String
    authorSlug?: String
    tagSlug?: String
    sort?: String 
    start?: number
    limit?: number
}

export type StrapPostAndSetting = {
    setting:Settings
    posts:PostTrapi
}

export const loadPosts =  async (variables:LoadPostsVariables = {})=> {
    const defaultVariables:LoadPostsVariables ={
        sort:'createAd:desc',
        start:0,
        limit:10
    }

    const data = await request(config.graphqlURL,GRAPHQL_QUERY,{
        ...defaultVariables,
        ...variables
    })

    return data
}