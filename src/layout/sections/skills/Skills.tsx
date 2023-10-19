import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle, TitleText} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";


const skillData = [
    {
        iconId: 'html',
        title: 'HTML5'
    },
    {
        iconId: 'css',
        title: 'CSS3'
    },
    {
        iconId: 'react',
        title: 'REACT'
    },
    {
        iconId: 'js',
        title: 'JS'
    },
    {
        iconId: 'ts',
        title: 'TS'
    },
    {
        iconId: 'redux',
        title: 'REDUX'
    },
    {
        iconId: 'styled-components',
        title: 'styled-components'
    }

]
export const Skills: React.FC = () => {
    return (
        <S.Skills id={'tech stack'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <TitleText>Technologies I’ve been working with recently</TitleText>
                <FlexContainer wrap={'wrap'} justify={'space-between'}>

                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index} title={s.title}/>
                        })}
                    </Fade>

                </FlexContainer>
            </Container>

        </S.Skills>
    );
};

