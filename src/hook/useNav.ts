import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { setcurrentCardQuestion } from '../redux-toolkit/slices/questionsSlice';
import { AppDispatch } from '../redux-toolkit/store/store';

export const useNav = () => {
    const location = useLocation()
    const path: string =  location.pathname.substring(1)
    const cardNext = (parseInt(path) + 1).toString()
    const cardPrev = (parseInt(path) - 1).toString()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setcurrentCardQuestion(path))
    }, [])

    return {path, cardNext, cardPrev}
} 