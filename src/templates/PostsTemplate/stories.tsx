import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate, PostsTemplateProps} from '.';
import mock from './mock'

const props:PostsTemplateProps = mock

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: props,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<PostsTemplateProps> = (args) => <PostsTemplate {...args} />;
