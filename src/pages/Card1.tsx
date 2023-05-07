import React  from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useLocation } from 'react-router';

export const Card1 = () => {

	const location = useLocation()
    const path: string =  location.pathname.substring(1)
    const cardNext = (parseInt(path) + 1).toString()
   
    return (
        <CardQuestions cardNext={'/' + cardNext} cardPrev={'/'} currentCardQuestion={path} />
    )
}