import { createSlice } from '@reduxjs/toolkit'
import { QuestionsType } from '../types'

const initialState: QuestionsType = {
    questions: [],
    score: 0,
    percent: 0,
    totalCards: 0,
    currentCardQuestion: ''
}

const questionsSlice = createSlice({
    name: 'questionsSlice',
    initialState,
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload
        },
        setTotalCards(state) {
            state.totalCards = state.questions.length
        },
        setcurrentCardQuestion(state, action) {
            state.currentCardQuestion = action.payload
        },
        setScore(state, action) {
            state.score = state.score + action.payload
        },
        setPercent(state, action) {
            console.log(action.payload, state.totalCards)
            state.percent = (((action.payload) * 100) / state.totalCards)
        }
    }  
})

export const { setQuestions, setTotalCards, setScore, setPercent, setcurrentCardQuestion } = questionsSlice.actions
export default questionsSlice.reducer