import React from "react";
import logo from '../images/logo.svg';
import email from '../images/email.svg';
import telegram from '../images/telegram.svg';
import instagram from '../images/instagram.svg';

function Footer(props) {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Контакты</h2>
            <div className='footer__container'>
                <div className='footer__requisites'>
                    <img className='footer__logo' alt='logo' src={logo} />
                    <a className='footer__phone' href="tel:+79612808784">+7 (961) 280-97-84</a>
                    <a className='footer__email' href="mailto:master_yuga@gmail.com">master_yuga@gmail.com</a>
                    <p className='footer__text'>Краснодарский край</p>
                    <p className='footer__text'>Пн - вс: 8:00 - 21:00</p>
                </div>
                <div className='footer__requisites'>
                    <div className='footer__link-container'>
                        <a rel="noreferrer" target="_blank" href="mailto:master_yuga@gmail.com">
                            <img className='footer__link-image' alt='link' src={email} />
                        </a>
                        <a className='footer__link' rel="noreferrer" target="_blank" href="mailto:master_yuga@gmail.com">
                            <p className='footer__link-text'>master_yuga@gmail.com</p>
                        </a>
                    </div>
                    <div className='footer__link-container'>
                        <a rel="noreferrer" target="_blank" href='tg://resolve?domain=master_yuga'>
                            <img className='footer__link-image' alt='link' src={telegram} />
                        </a>
                        <a className='footer__link' rel="noreferrer" target="_blank" href='tg://resolve?domain=master_yuga'>
                            <p className='footer__link-text'>@master_yuga - Артём</p>
                        </a>
                    </div>
                    <div className='footer__link-container'>
                        <a rel="noreferrer" target="_blank" href="http://instagram.com/master_yuga">
                            <img className='footer__link-image' alt='link' src={instagram} />
                        </a>
                        <a className='footer__link' rel="noreferrer" target="_blank" href="http://instagram.com/master_yuga">
                            <p className='footer__link-text'>@master_yuga</p>
                        </a>
                    </div>
                </div>
            </div>
            <p className='footer__author'>&#169; 2021 Веб-студия WeFour</p>
        </footer>
    );
}

export default Footer;
