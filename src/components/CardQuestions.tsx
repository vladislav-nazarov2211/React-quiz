import React, { useEffect, useState } from 'react';
import image from './../img/icons/list.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux-toolkit/store/store';
import { QuestionType } from '../redux-toolkit/types';
import { QuestionsList } from './QuestionsList';
import { setPercent, setScoreAndAnswer } from '../redux-toolkit/slices/questionsSlice';

type PropsType = {
    cardNext: string,
    cardPrev: string,
    currentCardQuestion: string
}

export const CardQuestions: React.FC<PropsType> = ({cardNext, cardPrev, currentCardQuestion}) => {
    const questions = useSelector((state: RootState) => state.questions.questions)
    const totalCards = useSelector((state: RootState) => state.questions.totalCards)
    const percent = useSelector((state: RootState) => state.questions.percent)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null)
    
    useEffect(() => {
        if (currentCardQuestion) {
            questions.find((item) => {
                if ((item.id) == parseInt(currentCardQuestion)) {
                    setCurrentQuestion(item)
                }
            })
        }
    }, [questions]) // если перезагружаем любую катрочку, кроме начальной, то questions сначала 0 и отрисовывать нечего, поэтому указываем зависимость

    useEffect(() => {
        dispatch(setPercent(currentCardQuestion))  // если перезагружаем любую катрочку, кроме начальной, то totalCards сначала 0 и процент делится на 0, поэтому указываем зависимость
    }, [totalCards])
    
    const [value, setValue] = useState<number>(0);

    const changeValue = (e: any) => {
       setValue(e.target.value);
    }

    const saveAnswer = (value: number, e: any) => {
        e.preventDefault()
        if (!value) {
            alert('Выберете вариант ответа!')
        } else {
            if (currentQuestion) {
                dispatch(setScoreAndAnswer({value, currentCardQuestion})) 
            }
            navigate(`${cardNext}`)
        } 
    }    

    

    return (
        <div className="plate">
            <div className="plate-header">
                <div className="plate-header__icon">
                    <img src={image} alt="Icon" />
                </div>
                <div className="plate-header__title"></div>
            </div>
		
            <div className="plate-content">
                <h2 className="title-main">{currentQuestion ? currentQuestion.question : ''}</h2>
                <div className="radio-group">
                    {currentQuestion ? (currentQuestion.values.map((item) => {
                        return <QuestionsList 
                                    key={item.id} 
                                    item={item} 
                                    changeValue={changeValue} 
                                    value={value}    
                                />
                    })) : ''}                 
                </div>
            </div>

		
            <div className="plate-footer">
                <div className="plate-footer__progress">

                    <div className="progress">
                        <div className="progress__label">
                            Готово: <strong>{percent}%</strong>
                        </div>
                        <div className="progress__line-wrapper">
                            <div className="progress__line-bar" style={{width: `${percent}%`}}></div>
                        </div>
                    </div>

                </div>
                <div className="plate-footer__buttons">
                    <NavLink to={cardPrev} className="button button--back">Назад</NavLink>
                    <button onClick={(e) => {saveAnswer(value, e)}} className="button">Далее</button>
                </div>
            </div>
	    </div>
    )
}