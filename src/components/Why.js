import React from 'react';
import Advantage from './Advantage';
import chz from "../images/chz.png";
import time from '../images/time.png';
import price from '../images/price.png';
import experience from '../images/expirence.png';

function Why(props) {
    const advantages = [
        {
            logoOne: price,
            titleOne: 'Цена',
            textOne: 'Низкие цены на услуги',
            logoTwo: time,
            titleTwo: 'Скорость',
            textTwo: 'Приедем в течении часа или в удобное время',
        },
        {
            logoOne: experience,
            titleOne: 'Опыт',
            textOne: 'Работаем с клиентами более 10 лет',
            logoTwo: chz,
            titleTwo: 'Качество',
            textTwo: 'Качественное решение любых задач',
        },
    ];
    return(
        <div className='why'>
            <h2 className='why__title'>Почему мы?</h2>
            <div className='why__advantages'>
                {advantages.map((item) => {
                    return(
                        <Advantage
                            key={Math.random()}
                            logoOne={item.logoOne}
                            titleOne={item.titleOne}
                            textOne={item.textOne}
                            logoTwo={item.logoTwo}
                            titleTwo={item.titleTwo}
                            textTwo={item.textTwo}
                            />);
                })}
            </div>
        </div>
    );
}

export default Why;
