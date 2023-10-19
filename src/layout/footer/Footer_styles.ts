import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.secondaryBg};
  padding: 40px 40px;
`
const Name = styled.span`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin:16})}
  
  //text-align: center;
  //font-family: 'Josefin Sans', sans-serif;
  //font-size: 22px;
  //font-weight: 700;
  letter-spacing: 3px;
 
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.font};
  transition: ${theme.animation.transition};
  
  &:hover{
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.a`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}