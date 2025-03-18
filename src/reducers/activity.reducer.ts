
import type { Activity } from "../types"  //Importacion del tipado de actividades



export type ActivityActions = 
   { type: 'save-activity', payload: { newActivity : Activity }} |
   { type: 'set-activeId', payload: { id: Activity['id'] }} | 
   { type: 'delete-activity', payload: {id: Activity['id']}}

export type ActivityState  = {
   activities : Activity[],
   activeId: Activity['id']
}

const localStorageActivities = () : Activity[] =>  {
   const activities = localStorage.getItem('activities')
   return activities ? JSON.parse(activities) : []
}

export const initalState : ActivityState = {
   activities: localStorageActivities(),
   activeId: ''
}

export const ActivityReducer = (
    state: ActivityState = initalState,
    action: ActivityActions
) => {


   // Codigo para guardar una actividad o comida en nuestro formulario
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

// Codigo para actualizar una actividad o comida
  if(action.type === 'set-activeId') {
     return {
      ...state, 
      activeId: action.payload.id
     }
  }

// Codigo para eliminar una actividad o comida
 if(action.type === 'delete-activity'){
   return {
      ...state,
      activities: state.activities.filter(activity => activity.id !== action.payload.id)
   }
 }

  return state
}