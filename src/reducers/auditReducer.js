import { types } from "types/types"


const initialState = {
    countQuestions: [1],
}


export const auditReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.auditCountQuestion:
            return {
                ...state,
                countQuestions: action.payload
            }
        default:
            return state
    }

}
