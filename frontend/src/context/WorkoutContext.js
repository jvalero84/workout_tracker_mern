import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    // state is the previous state (prior to being updated).
    switch (action.type) {
        case 'SET_WORKOUTS': // When the action.type is SET_WORKOUTS the payload property on the action we passed to the dispatch function will be an array with all the workouts.
            return {
                workouts: action.payload,
            }
        case 'CREATE_WORKOUT': // When the action.type is CREATE_WORKOUT, the payload property will be the single workout we are creating,
            // so we have to add it to the original array of workouts present in the state.
            return {
                workouts: [action.payload, ...state.workouts],
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id),
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    // we can destructure the children property from the props of this component.
    // The children property represents whatever components or template WorkoutsContextProvider wraps. Being in this case the App component

    const [state, dispatch] = useReducer(workoutsReducer, { workouts: null })

    return (
        // We have to pass the state and dispatch in the value property of the context provider so that it is available to the nested components.
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider> // We spread the state object properties so that we can access them directly from useContext
    )
}
