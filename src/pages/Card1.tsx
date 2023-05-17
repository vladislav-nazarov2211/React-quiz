import React from 'react';
import { CardQuestions } from '../components/CardQuestions';
import { useNav } from '../hook/useNav';

export const Card1 = () => {
	const {path, cardNext} = useNav()
   
    return (
        <CardQuestions cardNext={'/' + cardNext} cardPrev={'/'} currentCardQuestion={path} />
    )
}