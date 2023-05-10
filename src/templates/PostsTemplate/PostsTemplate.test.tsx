import { renderTheme } from "@/styles/render-theme"
import { render, screen } from "@testing-library/react"
import { PostsTemplate,PostsTemplateProps } from "."

import mock from './mock'

const props:PostsTemplateProps = mock

describe('PostsTemplate',()=>{
test('Shold render')
    const {container} = renderTheme(<PostsTemplate {...props} posts={undefined} />)
})