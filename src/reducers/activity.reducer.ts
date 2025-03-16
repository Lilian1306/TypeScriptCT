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
   let updatedActivities : Activity[ ] = []
   if(state.activeId) {
     updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
   } else {
      updatedActivities = [...state.activities, action.payload.newActivity]
   }
    return {
      ...state,
      activities: updatedActivities,
      activeId: ''
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