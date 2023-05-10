import { renderTheme } from '@/styles/render-theme';
import { screen } from '@testing-library/react';
import { BaseTemplate ,BaseTemplateProps} from '.';
import mock from './mock'
const props: BaseTemplateProps = mock
describe('BaseTemplate',()=>{
    test('should render',()=>{
        renderTheme(<BaseTemplate {...props}/>)

        expect(screen.getByRole('img',{name:'myBlog'})).toBeInTheDocument()
        
        expect(screen.getByLabelText('Open or Close menu')).toBeInTheDocument()
        expect(screen.getByLabelText('Texto da Footer')).toBeInTheDocument()
        expect(screen.getByLabelText('Go to Top')).toBeInTheDocument()


    } )
})