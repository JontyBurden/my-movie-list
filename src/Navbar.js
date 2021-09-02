import NetflixLogo from './Netflix-Logo.png'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className="task-bar">
            <ul className="logo">My Movie List
                <li className="profile"><a href="">Profile <CgProfile /></a></li>
            
            </ul>
            <div className="navbar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">MyList</a></li>
                    <form action="" className="search-bar">
                        <input 
                            type="text"
                            placeholder="Search Movies"
                         />
                            <FaSearch className="FaSearch" />
                    </form>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;