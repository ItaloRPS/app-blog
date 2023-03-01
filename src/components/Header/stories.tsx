import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    blogName: 'Italo Silva',
    blogDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  logo: 'assets\images\Superlogo.png',
  link:'/',
  showText: true,
  },
} as Meta;

export const Light: Story<HeaderProps> = (args) => <Header {...args} />;


