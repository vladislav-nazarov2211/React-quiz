import React from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useNav } from '../hook/useNav';

export const Card5 = () => {

    const {path, cardPrev} = useNav()

    return (
        <CardQuestions cardNext={'/almostdone'}  cardPrev={'/' + cardPrev} currentCardQuestion={path} />
    )
}