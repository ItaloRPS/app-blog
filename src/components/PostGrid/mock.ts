import {data} from '../../api/dados.json'

    const {id:idCover, attributes} = data.posts.data[0].attributes.cover.data[0]
    const cover = {...attributes,id:idCover}
    const {id,attributes:{slug,title,excerpt}} =data.posts.data[0]
    const post = {id,slug,title,excerpt,cover}

export default {
    posts:[
        post,
        post,
        post
    ]
}