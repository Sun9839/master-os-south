import React from "react";
import Navigation from './Navigation';
import logo from '../images/logo.svg';
import menu from '../images/open.svg';

function Header(props) {
    const [navigationState, setNavigationState] = React.useState(false);
    const [menuOnNav, setMenuOnNav] = React.useState(false);
    function clickNav(){
        setNavigationState(!navigationState);
        setMenuOnNav(!menuOnNav);
    }
    function clickButton(){
        props.clickButton();
    }
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <Navigation
                clickButton={clickButton}
                active={navigationState}
            />
            <button className={`header__open-nav ${menuOnNav === true ? 'header__open-nav_opened' : ''}`} onClick={clickNav}>
                <img className='header__open-nav-button' alt='open' src={menu} />
            </button>
        </header>
    );
}

export default Header;
