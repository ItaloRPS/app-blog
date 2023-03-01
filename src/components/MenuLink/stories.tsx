import { theme } from '../../styles/theme';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuLink,MenuLinkProps } from '.'
 
export default {
    title:'MenuLink',
    component: MenuLink,
    args:{
        children:'MenuLink',
        link:'https://google.com.br'

    },
    argsTypes:{
        children:{type:'string'},
        link:{type:'string'}
    },
    parameters:{
        backgrounds:{
            default:'ligth'
        }
        
    }

}as Meta

export const Template:Story<MenuLinkProps> = (args)=>{
    return (<div style={{maxWidth:'320px',background:theme.colors.primary,padding:theme.spacings.large}}>
                <MenuLink {...args}/>
                <MenuLink {...args}/>
                <MenuLink {...args}/>
                <MenuLink {...args}/>
                <MenuLink {...args}/>
            </div>)
}