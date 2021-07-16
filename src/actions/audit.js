import { types } from "types/types"


export const saveTemplate = (template) => ({
    type: types.auditSaveTemplate,
    payload:template
})

export const selectAudit = (id) => ({
    type: types.auditSelect,
    payload:id
})


