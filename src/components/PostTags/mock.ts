import {data} from '../../api/dados.json'
const {data:datas} = data.posts.data[0].attributes.tags
const {id} = datas[0]
const {displayName,slug } =  datas[0].attributes
export default {
    tags:[{id,displayName,slug}]
}