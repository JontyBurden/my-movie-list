import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {CgProfile, CgSidebarOpen, CgClose} from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import  { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className='navbar'>
        <IconContext.Provider value={{color: 'fff'}}>
            <Link to='#' className='menu-bars'>
                <CgSidebarOpen onClick={showSidebar}/>
            </Link>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <CgClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li className={item.cName} key={index}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    );
}
 
export default Navbar;