import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mock from './mock';
const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);
   expect(
      screen.getAllByText(/^react/i)[0],
    ).toHaveStyle({ 'font-size': '2.4rem' });
    
  });
});