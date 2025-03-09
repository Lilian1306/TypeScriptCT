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
    console.log('desde el type de save-activity')
  }

  return state
}