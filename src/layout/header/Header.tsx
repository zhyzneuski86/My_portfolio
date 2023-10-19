import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

// const items = ['Home', 'Tech Stack', 'Projects',  'Contact']


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexContainer justify={'space-between'} align ={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu />
                                        : <DesktopMenu />}
                </FlexContainer>
            </Container>
        </S.Header>
    );
}

