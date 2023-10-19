import React, {useState} from 'react';
import {SectionTitle, TitleText} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/photo-1.webp'
import timerImg from './../../../assets/images/photo-2.webp'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";
import {AnimatePresence, motion} from "framer-motion"

//const TabsStatus = ['All', 'Landing page', 'React', 'spa']

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all',

    },
    {
        title: 'Landing page',
        status: 'Landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },

]

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quidem.",
        type: 'spa',
        id: 1
    },
    {
        title: 'Timer',
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quidem.",
        type: 'react',
        id: 2
    },

]


export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks = worksData

    if (currentFilterStatus === 'Landing') {
        filteredWorks = worksData.filter(work => work.type === 'Landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TitleText>Things I’ve built so far</TitleText>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{  width: "400px",
                                    flexGrow: 1,  maxWidth: "540px"}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title} text={w.text}
                                          src={w.src} key={w.id}
                                    />
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>

                </FlexContainer>
            </Container>
        </S.Works>
    );
};

