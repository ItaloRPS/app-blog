import { PostProps } from ".";

export default{
    id:'123a',
    title:'Italo Silva',
     excerpt:'Tudo sobre react',
     cover:'/asset/images/Superlogo.png',
     createdAt:'2023-03-02T15:16:09.246+00:00',
     author: {
        id: '123456789',
        slug: 'italo-silva',
        displayName: 'Italo Silva',
      },
     categories:[{id:'123a',
                displayName: 'React',
                slug: 'react',
            }]
  }as PostProps