import React from "react";
import Navigation from './Navigation';
import logo from '../images/logo.svg';
import menu from '../images/open.svg';
import close from '../images/close.svg';

function Header(props) {
    const [navigationState, setNavigationState] = React.useState(false);
    const [menuImage, setMenuImage] = React.useState(false);
    function clickNav(){
        setNavigationState(!navigationState);
        setMenuImage(!menuImage)
    }
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <Navigation
                active={navigationState}
            />
            <button className='header__open-nav' onClick={clickNav}>
                <img className='header__open-nav-button' alt='open' src={menuImage === true ? close : menu} />
            </button>
        </header>
    );
}

export default Header;
