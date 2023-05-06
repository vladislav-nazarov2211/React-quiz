import React from 'react';
import images from './../img/pictures/html.png'
import { NavLink } from 'react-router-dom';

export const CardStart = () => {
    return (
        <div className="plate">
            <div className="cover-content-wrapper">
                <div className="cover-content">
                    <img className="title-img" src={images} alt="HTML" />
                    <div className="title">Определи свой уровень знаний в викторине</div>
                    <p>Ответь на серию вопросов, получи оценку знаний, список уроков, чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
                    <NavLink to="/1" className="button">Пройти тест</NavLink>
                </div>
            </div>
	    </div>
    )
}