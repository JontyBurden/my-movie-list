import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="task-bar">
            <ul className="logo">My Movie List
                <li className="profile"><a href="">Profile <CgProfile /></a></li>
            
            </ul>
            <div className="navbar">
                <ul>
                    <li><a href="">Movies</a></li>
                    <li><Link to="MyList">MyList</Link></li>
                    <li><Link to="/">Home</Link></li>
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