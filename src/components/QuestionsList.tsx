import React, { useState } from 'react';
import { QuestionType } from '../redux-toolkit/types';

type QuestionsListType = {
    index: number
    item: string 
    changeValue: (e: any) => void
    value: number
    setValue: (value: number) => void 
    currentCardQuestion: string
}

export const QuestionsList: React.FC<QuestionsListType> = ({item, changeValue, value, setValue, currentCardQuestion, index}) => {
    return (
        <>
            <label className={value == (index + 1) ? `${"radio-block"} + ${"radio-block--active"}` : "radio-block"}>
                <input onChange={changeValue} type="radio" value={index + 1} name="radio-group" className="radio-block__real" />
                <div className="radio-block__fake"></div>
                <div className="radio-block__text">{item}</div>
            </label>
        </>
    )
}

