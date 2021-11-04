import React from 'react';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'MyList',
        path: '/MyList',
        icon: <AiOutlineUnorderedList />,
        cName: 'nav-text'
    }
    
]