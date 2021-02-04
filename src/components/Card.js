import React from 'react';

function Card(props) {
    return(
        <div className='card'>
            <img className='card__image' alt='service' src={props.image} />
            <p className='card__text'>{props.text}</p>
            <p className='card__price'>{props.price}</p>
        </div>
    );
}

export default Card;
