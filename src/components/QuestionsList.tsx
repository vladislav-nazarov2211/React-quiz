import React, { useState } from 'react';
import { QuestionType, values } from '../redux-toolkit/types';

type QuestionsListType = {
    item: values 
    changeValue: (e: any) => void
    value: number    
}

export const QuestionsList: React.FC<QuestionsListType> = ({item, changeValue, value}) => {
    return (
        <>
            <label className={value == item.id ? `${"radio-block"} + ${"radio-block--active"}` : "radio-block"}>
                <input onChange={changeValue} type="radio" value={item.id} name="radio-group" className="radio-block__real" />
                <div className="radio-block__fake"></div>
                <div className="radio-block__text">{item.value}</div>
            </label>
        </>
    )
}

