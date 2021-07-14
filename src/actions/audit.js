import { types } from "types/types"


export const moreQuestions = (questions) => ({
    type: types.auditCountQuestion,
    payload:questions
})

export const lessQuestions = (questions) => ({
    type: types.auditCountQuestionLess,
    payload:questions
})