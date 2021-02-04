import React from 'react';

function Advantage(props) {
    return(
        <div className='advantage__container'>
          <div className='advantage'>
            <img className='advantage__logo' alt='advantage' src={props.logoOne} />
            <h3 className='advantage__title'>{props.titleOne}</h3>
            <p className='advantage__text'>{props.textOne}</p>
          </div>
          <div className='advantage'>
            <img className='advantage__logo' alt='advantage' src={props.logoTwo} />
            <h3 className='advantage__title'>{props.titleTwo}</h3>
            <p className='advantage__text'>{props.textTwo}</p>
          </div>
        </div>
    );
}

export default Advantage;
