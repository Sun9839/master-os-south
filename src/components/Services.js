import React from 'react';
import Card from './Card';

function Services(props) {
    function handleClick() {
        props.openPopup();
    }
    return(
        <div className={`services services__color_${props.color}`}>
            <h2  className='services__title'>{props.title}</h2>
            <div className='services__cards'>
                {props.cards.map((item) => {
                    return(
                        <Card
                            key={Math.random()}
                            image={item.image}
                            text={item.text}
                            price={item.price}
                        />
                    )
                })}
            </div>
            <button onClick={handleClick} className={`services__button ${props.button === true ? 'services__button_active' : ''}`}>Заказать услугу</button>
        </div>
    );
}

export default Services;
