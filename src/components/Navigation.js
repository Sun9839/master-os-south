import React from "react";

function Navigation(props) {
    function handleClick(){
        props.clickButton();
    }
    function toAbout(){
        document.querySelector('.about').scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
    function toServices(){
        document.querySelector('.services').scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    }
    function toFooter(){
        document.querySelector('.footer').scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    }
    return(
        <nav className={`navigation ${props.active === true ? 'navigation__mobile-active' : ''}`}>
            <a onClick={toAbout} className='navigation__link'>О компании</a>
            <a onClick={toServices} className='navigation__link'>Услуги</a>
            <a onClick={toFooter} className='navigation__link navigation__link_color_black'>Контакты</a>
            <button onClick={handleClick} className='navigation__button'>Оформить заказ</button>
        </nav>
    );
}

export default Navigation;
