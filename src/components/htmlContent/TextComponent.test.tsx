import { screen } from '@testing-library/react';
import { renderTheme } from "../../styles/render-theme";
import {HtmlContent} from '.'

describe('<TextComponent/>',()=>{
    it('should render a text', () => {
        renderTheme(<HtmlContent html={'<b>Children</b>'} />);
        expect(screen.getByText('Children')).toBeInTheDocument();
      });
    
});
