import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = 'all' | 'Landing' | 'react' | 'spa'

type TabMenuType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuType> = (props: TabMenuType) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.tabsItems.map((item, index)=>{
                 return   <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status}  as={'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  //margin-bottom: 40px;
ul {
  display: flex;
  justify-content: space-between;
  max-width: 352px;
  width: 100%;
  //border: 1px solid red;
  margin: 0 auto 40px;
}
`
const ListItem = styled.li`
 
`
