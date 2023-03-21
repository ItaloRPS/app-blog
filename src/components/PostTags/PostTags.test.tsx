import { renderTheme } from "@/styles/render-theme"
import { render, screen } from "@testing-library/react"
import { PostTags, PostTagsProps } from "."

import mock from './mock'
const props:PostTagsProps = mock

describe('PostTags',()=>{
    test('shold render two tags',()=>{
        renderTheme(<PostTags{...props}/>)

        expect(screen.getByRole(/Tags:/i)).toBeInTheDocument()
        expect(screen.getByRole('link')).toHaveLength(2)
    })
})