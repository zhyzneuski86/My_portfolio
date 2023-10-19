import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexContainer direction={'column'} align={'center'}>
                    <SectionTitle>I'm available for Freelance</SectionTitle>
                    <Button type={'submit'}>Hire me</Button>
                </FlexContainer>

            </Container>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  background-color: #5a9ea9;
  min-height: 30vh;
  position: relative;
`