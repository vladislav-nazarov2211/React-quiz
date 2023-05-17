export type values = {
    id: number
    value: string
}

export type QuestionType = {
    id: number
    question: string
    values: Array<values>
    correct: string
    answer: string 
    score: number
}

export interface QuestionsType {
    questions: Array<QuestionType>
    totalScore: number,
    percent: number,
    totalCards: number,
    currentCardQuestion: string,
}