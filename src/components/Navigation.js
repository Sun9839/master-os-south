import React from "react";

function Navigation(props) {
    return(
        <nav className={`navigation ${props.active === true ? 'navigation__mobile-active' : ''}`}>
            <a className='navigation__link'>О компании</a>
            <a className='navigation__link'>Услуги</a>
            <a className='navigation__link navigation__link_color_black'>Контакты</a>
            <button className='navigation__button'>Оформить заказ</button>
        </nav>
    );
}

export default Navigation;
