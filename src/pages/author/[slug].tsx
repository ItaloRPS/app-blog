import { loadPosts } from "../../api/load-posts";
import { PostTemplate } from "../../templates/PostTemplate";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
export default function AuthorPage({posts,setting}:any){
   const router = useRouter()
   if(router.isFallback){
    return<h1>Carregando...</h1>
   }

   return (
     <>
        <Head>
          <title>Author: {posts[0].author.displayName}</title>
          <meta name="description" content={posts.excerpt}></meta>
        </Head>
        <PostTemplate post={posts[0]} settings={setting}/>
    </>
        )
}
//cadastrando as rotas
export const getStaticPaths:GetStaticPaths = async()=>{
    return {
      paths:[],
      fallback:true//recaraga pagina para buscar novas rotas cadastradas
    }
}


export const getStaticProps:GetStaticProps<any> = async (ctx) => {
  var data = null;
  var slug = ctx.params?.slug as String
  let authorSlug = { authorSlug:{contains: slug} }
  try {
    data = await loadPosts(authorSlug);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts|| !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: getDataSetting(data.setting.data),
      posts: getDataPosts(data.posts.data),
    },
    revalidate:24*60*60
  };
};


function getDataPosts(postData:Array<any>){
    const posts = []
    for (const post of postData) {
      var {id,attributes:{slug,title,excerpt,content,createdAt,allowComments,cover,categories,tags,author}} = post
      posts.push(
        {
          id,
          slug,
          title,
          excerpt,
          content,
          createdAt,
          allowComments,
          cover:getDataCover(cover.data),
          categories:getDataCategories(categories.data),
          tags:getDataTags(tags.data),
          author:getDataAuthor(author.data),
        }
      )
    }
    return posts
  }
  
  function getDataCover(coverData:Array<any>){
    const covers =  coverData.map((cover)=>{
      const {id,attributes:{alternativeText,url}} = cover
      return {
            id,
            alternativeText,
            url
          }
     }
    )
    return covers
  }
  
  function getDataCategories(categoriesData:Array<any>){
    const categories =  categoriesData.map((categorie)=>{
      const  {id,attributes:{displayName,slug}} = categorie
      return {
              id,
              slug,
              displayName,
            }
          }
    )
  
    return categories
  }
  
  function getDataTags(tagsData:Array<any>){
    const tags =  tagsData.map((tag)=>{
      const  {id,attributes:{displayName,slug}} = tag
      return {
              id,
              slug,
              displayName,
            }
          }
    )
  
      return tags
  }
  
  function getDataAuthor(author:any){
    const  {id,attributes:{displayName,slug}} = author
    return {
      id,
      displayName,
      slug
    }
  }
  
  function getDataSetting(setting:any){
    const  {id,attributes:{blogName,blogDescription,logo,menuLink}} = setting
    return  {
      id,
      blogName,
      blogDescription,
      logo:getDataLogo(logo.data),
      menuLink,
    }
  }
  
  function getDataLogo(logoData:any){
    const  {id,attributes:{alternativeText,url}} = logoData
  
      return {
              id,
              alternativeText,
              url,
            }
  }