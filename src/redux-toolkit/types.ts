export type QuestionType = {
    question: string
    values: Array<string>
    correct: string
}

export interface QuestionsType {
    questions: Array<QuestionType>
    score: number,
    percent: number,
    totalCards: number,
    currentCardQuestion: string
}