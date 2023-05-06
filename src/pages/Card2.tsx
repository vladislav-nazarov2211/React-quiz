import React, { useEffect } from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux-toolkit/store/store';
import { setcurrentCardQuestion } from '../redux-toolkit/slices/questionsSlice';
import { useLocation } from 'react-router';

export const Card2 = () => { 

    const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	const location = useLocation()
    const path: number =  parseInt(location.pathname.substring(1)) 
    dispatch(setcurrentCardQuestion(path))
    const cardNext = (parseInt(currentCardQuestion) + 1).toString()
    const cardPrev = (parseInt(currentCardQuestion) - 1).toString()

    return (
        <CardQuestions cardNext={cardNext} cardPrev={cardPrev} currentCardQuestion={currentCardQuestion} />
    )
}