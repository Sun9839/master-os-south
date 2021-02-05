import React from "react";
import Header from "./Header";
import whiteRectangle from '../images/Rectangle-1.svg';
import yellowRectangle from '../images/Rectangle-2.svg';
import mouse from '../images/mouse.svg';
import master from '../images/master.png';

function Preview(props) {
    function handleClick(){
        props.openPopup();
    }
    return(
        <div className='preview'>
            <Header
                clickButton={handleClick}
            />
            <h2 className='preview__question'>Нужен мастер по замене резиновых уплотнителей?</h2>
            <p className='preview__under-question'>А также иным услугам по ремонту и обслуживанию бытовой техники и сантехники</p>
            <button onClick={handleClick} className='preview__button'>Оставить заявку</button>
            <img alt='mouse' className='preview__mouse' src={mouse} />
            <img className='preview__white-rectangle' alt='rectangle' src={whiteRectangle} />
            <img className='preview__yellow-rectangle' alt='rectangle' src={yellowRectangle} />
            <img className='preview__master' alt='master' src={master} />
        </div>
    )
}

export default Preview;
