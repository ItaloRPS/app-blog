import { GRAPHQL_QUERY } from '@/graphql/quety'
import { PostTrapi } from '../shared-types/post-trapi'
import {request} from 'graphql-request'
import config from '../config'
import { Settings } from 'http2'

export type  LoadPostsVariables = {
    categorySlug?: Object
    postSlug?: Object
    postSearch?: Object
    authorSlug?: Object
    tagSlug?: Object
    sort?: String 
    start?: number
    limit?: number
}

export type StrapPostAndSetting = {
    setting:Settings;
    posts:PostTrapi;
    variables?:any;
}

export const loadPosts =  async (variables:LoadPostsVariables = {}):Promise<any>=> {
    let data = {}
    const defaultVariables:LoadPostsVariables ={
        sort:'createAd:desc',
        start:0,
        limit:1
    }
        data = await request(config.graphqlURL,GRAPHQL_QUERY,{
            ...defaultVariables,
            ...variables
        })
    return data
}