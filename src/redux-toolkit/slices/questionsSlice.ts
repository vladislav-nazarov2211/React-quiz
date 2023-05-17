import { createSlice } from '@reduxjs/toolkit'
import { QuestionType, QuestionsType } from '../types'

const initialState: QuestionsType = {
    questions: [],
    totalScore: 0,
    percent: 0,
    totalCards: 0,
    currentCardQuestion: '',
}

const questionsSlice = createSlice({
    name: 'questionsSlice',
    initialState,
    reducers: {
        setQuestions(state, action) {
            let data = action.payload.map((item: QuestionType) => {
                return {...item, answer: '', score: 0}
            })
            state.questions = data
        },
        setScoreAndAnswer(state, action) {
            state.questions.map((item) => {
                if (item.id === parseInt(action.payload.currentCardQuestion)) {
                    // if (item.correct === )
                }
            })
        },
        setTotalCards(state) {
            state.totalCards = state.questions.length
        },
        setcurrentCardQuestion(state, action) {
            state.currentCardQuestion = action.payload
        },
        // setScore(state, action) {
        //     state.score = state.score + action.payload
        // },
        setPercent(state, action) {
            state.percent = (((action.payload - 1) * 100) / state.totalCards)
        }
    }  
})

export const { setQuestions, setTotalCards, setPercent, setcurrentCardQuestion, setScoreAndAnswer } = questionsSlice.actions
export default questionsSlice.reducer