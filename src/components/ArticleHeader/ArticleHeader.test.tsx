import { renderTheme } from '@/styles/render-theme'
import { screen } from '@testing-library/react'
import { ArticleHeaderProp ,ArticleHeader} from '.'
import mock from './mock'

const props:ArticleHeaderProp = mock
describe('<ArticleHeader/>',()=>{
    test('Shoold render heding, cover img and meta',()=>{
        const {container} = renderTheme(<ArticleHeader {...props}/>)
        expect(screen.getByRole('heading',{name:props.title})).toBeInTheDocument()
    })
})