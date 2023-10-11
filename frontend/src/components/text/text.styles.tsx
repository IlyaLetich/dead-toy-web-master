import styled from "styled-components";
import { FontProps, theme } from "../../resources/theme";

export type TextProps = {
    themeFont: FontProps;
    themeColor?: string;
    themePadding?: string | number | [string?, string?, string?, string?];
    transform? : 'lowercase' | 'uppercase';
    alignText?: 'center' | 'right' | 'left';
};

export const Text = styled.div<TextProps>`
    margin: 0;
    width: auto;
    height: auto;
    text-align: ${props => props.alignText};
    padding: ${({ themePadding }) => {
    if (typeof themePadding === 'number' || typeof themePadding === 'string') {
      return `${themePadding}px`;
    } else if (Array.isArray(themePadding)) {
      const [top = '0', right = '0', bottom = '0', left = '0'] = themePadding;
      return `${top} ${right} ${bottom} ${left}`;
    } else {
      return '0';
    }
  }};
    font-family: ${props => props.themeFont.family};
    font-size: ${props => props.themeFont.desktopSize};
    font-weight: ${props => props.themeFont.weight};
    color: ${props => props.themeColor !== undefined ? props.themeColor : theme.colors.surface};
    transform: ${props => props.transform !== undefined ? props.transform : 'none'};
    line-height: ${props => props.themeFont.lineHeightDesk};
    @media (max-width: 960px){
        font-size: ${props => props.themeFont.mobileSize};
        line-height: ${props => props.themeFont.lineHeightMobile}
    }
`;