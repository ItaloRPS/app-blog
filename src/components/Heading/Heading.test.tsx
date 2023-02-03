import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';


describe('<Heading />', () => {
  test('should render with default values', () => {
    renderTheme(<Heading uppercase={true} size="small" colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  // it('should render with white color', () => {
  //   renderTheme(<Heading uppercase={true} size="small" colorDark={false}>texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyle({
  //     color: theme.colors.white,
  //   });
  // });

  // it('should render correct heading sizes', () => {
  //   const { rerender } = renderTheme(<Heading uppercase={true} size="small">texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyle({
  //     'font-size': theme.font.sizes.medium,
  //   });

  //   rerender(
  //     <ThemeProvider theme={theme}>
  //       <Heading uppercase={true} size="big">texto</Heading>
  //     </ThemeProvider>,
  //   );

  //   expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
  //     'font-size': theme.font.sizes.xlarge,
  //   });

  //   rerender(
  //     <ThemeProvider theme={theme}>
  //       <Heading uppercase={true} size="medium">texto</Heading>
  //     </ThemeProvider>,
  //   );

  //   expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
  //     'font-size': theme.font.sizes.large,
  //   });

  //   rerender(
  //     <ThemeProvider theme={theme}>
  //       <Heading uppercase={true} size="huge">texto</Heading>
  //     </ThemeProvider>,
  //   );

  //   expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
  //     'font-size': theme.font.sizes.xhuge,
  //   });
  // });

  // it('should render correct font-size when using mobile', () => {
  //   renderTheme(<Heading uppercase={true} size="huge">texto</Heading>);
  //   screen.getByRole('heading', { name: 'texto' });

  //   expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
  //     'font-size',
  //     theme.font.sizes.xlarge,
  //     {
  //       media: theme.media.lteMedium,
  //     },
  //   );
  // });

  // it('should render with uppercase letters', () => {
  //   renderTheme(<Heading size ='big' uppercase={true}>texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'texto' });

  //   expect(heading).toHaveStyle({
  //     'text-transform': 'uppercase',
  //   });
  // });


});
