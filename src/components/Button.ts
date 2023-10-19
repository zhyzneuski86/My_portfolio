import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
 
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before{
      height: 100%;
      width: 100%;
      bottom: -15px;
    }
  }
  &::before{
    content: '';
    display: inline-block;
    height: 6px;
    width: 50%;
    background-color: aqua;
    position: absolute;
    bottom: 0;
    z-index: -1;
    //transform: translateX(-50%);
    transform: translate(-50%, -50%);
    transition: ${theme.animation.transition};
  }
  
  &.center::before {
    top: 50%;
    
  }
 
`