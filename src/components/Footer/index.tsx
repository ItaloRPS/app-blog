import React from 'react'
import * as Styled from './style';
import { HtmlContent } from '../htmlContent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }:FooterProps) => {
  return (
    <Styled.Container>
        <HtmlContent html={footerHtml}/>
    </Styled.Container>
  );
};

