import React from 'react';
import Advantage from './Advantage';
import test from "../images/testElipse.svg";

function Why(props) {
    const advantages = [
        {
            logo: test,
            title: 'Цена',
            text: 'Низкие цены на услуги',
        },
        {
            logo: test,
            title: 'Скорость',
            text: 'Приедем в течении часа или в удобное время',
        },
        {
            logo: test,
            title: 'Опыт',
            text: 'Работаем с клиентами более 10 лет',
        },
        {
            logo: test,
            title: 'Качество',
            text: 'Качественное решение любых задач',
        },
    ];
    return(
        <div className='why'>
            <h2 className='why__title'>Почему мы?</h2>
            <div className='why__advantages'>
                {advantages.map((item) => {
                    return(
                        <Advantage
                            logo={item.logo}
                            title={item.title}
                            text={item.text}
                            />);
                })}
            </div>
        </div>
    );
}

export default Why;
