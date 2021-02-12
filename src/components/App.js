import React from 'react';
import Preview from './Preview';
import About from './About';
import Why from './Why';
import Services from './Services';
import Footer from './Footer';
import Popup from './Popup';
import OkPopup from "./OkPopup";
import {YMInitializer} from "react-yandex-metrika";

import serviceOne from '../images/service1.svg';
import serviceTwo from '../images/service2.svg';
import serviceThree from '../images/service3.svg';
import serviceFour from '../images/service4.svg';
import serviceFive from '../images/service5.svg';
import serviceSix from '../images/service6.svg';
import serviceSeven from '../images/service7.svg';
import serviceEight from '../images/service8.svg';
import serviceNine from '../images/service9.svg';
import serviceTen from '../images/service10.svg';
import serviceEleven from '../images/service11.svg';
import serviceTwelve from '../images/service12.svg';
import serviceThirteen from '../images/service13.svg';
import serviceFourteen from '../images/service14.svg';
import serviceFifteen from '../images/service15.svg';
import serviceSixteen from '../images/service16.svg';
import serviceSeventeen from '../images/service17.svg';
import serviceEighteen from '../images/service18.svg';
import serviceNineteen from '../images/service19.svg';
import serviceTwenty from '../images/service20.svg';

function App(props) {
    const firstCards = [
        {
            image: serviceOne,
            text: 'Вызов сантехника на дом',
            price: 'от 400 р.'
        },        {
            image: serviceTwo,
            text: 'Ремонт духового шкафа',
            price: 'от 650 р.'
        },        {
            image: serviceThree,
            text: 'Ремонт газовой плиты',
            price: 'от 800 р.'
        },        {
            image: serviceFour,
            text: 'Ремонт варочной плиты',
            price: 'от 650 р.'
        },        {
            image: serviceFive,
            text: 'Замена и продажа уплотнительной резины на холодильник',
            price: 'от 700 р.'
        },        {
            image: serviceSix,
            text: 'Ремонт холодильника',
            price: 'от 400 р.'
        },        {
            image: serviceSeven,
            text: 'Ремонт стиральной и сушильной машины',
            price: 'от 400 р.'
        },        {
            image: serviceEight,
            text: 'Услуга “Мастер на час”',
            price: 'от 650 р.'
        },        {
            image: serviceNine,
            text: 'Установка и обслуживание сплит систем (кондиционеры)',
            price: 'от 350 р.'
        },        {
            image: serviceTen,
            text: 'Ремонт встраиваемой кухонной вытяжки',
            price: 'от 800 р.'
        },
    ];
    const secondCards = [
        {
            image: serviceEleven,
            text: 'Установка бытовой техники',
            price: 'от 800 р.'
        },        {
            image: serviceTwelve,
            text: 'Автоперевозка и погрузка',
            price: 'от 250 р.'
        },        {
            image: serviceThirteen,
            text: 'Ремонт холодильного оборудования (производственные)',
            price: 'от 800 р.'
        },        {
            image: serviceFourteen,
            text: 'Ремонт посудомоечной машины',
            price: 'от 280 р.'
        },        {
            image: serviceFifteen,
            text: 'Ремонт электроплит',
            price: 'от 650 р.'
        },        {
            image: serviceSixteen,
            text: 'Ремонт микроволновых печей (СВЧ)',
            price: 'от 600 р.'
        },        {
            image: serviceSeventeen,
            text: 'Ремонт металлопластиковых окон и дверей',
            price: 'от 350 р.'
        },        {
            image: serviceEighteen,
            text: 'Услуги электрика на дом',
            price: 'от 400 р.'
        },        {
            image: serviceNineteen,
            text: 'Ремонт газовых котлов и колонок',
            price: 'от 600 р.'
        },        {
            image: serviceTwenty,
            text: 'Ремонт водонагревателя',
            price: 'от 600 р.'
        },
    ];
    const [popupState, setPopupState] = React.useState(false);
    const [okPopupState, setOkPopupState] = React.useState(false);
    function openPopup(){
        setPopupState(true);
    }
    function closePopup() {
        setPopupState(false);
    }
    function openOkPopup(){
        setOkPopupState(true);
    }
    function closeOkPopup(){
        setOkPopupState(false);
    }
    return(
        <div className='page'>
            <YMInitializer accounts={[72306793]} version="2" />
            <Popup
                state={popupState}
                closePopup={closePopup}
                okPopup={openOkPopup}
                onCloseOkPopup={closeOkPopup}
            />
            <OkPopup
                state={okPopupState}
            />
            <Preview
                openPopup={openPopup}
                toClick='.about'
            />
            <About />
            <Why />
            <Services
                title='Услуги'
                color='black'
                cards={firstCards}
                button={false}
            />
            <Services
                openPopup={openPopup}
                color='white'
                cards={secondCards}
                button={true}
            />
            <Footer />
        </div>
    );
}

export default App;
