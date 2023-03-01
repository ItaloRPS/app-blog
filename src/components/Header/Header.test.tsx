import { renderTheme } from '@/styles/render-theme'
import { screen } from '@testing-library/react'
import { Header } from '.'
import mock from './mock'

describe('<Header />',()=>{
    test('should render an image, a heading and text', () => {
        renderTheme(<Header {...mock} showText={undefined} />);
    
        expect(
          screen.getByRole('heading', { name: mock.blogName }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('img', { name: /Italo Silva/i }),
        ).toHaveAttribute('src', mock.logo);
        expect(screen.getByText(mock.blogDescription)).toBeInTheDocument();
      });
    
      test('should render image only', () => {
        renderTheme(<Header {...mock} showText={false} />);
    
        expect(
          screen.queryByRole('heading', { name: 'Italo Silva' }),
        ).not.toBeInTheDocument();
        expect(
          screen.getByRole('img', { name: /Italo Silva/i }),
        ).toHaveAttribute('src', mock.logo);
        expect(screen.queryByRole(mock.blogDescription)).not.toBeInTheDocument();
      });

})