import React from 'react';
import rectangle from '../images/Rectangle-3.svg';
import team from '../images/team.png';

function About(props) {
    return(
        <div className='about'>
            <h2 className='about__title'>О компании</h2>
            <p className='about__text'>
                Мы команда специалистов по ремонту и обслуживанию бытовой техники и сантехники.
                Наша миссия и призвание – избавлять людей от бытовых хлопот и освобождать им время для важных дел, семьи, отдыха.
                А также минимизировать риск возникновения неприятностей и аварий, связанных с самостоятельным и зачастую неквалифицированным проведением работ.
            </p>
            <img className='about__rectangle' alt='rectangle' src={rectangle} />
            <img className='about__team' alt='team' src={team} />
        </div>
    );
}

export default About;
