import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  background-color: #eae1e1;
  display: flex;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid #33d7d7;

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    @media ${theme.media.mobile}{
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    
  }
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
  line-height: 1.2;
  ${font({ weight: 400, Fmax: 27, Fmin: 20})};
  p {
    display: none;
  }
`
const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
  //font-family: 'Josefin Sans', sans-serif;
  //font-size: 50px;
  //font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    white-space: nowrap;
  }
  
  @media 
    ${theme.media.mobile} {
      margin: 15px 0 22px;
    }
  
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
  
`
export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText
}