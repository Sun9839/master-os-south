import React from "react";
import logo from '../images/logo.svg';
import close from '../images/close.svg';
import call from '../images/call.png';
import whiteBackground from '../images/white-background.svg';
import { options } from '../contants/constants';

function Popup(props) {
    function handleClick() {
        props.closePopup();
    }
    return(
        <div className={`popup ${props.state === true ? 'popup__opened' : ''}`}>
          <form className='popup__form' >
              <img className='popup__logo' alt='logo' src={logo} />
              <button type='Button' onClick={handleClick} className='popup__close'>
                  <img className='popup__close-img' alt='close' src={close} />
              </button>
              <input maxLength={30} required className='popup__input' placeholder='Имя' />
              <select required className='popup__input_selected' placeholder='Выберите услугу'>
                  {options.map((item) => {
                      return(
                          <option value={item}>{item}</option>
                      );
                  })}
              </select>
              <input  className='popup__input' placeholder='Почта (не обязательно)' />
              <input required className='popup__input' placeholder='Номер телефона*' />
              <span className='popup__span'>*в течении 30 минут с Вами свяжется наш сотрудник</span>
              <button className='popup__button'>Оставить заявку</button>
              <p className='popup__or'>или</p>
              <a className='popup__call' href="tel:+79612808784">
                <img className='popup__call-image' alt='call' src={call} />
              </a>
              <img className='popup__background' src={whiteBackground} alt='background' />
          </form>
        </div>
    );
}

export default Popup;