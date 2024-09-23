import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {MdMessage} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {IoSettings} from "react-icons/io5";
import {FaRegNewspaper} from "react-icons/fa6";
import {FaMusic} from "react-icons/fa6";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink
                    to='/profile'
                >
                    {({isActive}) => (
                        <CgProfile className={isActive ? classes.activeLink : classes.link}/>
                    )}
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    to='/dialogs'
                >
                    {({isActive}) => (
                        <MdMessage className={isActive ? classes.activeLink : classes.link}/>
                    )}
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    to='/news'
                >
                    {({isActive}) => (
                        <FaRegNewspaper className={isActive ? classes.activeLink : classes.link}/>
                    )}
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    to='/music'
                >
                    {({isActive}) => (
                        <FaMusic className={isActive ? classes.activeLink : classes.link}/>
                    )}
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    to='/settings'
                >
                    {({isActive}) => (
                        <IoSettings className={isActive ? classes.activeLink : classes.link}/>
                    )}
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
