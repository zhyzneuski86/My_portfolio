import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {S} from "./Footer_styles";


const socialItemsData = [
    {
        iconId:'instagram',
    },
     {
        iconId:'telegram',
    },
     {
        iconId:'linkedin',
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexContainer direction={'column'} align={'center'}>
                <S.Name>Vadim</S.Name>
                <S.SocialList>
                        {socialItemsData.map((s, index)=>{
                            return   <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                            </S.SocialLink>
                            </S.SocialItem>
                        })}


                </S.SocialList>
                <S.Copyright>© 2023 Vadim Zhiznevski, All Rights Reserved.</S.Copyright>
            </FlexContainer>

        </S.Footer>
    );
};

