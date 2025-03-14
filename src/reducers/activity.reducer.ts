import type { Activity } from "../types"  //Importacion del tipado de actividades



export type ActivityActions = 
   { type: 'save-activity', payload: { newActivity : Activity }} |
   { type: 'set-activeId', payload: { id: Activity['id'] }}

export type ActivityState  = {
   activities : Activity[],
   activeId: Activity['id']
}

export const initalState : ActivityState = {
   activities: [],
   activeId: ''
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

  if(action.type === 'set-activeId') {
     return {
      ...state, 
      activeId: action.payload.id
     }
  }

  return state
}