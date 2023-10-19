import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  //flex-direction: row;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props=>props.align || 'stretch'};
  flex-wrap: ${props=>props.wrap || 'nowrap'};
  height: 100%;
`
