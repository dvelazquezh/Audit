import { types } from "types/types"

const initialState = {
    platilla: []
}


export const auditReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.auditSaveTemplate:
            return {
                ...state,
                platilla: [ ...state.platilla, action.payload]
            }
        default:
            return state
    }

}
