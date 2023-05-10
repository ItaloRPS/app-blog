import { BaseTemplateProps } from '.'
import {data} from '../../api/dados.json'

const {blogDescription,blogName,createdAt,footer,menuLink} = data.setting.data.attributes
const {id} = data.setting.data
const {attributes:logo} = data.setting.data.attributes.logo.data[0]
const settings = {
    id,
    blogDescription,
    blogName,
    footer,
    menuLink,
    logo,
    text:'Texto da Footer'
}

export default {
    settings:settings,
    children: 'Dados da post'
} as BaseTemplateProps