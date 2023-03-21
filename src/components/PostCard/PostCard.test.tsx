import { renderTheme } from "@/styles/render-theme"
import { screen } from "@testing-library/react"
import {PostCard,PostCardProps} from './'
import mock from './mock';

const props: PostCardProps = mock;

describe('PostCard',()=>{
    test('should render a headding cover and exerc',()=>{
    renderTheme(<PostCard {...props}/>)
    expect(screen.getByRole('heading',{name:mock.title})).toBeInTheDocument()
    expect(screen.getByRole('img',{name:mock.title})).toBeInTheDocument()
    expect(screen.getByText(mock.title)).toBeInTheDocument()
    expect(screen.getAllByRole('link',{name:mock.title})[0]).toHaveAttribute('href',`/post/${mock.slug}`)
    })
})