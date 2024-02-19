import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";



export default function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    function onChangeUserName(event) {
        setUsername(event.target.value);
    }
    function onChangeDescription(event) {
        setDescription(event.target.value);
    }
    function onChangeDuration(event) {
        setDuration(event.target.value);
    }
    function onChangeDate(date){
        setDate(() => date);
    }
    useEffect(() => {
        axios.get('http://localhost:3000/users/')
        .then(res => {
            if(res.data.length > 0){
                setUsers(res.data.map(user => user.username));
            }
        })
    }, [])
    function onSubmit(e) {
        e.preventDefault();
        const exercise = {
            users,
            username,
            description,
            duration,
            date
        }
        console.log(exercise);
        axios.post('http://localhost:3000/exercises/add', exercise);
        window.location ='/';
    }
    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>User Name: </label>
                    <select required className="form-control" value={username}
                        onChange={onChangeUserName} >
                        {
                            users.map((user) => {
                                return <option key={user} value={user}>
                                    {user}
                                </option>
                            })
                        }
                    </select>
                    <br />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <br />
                    <input type="text" required className="form control"
                        value={description} onChange={onChangeDescription} />
                </div>
                <br />
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChangeDuration} />
                </div>
                <br />
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                <input type="submit" value="Create Exercise" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
