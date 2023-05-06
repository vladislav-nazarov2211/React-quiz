import React, { useEffect, useState } from 'react';
import image from './../img/icons/list.png'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux-toolkit/store/store';
import { QuestionType } from '../redux-toolkit/types';
import { QuestionsList } from './QuestionsList';
import { setScore, setPercent } from '../redux-toolkit/slices/questionsSlice';
import { Preloader } from './Preloader';

type PropsType = {
    cardNext: string,
    cardPrev: string,
    currentCardQuestion: string
}

export const CardQuestions: React.FC<PropsType> = ({cardNext, cardPrev, currentCardQuestion}) => {
    const questions = useSelector((state: RootState) => state.questions.questions)
    const percent = useSelector((state: RootState) => state.questions.percent)
    const dispatch = useDispatch<AppDispatch>()

    const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null)
    
    useEffect(() => {
        if (currentCardQuestion) {
            questions.find((item, index) => {
                if ((index + 1) == parseInt(currentCardQuestion)) {
                    setCurrentQuestion(item)
                }
            })
        }
    }, [questions])

    useEffect(() => {
        dispatch(setPercent(currentCardQuestion))
    }, [currentCardQuestion])
    
    const [value, setValue] = useState<number>(0);

    const changeValue = (e: any) => {
       setValue(e.target.value);
    }

    const saveAnswer = (value: number) => {
        if (currentQuestion) {
            let answer = currentQuestion.values.find((item, index) => {
                if ((index + 1) == value) {
                    return item
                } 
            }) 
            
            if (currentQuestion.correct == answer) {
                dispatch(setScore(1))
            }
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
                    {currentQuestion ? (currentQuestion.values.map((item, index) => {
                        return <QuestionsList 
                                    key={index} 
                                    index={index} 
                                    item={item} 
                                    changeValue={changeValue} 
                                    value={value} 
                                    setValue={setValue} 
                                    currentCardQuestion={currentCardQuestion}   
                                />
                    })) : ''}                 
                </div>
            </div>

		
            <div className="plate-footer">
                <div className="plate-footer__progress">

                    <div className="progress">
                        {percent && (percent != Infinity) ? 
                            <div className="progress__label">
                                Готово: <strong>{percent}%</strong>
                            </div>
                        :
                            <div className="preloader__position">
                                <Preloader />
                            </div>   
                        }
                        <div className="progress__line-wrapper">
                            <div className="progress__line-bar" style={{width: `${percent}%`}}></div>
                        </div>
                    </div>

                </div>
                <div className="plate-footer__buttons">
                    <NavLink to={cardPrev} className="button button--back">Назад</NavLink>
                    <NavLink to={cardNext} onClick={() => {saveAnswer(value)}} className="button">Далее</NavLink>
                </div>
            </div>
	    </div>
    )
}