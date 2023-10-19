import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer";
import {S} from "../Skills_Styles";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexContainer direction={'column'} align={'center'}>
                <Icon iconId={props.iconId}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
            </FlexContainer>
        </S.Skill>
    );
};

