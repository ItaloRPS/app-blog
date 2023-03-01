import { LogoLink,LogoLinkProps } from '.'
 
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
    title:'LogoLink',
    component: LogoLink,
    args:{
        text:'LogoLink',
        srcImg:'',
        link:'http://localhost'
    },
    argsTypes:{
        text:{type:'string'},
        link:{type:'string'},
        srcImg:{type:'string'}
    }as Meta

}

export const Template:Story<LogoLinkProps> = (args)=>{
    return (<div>
                <LogoLink {...args}/>
            </div>)
}
