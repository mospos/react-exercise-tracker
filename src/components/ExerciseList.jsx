import { useEffect, useState } from 'react';
import Exercise from './Exercise';
import axios from "axios";


export default function ExerciseList() {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/exercises/')
            .then(response => {
                setExercises(response.data)
            })
            .catch(err => console.log(err));
    });
    function deleteExercise(id){
        axios.delete('http://localhost:3000/exercises/'+id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        setExercises(exercises.filter(el => el._id !== id));
    }
    return (
        <div>
            <div>
                <h3>Logged Exercises</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {exercises.map(currentExer => {
            return <Exercise exercise={currentExer} deleteExercise={deleteExercise} key={currentExer._id}/>
        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}