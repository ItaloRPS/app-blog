import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProp } from '.';


export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: {
    id:'123x3',
    title:'Italo Silva',
     excerpt:'Tudo sobre react',
     cover:'/asset/images/Superlogo.png',
     createdAt:'2023-03-02T15:16:09.246+00:00',
     author:'Italo Silva',
     categories:[{id:'123a',
                displayName: 'React',
                slug: 'react',
            }]
  },
  argTypes: {
    createdAt:{
        control:{
            type:'date'
        },
    },
  }
  
} as Meta;

export const Template: Story<ArticleHeaderProp> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};