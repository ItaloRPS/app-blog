import { Menu,MenuProps } from '.'
import mock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
    title:'Menu',
    component: Menu,
    args:mock,
    argsTypes:{
        text:{type:'string'},
        link:{type:'string'},
        srcImg:{type:'string'}
    }as Meta

}

export const Template:Story<MenuProps> = (args)=>{
    return (<div>
                <Menu {...args}/>
            </div>)
}
