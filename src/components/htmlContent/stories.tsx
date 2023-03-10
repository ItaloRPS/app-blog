import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent,HtmlContentProps } from '.'
import mock from './mock'

export default {
  title:'TextComponent',
  component: HtmlContent,
  args:{
    html: mock
  },
  argsTypes:{
    html:{type:'string'}
  }
} as Meta

export const Template:Story<HtmlContentProps> = (args)=>{
  return (<div style={{maxWidth:'800px',margin:'0 auto'}}>
        <HtmlContent {...args}/>
      </div>)
}