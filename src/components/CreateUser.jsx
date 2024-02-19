import { useState } from "react";
import axios from 'axios';


export default function CreateUser() {
    const [username, setUsername] = useState('');
    function onChangeUserName(event) {
        setUsername(event.target.value);
    }
    function onSubmit(event) {
        event.preventDefault();
        const user = { username }
        console.log(user);
        axios.post('http://localhost:3000/users/add', user)
        .then(res => console.log(res.data))
        setUsername('');
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>User Name</label>
                    <br/>
                    <input type="text" 
                    className="form-control" 
                    value={username} 
                    onChange={onChangeUserName}
                    />
                </div>
                <br/>
                <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}