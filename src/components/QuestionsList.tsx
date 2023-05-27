import React, { useEffect, useState } from 'react';
import { QuestionType, values } from '../redux-toolkit/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-toolkit/store/store';

type QuestionsListType = {
    item: values 
    changeValue: (e: any) => void
    value: string   
    currentQuestion: QuestionType | null
}

export const QuestionsList: React.FC<QuestionsListType> = ({item, changeValue, value, currentQuestion}) => {
    let answerId
    if (currentQuestion && currentQuestion.answer != null) {
        answerId = currentQuestion.answer.id
    }    

    return (
        <>
            <label className={parseInt(value) == item.id ? `${"radio-block"} + ${"radio-block--active"}` : "radio-block"}>
                <input onChange={changeValue} type="radio" value={item.id} name="radio-group" className="radio-block__real" defaultChecked={item.id === answerId}/>
                <div className="radio-block__fake"></div>
                <div className="radio-block__text">{item.value}</div>
            </label>
        </>
    )
}

