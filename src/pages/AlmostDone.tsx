import React from 'react';
import images from './../img/icons/clapping.svg'
import { NavLink } from 'react-router-dom';

export const AmostDone = () => {
    return (
        <div className="plate">
            <div className="cover-content-wrapper">
                <div className="cover-content">

                    <img className="title-img" width="70" src={images} alt="Отлично! Последний шаг!" />
                    <div className="title">Отлично! Последний шаг!</div>

                    <div className="form-group">
                        <label className="label" htmlFor="email">Введите Email:</label>
                        <input className="input-email" type="email" id="email" placeholder="Ваш Email" />
                    </div>

                    <NavLink to='/final' className="button button--huge" type="submit">Получить результаты</NavLink>

                    <label className="checkbox">
                        <input type="checkbox" className="checkbox__real" />
                        <div className="checkbox__fake"></div>
                        <div className="checkbox__text">С политикой конфеденциальности ознакомлен</div>
                    </label>

                </div>
            </div>
	    </div>
    )
}