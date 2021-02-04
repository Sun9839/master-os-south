import React from "react";
import Navigation from './Navigation';
import logo from '../images/logo.svg';
import menu from '../images/open.svg';

function Header(props) {
    const [navigationState, setNavigationState] = React.useState(false);
    function clickNav(){
        setNavigationState(!navigationState);
    }
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <Navigation
                active={navigationState}
            />
            <button className='header__open-nav' onClick={clickNav}>
                <img className='header__open-nav-button' alt='open' src={menu} />
            </button>
        </header>
    );
}

export default Header;
