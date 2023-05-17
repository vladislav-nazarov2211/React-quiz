import React from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useNav } from '../hook/useNav';

export const Card4 = () => {

	const {path, cardNext, cardPrev} = useNav()

    return (
        <CardQuestions cardNext={'/' + cardNext} cardPrev={'/' + cardPrev} currentCardQuestion={path} />
    )
}