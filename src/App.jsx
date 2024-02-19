import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import CreateExercises from './components/CreateExercises';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';
function App() {
  return (
      <div className='container'>
        <Router>
            <NavBar />
            <br/>
            <div className='container-fluid'>
          <Routes>
            <Route path="/" element={<ExerciseList/>}/>
            <Route path="/edit/:id" element={<EditExercise/>}/>
            <Route path="/create" element={<CreateExercises/>}/>
            <Route path="/user" element={<CreateUser/>} />
            </Routes>
            </div>
        </Router>
      </div>
  )
}

export default App
