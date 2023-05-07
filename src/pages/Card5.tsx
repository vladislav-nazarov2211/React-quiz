import React from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useLocation } from 'react-router';

export const Card5 = () => {

    const location = useLocation()
    const path: string =  location.pathname.substring(1)
    const cardNext = (parseInt(path) + 1).toString()
    const cardPrev = (parseInt(path) - 1).toString()

    return (
        <CardQuestions cardNext={'/almostdone'}  cardPrev={'/' + cardPrev} currentCardQuestion={path} />
    )
}