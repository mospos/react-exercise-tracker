/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Exercise ({exercise, deleteExercise}) {
   return( <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+exercise._id}>edit</Link> | <button onClick={() => deleteExercise(exercise._id)}>delete</button>
        </td>
    </tr>
   )
}