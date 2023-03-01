import { renderTheme } from '@/styles/render-theme';
import { screen } from '@testing-library/react';
import { ArticleMeta,ArticleMetaProps } from '.';
import mock from './mock'

const props: ArticleMetaProps = mock

describe('<ArticleMeta/>',()=>{
    it('Should render author and category', () => {
        renderTheme(<ArticleMeta {...props}/>)
      expect(screen.getByRole('link',{name:'Italo Silva'})).toHaveAttribute('href','/author/italo-silva');
      expect(screen.getByRole('link',{name:'Tech'})).toHaveAttribute('href','/category/Tech');
      expect(screen.getByRole('link',{name:'Js'})).toHaveAttribute('href','/category/javascript');
      });

      it('Should formate date', () => {
        renderTheme(<ArticleMeta {...props}/>)
      expect(screen.getByText('2 de mar. de 2023')).toHaveAttribute('dateTime',props.createdAt);
      });
    
});
