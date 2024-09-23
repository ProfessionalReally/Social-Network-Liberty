import classes from './Header.module.css';
import { Logo } from '../Logo/Logo';
import Navbar from "../Navbar/Navbar";
function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Logo className={classes.logo}/>
                <Navbar/>
            </div>
        </header>
    );
}

export default Header;
