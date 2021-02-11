import React from "react";
import success from "../images/success.svg";

function AuthPopup (props){
    return(
        <section className={`popup ${props.state && 'popup__opened'}`} >
            <div className='popup__container'>
                <img alt='ok' className='popup__ok-img' src={success} />
            </div>
        </section>
    )
}

export default AuthPopup;
