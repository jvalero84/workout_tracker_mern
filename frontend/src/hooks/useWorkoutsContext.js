import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext) // The useContext hook returns to us the value of the context we pass as param.
    // In this case, the object {state, dispatch} passed as value on WorkoutsContext.Provider tag.

    if (!context) {
        // Could happen for instance if we are trying to access the context from a component
        // that is not part of the tree of components wrapped by the WorkoutsContextProvider
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}
