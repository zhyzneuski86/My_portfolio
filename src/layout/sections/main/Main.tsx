import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div >
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vadim Zhiznevski</span></S.Name>
                        {/*<S.MainTitle>A Frontend Developer.</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 90
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="my photo"/>
                        </S.PhotoWrapper>
                    </Tilt>


                </FlexContainer>
            </Container>
        </S.Main>
    );
};
