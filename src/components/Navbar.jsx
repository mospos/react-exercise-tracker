import { Link } from "react-router-dom";
export default function NavBar() {
    return (

        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to='/' className="navbar-brand" style={{ padding: 10 }}> Exercise Tracker</Link>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercises Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    )
}