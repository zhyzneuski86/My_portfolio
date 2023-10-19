import styled from "styled-components";

// Skills

const Skills = styled.section`
 position: relative;
`
// Skill

const Skill = styled.div`
  width: 120px;
  height: 120px;
  flex-grow: 1;
  //flex-shrink: 0;
`
const SkillTitle = styled.h3`
  text-align: center;
  //margin: 5px 0 5px;
 text-transform: uppercase;
`

export const S = {
    Skills,
    Skill,
    SkillTitle,

}