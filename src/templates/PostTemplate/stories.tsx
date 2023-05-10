import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTemplate, PostTemplateProps} from '.';
import mock from './mock'

const props:PostTemplateProps = mock

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: props,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<PostTemplateProps> = (args) => <PostTemplate {...args} />;
 