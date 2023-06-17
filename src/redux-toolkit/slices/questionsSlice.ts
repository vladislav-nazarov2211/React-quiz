import { createSlice } from '@reduxjs/toolkit'
import { QuestionType, QuestionsType } from '../types'

let questionsStorage = (sessionStorage.getItem("questions"))

const initialState: QuestionsType = {
    questions: (questionsStorage === null ? [] : JSON.parse(sessionStorage.getItem("questions") || '')),
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
            if (state.questions.length === 0) {
                let data = action.payload.map((item: QuestionType) => {
                    return {...item, answer: null, score: 0}
                })
                state.questions = data
            }
        },
        setScoreAndAnswer(state, action) {
            //@ts-ignore
            state.questions = state.questions.map((item) => {
                if (item.id === parseInt(action.payload.currentCardQuestion)) {
                    let answer
                    item.values.forEach((el: any) => {
                        if (el.id === parseInt(action.payload.value)) {
                            answer = {id: el.id, value: el.value}
                        }
                    })
                    //@ts-ignore
                    return {...item, answer: answer, score: answer.value === item.correct ? 1 : 0}
                } else {
                    return item
                }
            
            })
            sessionStorage.setItem("questions", JSON.stringify(state.questions))
        },
        setTotalCards(state) {
            state.totalCards = state.questions.length
        },
        setcurrentCardQuestion(state, action) {
            state.currentCardQuestion = action.payload
        },
        setTotalScore(state) {
            let initScore = 0
            state.questions.forEach((item) => {
                initScore = initScore + item.score
            })
            state.totalScore = initScore
        },
        setPercent(state, action) {
            state.percent = (((action.payload - 1) * 100) / state.totalCards)
        }
    }  
})

export const { setQuestions, setTotalCards, setPercent, setcurrentCardQuestion, setScoreAndAnswer, setTotalScore } = questionsSlice.actions
export default questionsSlice.reducer