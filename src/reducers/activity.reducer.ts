import type { Activity } from "../types"  //Importacion del tipado de actividades



export type ActivityActions = 
   { type: 'save-activity', payload: { newActivity : Activity }}

type ActivityState  = {
   activities : Activity[]
}

export const initalState : ActivityState = {
   activities: []
}

export const ActivityReducer = (
    state: ActivityState = initalState,
    action: ActivityActions
) => {
  if(action.type === 'save-activity') {
    // Este codigo manjera la logia para actualizar el state
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity]
    }
  }

  return state
}