import styled from "styled-components";

export const Space = styled.div<{ themeSpace: Number }>`
margin-bottom: ${props => (props.themeSpace + 'px').toString()}
`