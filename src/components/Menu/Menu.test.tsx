import { renderTheme } from '@/styles/render-theme';
import { fireEvent, screen } from '@testing-library/react';
import { setServers } from 'dns';
import {Menu, MenuProps} from './'
 
import mock from './mock'
const props:MenuProps = mock

describe('Menu',()=>{
    test('should render button link',()=>{
        renderTheme(<Menu {...props}/>)
        const buttonLink = screen.getAllByRole('link',{name:'Open or Close menu'})
        const openMenu = screen.getByLabelText('Open menu')

        expect(screen.getByLabelText('Close Menu')).not.toBeInTheDocument()
        expect(screen.queryByRole('navegation')).not.toBeInTheDocument()
        expect(buttonLink).toBeInTheDocument()
        expect(openMenu).toBeInTheDocument()
    })

    test('should render button link',()=>{
        renderTheme(<Menu {...props}/>)
        const buttonLink = screen.getByRole('link',{name:'Open or close menu'})
        fireEvent.click(buttonLink)

        expect(screen.getByLabelText('Close Menu')).toBeInTheDocument()
        expect(screen.getByLabelText('Open Menu')).not.toBeInTheDocument()
        expect(screen.queryByRole('navegation')).toBeInTheDocument()
        expect(buttonLink).toBeInTheDocument()
        expect(screen.getByRole('heading',{name:'Italo Silva'})).toBeInTheDocument()
        expect(screen.getByRole('img',{name:'Italo Silva'})).toBeInTheDocument()
        expect(screen.queryByRole('navegation')?.querySelectorAll('a:not([ref="/"])')).toHaveLength(mock.links.length)

        fireEvent.click(buttonLink)

        expect(screen.getByLabelText('Close Menu')).not.toBeInTheDocument()
        expect(screen.getByLabelText('Open Menu')).toBeInTheDocument()
    })

})