import React from 'react';
import {S} from "../HeaderMenu_Styles";

//const items = ['Home', 'Tech Stack', 'Projects',  'Contact']
const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Tech Stack',
        href: 'tech stack'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contact',
        href: 'contact'
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index)=>{
                return   <S.MenuItem key={index}>
                    <S.NavLink  to={item.href}
                                smooth={true}
                                activeClass="active"
                                spy={true}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}

        </ul>
    );
};

