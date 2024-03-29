import { Meta, Story } from '@storybook/react/types-6-0';
import { PostCard,PostCardProps } from '.';
import mock from './mock'

export default {
  title: 'PostCard',
  component: PostCard,
  args:mock,
  argTypes: {
    createdAt:{
        control:{
            type:'date'
        },
    },
  }
  
} as Meta;

export const Template: Story<PostCardProps> = (args) => {
  return (
    <div >
      <PostCard {...args} />
    </div>
  );
};