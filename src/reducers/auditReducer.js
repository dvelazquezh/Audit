import { types } from "types/types"

const initialState = {
    plantilla: [],
    seleccionAuditoría:''
}


export const auditReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.auditSaveTemplate:
            return {
                ...state,
                plantilla: [ ...state.plantilla, action.payload]
            }
        case types.auditSelect:
            return {
                ...state,
                seleccionAuditoría: action.payload
            }
        default:
            return state
    }

}
