import React from 'react';

function Advantage(props) {
    return(
        <div className='advantage'>
            <img className='advantage__logo' alt='advantage' src={props.logo} />
            <h3 className='advantage__title'>{props.title}</h3>
            <p className='advantage__text'>{props.text}</p>
        </div>
    );
}

export default Advantage;
