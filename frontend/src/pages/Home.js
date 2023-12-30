import { useEffect } from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            // The fetch url now is relative because we have added a proxy property on package.json file
            // As react will not recognize the url as an internal resource or static asset it will proxy
            // the request to http://localhost:4000
            // Also as a byproduct it also removes the cross origin request error
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home
