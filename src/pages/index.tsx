'use client'
import React from 'react'
import { loadPosts } from '../api/load-posts'
import { useEffect } from 'react'
export default function Home() {
useEffect(()=>{
  loadPosts()
      .then((r)=> console.log(r))
},[])

  return (
    <h1 className='teste'>teste</h1>
  )
}
