import React from "react";
import logo from '../images/logo.svg';
import close from '../images/close.svg';
import call from '../images/call.png';
import whiteBackground from '../images/white-background.svg';
import { options } from '../contants/constants';
import { api } from '../utils/api';
import ym from 'react-yandex-metrika';

function Popup(props) {
    function handleClick() {
        props.closePopup();
    }
    function handleSubmit(evt){
        evt.preventDefault();
        ym(72306793,'reachGoal','popapform')
        props.closePopup();
        api.submit({
            name: nameRef.current.value,
            email: emailRef.current.value,
            service: serviceRef.current.value,
            phone: phoneRef.current.value,
        }).then(() => {
            props.okPopup()
            props.onCloseOkPopup();
            nameRef.current.value = '';
            emailRef.current.value = '';
            phoneRef.current.value = '';
        }).catch(() => {
            console.log('не удалось отправить заявку');
        })
    }
    const nameRef = React.useRef();
    const serviceRef = React.useRef();
    const emailRef = React.useRef();
    const phoneRef = React.useRef();
    return(
        <div className={`popup ${props.state === true ? 'popup__opened' : ''}`}>
            <form onSubmit={handleSubmit} className='popup__form' >
              <img className='popup__logo' alt='logo' src={logo} />
              <button type='Button' onClick={handleClick} className='popup__close'>
                  <img className='popup__close-img' alt='close' src={close} />
              </button>
              <input ref={nameRef} maxLength={30} required className='popup__input' placeholder='Имя' />
              <select ref={serviceRef} required className='popup__input_selected' placeholder='Выберите услугу'>
                  {options.map((item) => {
                      return(
                          <option key={Math.random()} value={item}>{item}</option>
                      );
                  })}
              </select>
              <input ref={emailRef} className='popup__input' placeholder='Почта (не обязательно)' />
              <input ref={phoneRef} required className='popup__input' placeholder='Номер телефона*' />
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
